# The weekender

The weekender is a quiz posted on saturday

We start at the stuff API.

```http
GET https://www.stuff.co.nz/api/v1.0/stuff/page?path=quizzes
```

This gives us a page of results, with the most recent quizzes, we take this JSON object and based on the date and title, we determine it's a quiz. Then we really only want the id.

[quizzes.json](./the-weekender/quizzes.json)

```json
{
  "id": 361038905,
  "type": "ARTICLE",
  "teaser": {
    "title": "Weekender quiz: When plants release water vapour through tiny openings in their leaves, what is it called?",
    "intro": "Stuff weekender quiz: October 10, 2026",
    "image": {
      "id": "361038904",
      "alt": "pexels-valiphotos-797947.jpg",
      "url": "...snip",
      "width": 5472,
      "height": 3648
    }
  }
}
```

We pass that id back to the API to get the full json document for that "story".

```http
GET https://www.stuff.co.nz/api/v1.0/stuff/story/361038905
```
[article.json](./the-weekender/article.json)

In that JSON document, at `.content.contendBody.assets[] | selecT(.type == "WIDGET")` we get this.

```json
{
  "type": "WIDGET",
  "showAtParagraph": 1,
  "item": {
    "content": "(... snipped html)"
  },
  "contentAccess": "inherit"
}
```

the HTML is weirdly escaped, I would guess to sneak past their own WAF, but it expands to this.

There's also some data inside the iframe element but it doesn't seem to be necessary.

[article-widget](./the-weekender/article-widget.html)


```html
  <iframe
    title="Weekender Oct 10, 2026"
    src="https://www.riddle.com/embed/a/RHs3ooz0?lazyImages=false&staticHeight=false"
    allow="autoplay"
    referrerpolicy="strict-origin"
    >
    ...
    </iframe>
```

That url is an HTML page, that's where unstuff hands off to the user.

```
GET https://www.riddle.com/embed/a/RHs3ooz0?lazyImages=false&staticHeight=false
```

[entry-no-referer.html](./the-weekender/entry-no-referer.html)

There's a bunch of `<script type="text/json">{ ... }</script>` business going on here.

Plus one script with js: `https://www.riddle.com/embed/build/assets/app-BUr2aV9H.js`

```js
import { K as ke } from "./InvalidEmail-BvIe8CoU.js";
import { M as Ce } from "./useMediaOrientation-DtxNNf98.js";
import { M as Le } from "./Media-DJ3lppr6.js";
import { M as Be } from "./RestartRiddle-Dv7Rlj3m.js";
import { B as Ee } from "./BackgroundMedia-D2yauzDq.js";
```
```zsh
items=(
  "https://www.riddle.com/embed/build/assets/InvalidEmail-BvIe8CoU.js"
  "https://www.riddle.com/embed/build/assets/useMediaOrientation-DtxNNf98.js"
  "https://www.riddle.com/embed/build/assets/Media-DJ3lppr6.js"
  "https://www.riddle.com/embed/build/assets/RestartRiddle-Dv7Rlj3m.js"
  "https://www.riddle.com/embed/build/assets/BackgroundMedia-D2yauzDq.js"
)

for item in "${items[@]}"; do
  curl \
    -L -O -J \
    -e "https://www.riddle.com/embed/a/RHs3ooz0?lazyImages=false&staticHeight=false" \
    "${item}"
done
```

this looks a little bit interesting:

```js
      const X = w(() =>
          s.settings.ads?.isEnabled && s.settings.ads.adTop?.isEnabled
            ? s.settings.ads.adTop.ad
            : null,
        ),
        Y = w(() =>
          s.settings.ads?.isEnabled && s.settings.ads.adBottom?.isEnabled
            ? s.settings.ads.adBottom.ad
            : null,
        );
```

`w` looks like it might be some kind of loader? like ... `onDOMReady` or something? Seems weird in 2026 in what looks like a Vue app, so maybe it's something else.

It's imported here

```js
import {
  // snip
  g as w, // app.js L42
  // snip
} from "./RteBlock-fGDN0Vv6.js";
```

```js
export {
  // snip
  Ws as g, // RteBlock-fGDN0Vv6.js L27582
  // snip
}
```

```js
const Ws = (e, t) => {
  const n = (function (e, t, n = !1) {
    let r, o;
    return (b(e) ? (r = e) : ((r = e.get), (o = e.set)), new vn(r, o, n));
  })(e, 0, Ps);
  return n;
};
```

[Vue3 :: computed](https://github.com/vuejs/core/blob/4ab865a848a1da3d10fb674f857e5fff13094644/packages/reactivity/src/computed.ts#L198C17-L198C25)
```js
const Ws = (e, t) => {
  let r, o;
  if (b(e)) {
    r = e;
  } else {
    r = e.get;
    o = e.set;
  }

  // this is ComputedRefImpl
  return new vn(r, o, Ps);
};
```

Okay, so that's a bit of a derail. Let's try to figure out where `s.settings` is calculated. It's gotta be from one of the json script blocks right?

```js
s = new I();

import {
  u as I
} from './RteBlock-fGDN0Vv6.js'
```

Looks like some kind of class abstraction? In 2026? In a codebase with tonnes of real classes? Can't be. 

Second guess is ... it's Vue3's "registerComponent" or something? I don't really know anything about Vue except apparently it uses reactive primitives pretty similar to signals?

```js
// L 20418
Ty = oc("Riddle", {
  state: () => ({
    isPreview: window.isPreview || !1,
    isInited: !1,
    isCssLoaded: !1,
    isFirstBlockShown: !1,
    riddle: {},
    settings: {},
    ...
  }),
  ...
})

function oc(e, t, n) {
  let r;
  const o = "function" == typeof t;
  function i(n, i) {
    const s = Yo();
    ((n = n || (s ? Ko(Ul, null) : null)) && jl(n),
      (n = Vl)._s.has(e) ||
        (o
          ? rc(e, t, r, n)
          : (function (e, t, n) {
              const { state: r, actions: o, getters: i } = t,
                s = n.state.value[e];
              let a;
              a = rc(
                e,
                function () {
                  s || (n.state.value[e] = r ? r() : {});
                  const t = fn(n.state.value[e]);
                  return tc(
                    t,
                    o,
                    Object.keys(i || {}).reduce(
                      (t, r) => (
                        (t[r] = Jt(
                          Ws(() => {
                            jl(n);
                            const t = n._s.get(e);
                            return i[r].call(t, t);
                          }),
                        )),
                        t
                      ),
                      {},
                    ),
                  );
                },
                t,
                n,
                0,
                !0,
              );
            })(e, r, n)));

    // looks like this private accessor to toDisplayString
    // https://github.com/vuejs/core/blob/4ab865a848a1da3d10fb674f857e5fff13094644/packages/runtime-core/src/compat/instance.ts#L175
    return n._s.get(e);
  }
  return ((r = o ? n : t), (i.$id = e), i);
}

export {
  Ty as u // RteBlock-fGDN0Vv6.js L 27596
}
```

`Ty::ModifySettings` calls `this.$patch` to update settings.

[this.$patch](https://pinia.vuejs.org/api/pinia/interfaces/StoreWithState.html#-patch-)

It looks like the only place ModifySettings is called is `Ty::InitRiddleStore`.

```js
            (e.settings = window.meta.preset.settings),
            this.ModifySettings(e.settings),
```

So that gives us a lead on reconfiguring by patching that global.
