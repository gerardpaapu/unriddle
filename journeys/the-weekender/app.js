const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/useMediaOrientation-DtxNNf98.js",
      "assets/RteBlock-fGDN0Vv6.js",
      "assets/RteBlock-CAweKSB9.css",
      "assets/HighTraffic-DFdFb4f9.js",
      "assets/HighTraffic-CwhnW01y.css",
      "assets/Inactive-BY1kaSgD.js",
      "assets/Inactive-ChHbUKQo.css",
      "assets/InactiveOnResultPage-B0Vu_n_J.js",
      "assets/InactiveOnResultPage-BVrqtx49.css",
      "assets/InvalidEmail-BvIe8CoU.js",
      "assets/Media-DJ3lppr6.js",
      "assets/Media-CawYGQUv.css",
      "assets/RestartRiddle-Dv7Rlj3m.js",
      "assets/RestartRiddle-CNXPBRTn.css",
    ]),
) => i.map((i) => d[i]);
import {
  d as e,
  bm as t,
  A as a,
  ap as o,
  aX as n,
  k as i,
  bZ as r,
  a8 as l,
  H as s,
  aM as d,
  B as c,
  C as u,
  c as p,
  o as g,
  F as f,
  e as v,
  t as m,
  j as h,
  _ as b,
  g as w,
  aw as y,
  b as _,
  I as k,
  h as C,
  n as L,
  a3 as B,
  ag as E,
  ax as R,
  ay as T,
  u as I,
  cv as S,
  V as M,
  a0 as A,
  a as O,
  z as P,
  s as x,
  m as V,
  l as H,
  c1 as D,
  b6 as N,
  br as j,
  f as z,
  bs as U,
  b7 as F,
  cw as Z,
  b8 as G,
  cx as W,
  cy as q,
  bt as J,
  b9 as K,
  T as $,
  cz as Q,
  cA as X,
  aJ as Y,
  E as ee,
  bb as te,
  bc as ae,
  bd as oe,
  i as ne,
  be as ie,
  bf as re,
  bg as le,
  bh as se,
  bi as de,
  ai as ce,
  bj as ue,
  bk as pe,
  bW as ge,
  cB as fe,
  aA as ve,
  bp as me,
  bH as he,
  cC as be,
  cD as we,
  cE as ye,
  cF as _e,
} from "./RteBlock-fGDN0Vv6.js";
import { K as ke } from "./InvalidEmail-BvIe8CoU.js";
import { M as Ce } from "./useMediaOrientation-DtxNNf98.js";
import { M as Le } from "./Media-DJ3lppr6.js";
import { M as Be } from "./RestartRiddle-Dv7Rlj3m.js";
import { B as Ee } from "./BackgroundMedia-D2yauzDq.js";
function Re(e) {
  if (!ke.autoDrawEnabled) {
    const t = e.getLayer() || e.getStage();
    t && t.batchDraw();
  }
}
const Te = { key: !0, style: !0, elm: !0, isRootInsert: !0 },
  Ie = ".vue-konva-event";
function Se(e, t, a, o) {
  const n = e.__konvaNode,
    i = {};
  let r = !1;
  for (let l in a) {
    if (Te.hasOwnProperty(l)) continue;
    const e = "on" === l.slice(0, 2),
      o = a[l] !== t[l];
    if (e && o) {
      let e = l.slice(2).toLowerCase();
      ("content" === e.slice(0, 7) &&
        (e = "content" + e.slice(7, 1).toUpperCase() + e.slice(8)),
        n?.off(e + Ie, a[l]));
    }
    !t.hasOwnProperty(l) && n?.setAttr(l, void 0);
  }
  for (let l in t) {
    if (Te.hasOwnProperty(l)) continue;
    let e = "on" === l.slice(0, 2);
    const s = a[l] !== t[l];
    if (e && s) {
      let e = l.slice(2).toLowerCase();
      ("content" === e.slice(0, 7) &&
        (e = "content" + e.slice(7, 1).toUpperCase() + e.slice(8)),
        t[l] && (n?.off(e + Ie), n?.on(e + Ie, t[l])));
    }
    !e &&
      (t[l] !== a[l] || (o && t[l] !== n?.getAttr(l))) &&
      ((r = !0), (i[l] = t[l]));
  }
  r && n && (n.setAttrs(i), Re(n));
}
function Me(e) {
  return e.component
    ? e.component.__konvaNode || Me(e.component.subTree)
    : null;
}
function Ae(e) {
  const { el: t, component: a } = e,
    o = Me(e);
  if (t?.tagName && a && !o) {
    t.tagName.toLowerCase();
    return null;
  }
  return o;
}
function Oe(e) {
  const t = (e) =>
    ((e) => !!e && "object" == typeof e && "component" in e)(e)
      ? [e, ...t(e.children)]
      : ((e) => Array.isArray(e))(e)
        ? e.flatMap(t)
        : [];
  return t(e.children);
}
function Pe(e, t) {
  const a = Oe(e),
    o = [];
  a.forEach((e) => {
    const t = Ae(e);
    t && o.push(t);
  });
  let n = !1;
  (o.forEach((e, t) => {
    e.getZIndex() !== t && (e.setZIndex(t), (n = !0));
  }),
    n && Re(t));
}
const xe = ke.default?.Stage || ke.Stage,
  Ve = e({
    name: "Stage",
    props: {
      config: {
        type: Object,
        default: function () {
          return {};
        },
      },
      __useStrictMode: { type: Boolean },
    },
    inheritAttrs: !1,
    setup(e, { attrs: d, slots: c, expose: u }) {
      const p = o();
      if (!p) return;
      const g = t({}),
        f = a(null),
        v = new xe({
          width: e.config.width,
          height: e.config.height,
          container: document.createElement("div"),
        });
      function m() {
        if (!p) return;
        const t = g || {},
          a = { ...d, ...e.config };
        (Se(p, a, t, e.__useStrictMode), Object.assign(g, a));
      }
      return (
        (p.__konvaNode = v),
        m(),
        i(() => {
          (f.value && ((f.value.innerHTML = ""), v.container(f.value)), m());
        }),
        r(() => {
          (m(), Pe(p.subTree, v));
        }),
        l(() => {
          v.destroy();
        }),
        s(() => e.config, m, { deep: !0 }),
        u({
          getStage: function () {
            return p?.__konvaNode;
          },
          getNode: function () {
            return p?.__konvaNode;
          },
        }),
        () => n("div", { ref: f, style: d?.style }, c.default?.())
      );
    },
  }),
  He = { Group: !0, Layer: !0, FastLayer: !0, Label: !0 };
function De(a, l) {
  return e({
    name: a,
    props: {
      config: {
        type: Object,
        default: function () {
          return {};
        },
      },
      __useStrictMode: { type: Boolean },
    },
    setup(e, { attrs: c, slots: u, expose: p }) {
      const g = o();
      if (!g) return;
      const f = t({}),
        v = new l();
      function m() {
        if (!g) return;
        const t = {};
        for (const e in g?.vnode.props)
          "on" === e.slice(0, 2) && (t[e] = g.vnode.props[e]);
        const a = f || {},
          o = { ...c, ...e.config, ...t };
        (Se(g, o, a, e.__useStrictMode), Object.assign(f, o));
      }
      ((g.__konvaNode = v),
        (g.vnode.__konvaNode = v),
        m(),
        i(() => {
          const e = (function (e) {
            return (function e(t) {
              return t?.__konvaNode ? t : t?.parent ? e(t.parent) : null;
            })(e.parent);
          })(g)?.__konvaNode;
          (e && "add" in e && e.add(v), Re(v));
        }),
        d(() => {
          (Re(v), v.destroy(), v.off(".vue-konva-event"));
        }),
        r(() => {
          (m(), Pe(g.subTree, v));
        }),
        s(() => e.config, m, { deep: !0 }),
        p({
          getStage: function () {
            return g?.__konvaNode;
          },
          getNode: function () {
            return g?.__konvaNode;
          },
        }));
      const h = He.hasOwnProperty(a);
      return () => (h ? n("template", {}, u.default?.()) : null);
    },
  });
}
const Ne = ke.default || ke,
  je = De("Arc", Ne.Arc),
  ze = De("Arrow", Ne.Arrow),
  Ue = De("Circle", Ne.Circle),
  Fe = De("Ellipse", Ne.Ellipse),
  Ze = De("FastLayer", Ne.FastLayer),
  Ge = De("Group", Ne.Group),
  We = De("Image", Ne.Image),
  qe = De("Label", Ne.Label),
  Je = De("Layer", Ne.Layer),
  Ke = De("Line", Ne.Line),
  $e = De("Path", Ne.Path),
  Qe = De("Rect", Ne.Rect),
  Xe = De("RegularPolygon", Ne.RegularPolygon),
  Ye = De("Ring", Ne.Ring),
  et = De("Shape", Ne.Shape),
  tt = De("Sprite", Ne.Sprite),
  at = De("Star", Ne.Star),
  ot = De("Tag", Ne.Tag),
  nt = De("Text", Ne.Text),
  it = De("TextPath", Ne.TextPath),
  rt = De("Transformer", Ne.Transformer),
  lt = De("Wedge", Ne.Wedge),
  st = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Arc: je,
        Arrow: ze,
        Circle: Ue,
        Ellipse: Fe,
        FastLayer: Ze,
        Group: Ge,
        Image: We,
        Label: qe,
        Layer: Je,
        Line: Ke,
        Path: $e,
        Rect: Qe,
        RegularPolygon: Xe,
        Ring: Ye,
        Shape: et,
        Sprite: tt,
        Star: at,
        Tag: ot,
        Text: nt,
        TextPath: it,
        Transformer: rt,
        Wedge: lt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  dt = {
    install: (e, t) => {
      const a = t?.prefix || "V",
        o = t?.customNodes
          ? Object.entries(t.customNodes).map(([e, t]) => De(e, t))
          : [];
      [Ve, ...Object.values(st), ...o].forEach((t) => {
        e.component(`${a}${t.name}`, t);
      });
    },
  },
  ct = { class: "toast-header" },
  ut = { class: "me-auto" },
  pt = { class: "toast-body" },
  gt = { class: "offline-wrapper" },
  ft = b(
    e({
      __name: "Offline",
      setup(e) {
        const t = c(),
          { errorHandlingText: a } = u(t);
        return (e, t) => (
          g(),
          p(
            f,
            null,
            [
              v("div", ct, [v("strong", ut, m(h(a)("headline")), 1)]),
              v("div", pt, [
                v("div", gt, [
                  v("div", null, m(h(a)("body")), 1),
                  t[0] ||
                    (t[0] = v(
                      "div",
                      { class: "offline-icon" },
                      [
                        v(
                          "svg",
                          {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                          [
                            v("path", {
                              d: "M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0",
                              stroke: "currentColor",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              opacity: "0.3",
                            }),
                            v("line", {
                              x1: "2",
                              y1: "2",
                              x2: "22",
                              y2: "22",
                              stroke: "currentColor",
                              "stroke-width": "2.5",
                              "stroke-linecap": "round",
                            }),
                          ],
                        ),
                      ],
                      -1,
                    )),
                ]),
              ]),
            ],
            64,
          )
        );
      },
    }),
    [["__scopeId", "data-v-7132a852"]],
  ),
  vt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ft },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  mt = { key: 0, class: "error-handling" },
  ht = e({
    __name: "ErrorHandling",
    setup(e) {
      const t = c(),
        a = w(() =>
          t.errorHandlingToast
            ? "Offline" === t.errorHandlingToast
              ? ft
              : y(() =>
                  R(
                    Object.assign({
                      "./ErrorHandlingToasts/BaseErrorToast.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.B,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/HighTraffic.vue": () =>
                        T(
                          () => import("./HighTraffic-DFdFb4f9.js"),
                          __vite__mapDeps([3, 1, 2, 4]),
                        ),
                      "./ErrorHandlingToasts/Inactive.vue": () =>
                        T(
                          () => import("./Inactive-BY1kaSgD.js"),
                          __vite__mapDeps([5, 1, 2, 6]),
                        ),
                      "./ErrorHandlingToasts/InactiveOnResultPage.vue": () =>
                        T(
                          () => import("./InactiveOnResultPage-B0Vu_n_J.js"),
                          __vite__mapDeps([7, 1, 2, 8]),
                        ),
                      "./ErrorHandlingToasts/InvalidEmail.vue": () =>
                        T(
                          () =>
                            import("./InvalidEmail-BvIe8CoU.js").then(
                              (e) => e.I,
                            ),
                          __vite__mapDeps([9, 0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/MissingIdentifier.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.a,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/MissingNickname.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.b,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/NicknameAlreadyTaken.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.N,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/NicknameContainsBadwords.vue":
                        () =>
                          T(
                            () =>
                              import("./useMediaOrientation-DtxNNf98.js").then(
                                (e) => e.c,
                              ),
                            __vite__mapDeps([0, 1, 2]),
                          ),
                      "./ErrorHandlingToasts/Offline.vue": () =>
                        T(() => Promise.resolve().then(() => vt), void 0),
                      "./ErrorHandlingToasts/RatelimitExceeded.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.R,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/RefreshForNewRiddle.vue": () =>
                        T(
                          () => import("./Media-DJ3lppr6.js").then((e) => e.R),
                          __vite__mapDeps([10, 1, 2, 0, 11]),
                        ),
                      "./ErrorHandlingToasts/RestartRiddle.vue": () =>
                        T(
                          () =>
                            import("./RestartRiddle-Dv7Rlj3m.js").then(
                              (e) => e.R,
                            ),
                          __vite__mapDeps([12, 1, 2, 13]),
                        ),
                      "./ErrorHandlingToasts/RiddleClosed.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.d,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/SingleVote.vue": () =>
                        T(
                          () =>
                            import("./useMediaOrientation-DtxNNf98.js").then(
                              (e) => e.S,
                            ),
                          __vite__mapDeps([0, 1, 2]),
                        ),
                      "./ErrorHandlingToasts/WaitingForResponse.vue": () =>
                        T(
                          () =>
                            import("./RteBlock-fGDN0Vv6.js").then((e) => e.dJ),
                          __vite__mapDeps([1, 2]),
                        ),
                    }),
                    `./ErrorHandlingToasts/${t.errorHandlingToast}.vue`,
                    3,
                  ),
                )
            : null,
        );
      return (e, o) => (
        g(),
        _(
          E,
          { name: "error-handling-transition" },
          {
            default: k(() => [
              h(t).errorHandlingToast
                ? (g(),
                  p("div", mt, [
                    v(
                      "div",
                      {
                        class: L(["toast", "error"]),
                        role: "alert",
                        "aria-live": "assertive",
                        "aria-atomic": "true",
                      },
                      [(g(), _(B(a.value)))],
                    ),
                  ]))
                : C("", !0),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  bt = { key: 0 },
  wt = { key: 1, class: "riddle-footer" },
  yt = ["aria-label"],
  _t = ["aria-label"],
  kt = b(
    e({
      __name: "RiddleFooter",
      setup(e) {
        const t = window.isQzzr,
          a = I(),
          o = w(() => a.settings),
          n = w(() => a.palette),
          i = w(() => o.value.isRiddleFooterVisible),
          r = w(
            () =>
              "CustomLogo" === o.value.footerBranding.type &&
              o.value.footerBranding.logo,
          ),
          l = w(() => {
            switch (o.value.footerBranding.logoPosition) {
              case S.Left:
                return "0";
              case S.Right:
                return "2";
            }
          }),
          s = w(() => "Standard" === a.layoutId),
          d = w(() => c.current.typeGroup === A.Predictor),
          c = M(),
          u = w(() => o.value.footerText.text),
          f = w(
            () =>
              o.value.footerText.isEnabled &&
              u.value.length > 0 &&
              (c.current == c.start || o.value.footerText.isOnAllBlocksEnabled),
          ),
          m = w(() =>
            r.value ? o.value.footerBranding.maxWidth + "px" : null,
          );
        return (e, a) => {
          const c = O("Media"),
            b = O("HtmlRenderer");
          return f.value || r.value || i.value
            ? (g(),
              p("footer", bt, [
                f.value || r.value
                  ? (g(),
                    p(
                      "div",
                      {
                        key: 0,
                        class: L([
                          "custom-footer",
                          { "has-border-radius": s.value },
                        ]),
                        style: P({
                          "flex-direction":
                            o.value.footerBranding.logoPosition === h(S).Center
                              ? "column"
                              : "row",
                        }),
                      },
                      [
                        r.value
                          ? (g(),
                            p(
                              "div",
                              {
                                key: 0,
                                class: "custom-logo-wrapper",
                                style: P({
                                  order: l.value,
                                  "text-align":
                                    o.value.footerBranding.logoPosition ===
                                    h(S).Center
                                      ? "center"
                                      : o.value.footerBranding.logoPosition ===
                                          h(S).Left
                                        ? "left"
                                        : "right",
                                  "background-color": d.value
                                    ? "transparent"
                                    : n.value.footerColor,
                                }),
                              },
                              [
                                v(
                                  "div",
                                  {
                                    class: "media-wrapper",
                                    style: P({ "max-width": m.value }),
                                  },
                                  [
                                    x(
                                      c,
                                      {
                                        media: o.value.footerBranding.logo,
                                        class: "media",
                                        href: o.value.footerBranding.link,
                                        mediaSection: h(Ce).FooterLogo,
                                      },
                                      null,
                                      8,
                                      ["media", "href", "mediaSection"],
                                    ),
                                  ],
                                  4,
                                ),
                              ],
                              4,
                            ))
                          : C("", !0),
                        f.value
                          ? (g(),
                            _(
                              b,
                              {
                                key: 1,
                                class: L([
                                  "footer-text-wrapper",
                                  { "transparent-footer": d.value },
                                ]),
                                html: u.value,
                              },
                              null,
                              8,
                              ["class", "html"],
                            ))
                          : C("", !0),
                      ],
                      6,
                    ))
                  : C("", !0),
                i.value
                  ? (g(),
                    p("div", wt, [
                      h(t)
                        ? C("", !0)
                        : (g(),
                          p(
                            "a",
                            {
                              key: 0,
                              href: "https://www.riddle.com/create-your-own-content-with-riddle/?utm_source=made-with-riddle&utm_medium=embed",
                              rel: "noopener noreferrer nofollow",
                              target: "_blank",
                              class: "riddle-cta",
                              "aria-label": e.$t(
                                "v2.footer.aria.madeWithRiddle",
                              ),
                            },
                            [
                              ...(a[0] ||
                                (a[0] = [
                                  v(
                                    "span",
                                    { class: "riddle-cta-brand" },
                                    [
                                      V(" Made with "),
                                      v(
                                        "span",
                                        { class: "riddle-cta-brand-logo" },
                                        [
                                          v(
                                            "svg",
                                            {
                                              width: "71",
                                              height: "18",
                                              viewBox: "0 0 71 18",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              role: "img",
                                              "aria-label": "Riddle",
                                            },
                                            [
                                              v(
                                                "g",
                                                {
                                                  "clip-path":
                                                    "url(#clip0_4447_52732)",
                                                },
                                                [
                                                  v("path", {
                                                    d: "M8.52101 18C8.08114 18 7.64822 17.8852 7.25877 17.661L1.2692 14.2011C0.0556404 13.5004 -0.359891 11.9444 0.339036 10.7308L3.7989 4.74123C4.10838 4.20574 4.60215 3.80238 5.19154 3.60417C5.55492 3.48247 5.94958 3.67893 6.07129 4.04231C6.19299 4.40742 5.99653 4.80035 5.63142 4.92205C5.36367 5.01072 5.14112 5.19328 5.00203 5.43495L1.5439 11.4245C1.22747 11.9739 1.41525 12.6781 1.96465 12.9945L7.95422 16.4526C8.21849 16.6056 8.52797 16.6456 8.82527 16.5656C9.12258 16.4857 9.3712 16.2961 9.5242 16.0319L10.0979 15.0374C10.2892 14.7053 10.7152 14.5906 11.0472 14.7835C11.3793 14.9765 11.4941 15.4008 11.3011 15.7328L10.7273 16.7273C10.39 17.3132 9.84063 17.7322 9.18517 17.9079C8.96436 17.967 8.74182 17.9965 8.52101 17.9965V18Z",
                                                    fill: "#4F4BC0",
                                                  }),
                                                  v("path", {
                                                    d: "M11.8853 14.3193C11.7079 14.3193 11.5288 14.2515 11.3932 14.1159L6.50246 9.22515C5.51145 8.23413 5.51145 6.62417 6.50246 5.63315L11.3932 0.742393C12.3842 -0.248624 13.9959 -0.246885 14.9852 0.742393L17.2281 2.98522C17.4993 3.25645 17.4993 3.69632 17.2281 3.96928C16.9568 4.24051 16.5152 4.24051 16.244 3.96928L14.0012 1.72646C13.5526 1.27789 12.8241 1.27789 12.3755 1.72646L7.48479 6.61721C7.03622 7.06578 7.03622 7.79426 7.48479 8.24283L12.3755 13.1336C12.6468 13.4048 12.6468 13.8447 12.3755 14.1176C12.2399 14.2533 12.0626 14.3211 11.8835 14.3211L11.8853 14.3193Z",
                                                    fill: "#4F4BC0",
                                                  }),
                                                  v("path", {
                                                    d: "M17.7114 18C17.4906 18 17.2663 17.9704 17.0472 17.9113C16.39 17.7357 15.8424 17.3167 15.5051 16.7308L12.0469 10.7412C11.3463 9.52767 11.7636 7.9716 12.9771 7.27094L18.9667 3.81281C19.5526 3.47552 20.2359 3.38511 20.8931 3.56071C21.5503 3.73631 22.0979 4.15706 22.4352 4.74124L25.8934 10.7308C26.2324 11.3167 26.3211 12 26.1455 12.6572C25.9699 13.3144 25.5509 13.8621 24.9649 14.1994L18.9754 17.6575C18.5859 17.8818 18.153 17.9965 17.7131 17.9965L17.7114 18ZM20.2289 4.86468C20.0307 4.86468 19.836 4.91684 19.6604 5.01768L13.6708 8.4758C13.1214 8.79223 12.9336 9.49638 13.2501 10.0458L16.7082 16.0354C16.8612 16.2996 17.1081 16.4891 17.4071 16.5691C17.7044 16.6491 18.0139 16.6091 18.2782 16.4561L24.2678 12.998C24.532 12.845 24.7215 12.5981 24.8015 12.299C24.8815 12.0017 24.8415 11.6923 24.6885 11.428L21.2304 5.43842C21.0774 5.17415 20.8305 4.98464 20.5314 4.90467C20.4306 4.87859 20.3298 4.86468 20.2289 4.86468Z",
                                                    fill: "#4F4BC0",
                                                  }),
                                                ],
                                              ),
                                              v("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M48.7732 8.41687C48.3097 7.6244 47.3378 7.22069 46.321 7.22069C44.3922 7.22069 42.7923 8.6262 42.7923 10.8541C42.7923 13.067 44.4221 14.5024 46.336 14.5024C47.3079 14.5024 48.3097 14.0688 48.7732 13.2763V13.7398C48.7732 14.1136 49.0722 14.4276 49.461 14.4276C49.8348 14.4276 50.1338 14.1136 50.1338 13.7398V4.1854C50.1338 3.81159 49.8348 3.4976 49.461 3.4976C49.0722 3.4976 48.7732 3.81159 48.7732 4.1854V8.41687ZM48.7582 10.8391C48.7582 12.3194 47.6817 13.1717 46.4406 13.1717C45.1846 13.1717 44.1828 12.2147 44.1828 10.8391C44.1828 9.44857 45.1846 8.55144 46.4406 8.55144C47.562 8.55144 48.7582 9.3439 48.7582 10.8391Z",
                                                fill: "#1D2025",
                                              }),
                                              v("path", {
                                                d: "M40.5237 5.69557C40.0153 5.69557 39.5817 5.32176 39.5817 4.81339C39.5817 4.30501 40.0153 3.93121 40.5237 3.93121C41.047 3.93121 41.4657 4.30501 41.4657 4.81339C41.4657 5.32176 41.047 5.69557 40.5237 5.69557Z",
                                                fill: "#1D2025",
                                              }),
                                              v("path", {
                                                d: "M40.5237 14.4276C40.9125 14.4276 41.2115 14.1136 41.2115 13.7398V7.98325C41.2115 7.60945 40.9125 7.29545 40.5237 7.29545C40.1499 7.29545 39.8508 7.60945 39.8508 7.98325V13.7398C39.8508 14.1136 40.1499 14.4276 40.5237 14.4276Z",
                                                fill: "#1D2025",
                                              }),
                                              v("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M34.7761 10.4952H32.1247V13.7249C32.1247 14.1136 31.8256 14.4276 31.4219 14.4276C31.0332 14.4276 30.7341 14.1136 30.7341 13.7249V4.64891C30.7341 4.31997 31.0033 4.05083 31.3173 4.05083H34.846C37.029 4.05083 37.9112 5.66566 37.9112 7.2805C37.9112 8.51411 37.4058 9.72202 36.2134 10.2364L37.886 13.3821C38.0685 13.7253 37.9519 14.143 37.5954 14.3325C37.2521 14.515 36.8407 14.3781 36.6582 14.0349L34.7761 10.4952ZM36.5206 7.2805C36.5206 6.33851 36.0272 5.35167 34.831 5.35167H32.1396V9.19438H34.7563C36.0123 9.19438 36.5206 8.23744 36.5206 7.2805Z",
                                                fill: "#1D2025",
                                              }),
                                              v("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M55.0994 7.22069C56.1161 7.22069 57.088 7.6244 57.5515 8.41687V4.1854C57.5515 3.81159 57.8506 3.4976 58.2393 3.4976C58.6131 3.4976 58.9122 3.81159 58.9122 4.1854V13.7398C58.9122 14.1136 58.6131 14.4276 58.2393 14.4276C57.8506 14.4276 57.5515 14.1136 57.5515 13.7398V13.2763C57.088 14.0688 56.0862 14.5024 55.1143 14.5024C53.2004 14.5024 51.5707 13.067 51.5707 10.8541C51.5707 8.6262 53.1705 7.22069 55.0994 7.22069ZM55.219 13.1717C56.46 13.1717 57.5366 12.3194 57.5366 10.8391C57.5366 9.3439 56.3404 8.55144 55.219 8.55144C53.963 8.55144 52.9612 9.44857 52.9612 10.8391C52.9612 12.2147 53.963 13.1717 55.219 13.1717Z",
                                                fill: "#1D2025",
                                              }),
                                              v("path", {
                                                d: "M62.3022 4.1854C62.3022 3.81159 62.0032 3.4976 61.6144 3.4976C61.2406 3.4976 60.9416 3.81159 60.9416 4.1854V13.7398C60.9416 14.1136 61.2406 14.4276 61.6144 14.4276C62.0032 14.4276 62.3022 14.1136 62.3022 13.7398V4.1854Z",
                                                fill: "#1D2025",
                                              }),
                                              v("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M67.297 7.22069C69.2856 7.22069 70.7659 8.6262 70.7659 10.8391C70.7659 11.1531 70.5117 11.3774 70.2276 11.3774H65.084C65.2485 12.5437 66.1606 13.2763 67.3418 13.2763C68.1791 13.2763 68.6427 13.067 69.1211 12.5437C69.3753 12.2596 69.7641 12.1699 70.0332 12.3642C70.3024 12.5736 70.3622 12.9773 70.1528 13.2165C69.48 14.0837 68.4333 14.5024 67.297 14.5024C65.3083 14.5024 63.7234 13.052 63.7234 10.8391C63.7234 8.6262 65.3083 7.22069 67.297 7.22069ZM67.297 8.44677C66.1456 8.44677 65.2485 9.14952 65.084 10.3158H69.4202C69.2557 9.14952 68.4184 8.44677 67.297 8.44677Z",
                                                fill: "#1D2025",
                                              }),
                                              v("defs", null, [
                                                v(
                                                  "clipPath",
                                                  { id: "clip0_4447_52732" },
                                                  [
                                                    v("rect", {
                                                      width: "26.2341",
                                                      height: "18",
                                                      fill: "white",
                                                    }),
                                                  ],
                                                ),
                                              ]),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                    -1,
                                  ),
                                ])),
                            ],
                            8,
                            yt,
                          )),
                      h(t)
                        ? (g(),
                          p(
                            "a",
                            {
                              key: 1,
                              href: "https://www.qzzr.com/create-your-own-content-with-qzzr?utm_source=made-with-qzzr&utm_medium=embed ",
                              rel: "noopener noreferrer nofollow",
                              target: "_blank",
                              class: "riddle-cta riddle-cta--qzzr",
                              "aria-label": e.$t("v2.footer.aria.madeWithQzzr"),
                            },
                            [
                              ...(a[1] ||
                                (a[1] = [
                                  v(
                                    "span",
                                    { class: "riddle-cta-brand" },
                                    [
                                      V(" Made with "),
                                      v(
                                        "span",
                                        { class: "riddle-cta-brand-logo" },
                                        [
                                          v(
                                            "svg",
                                            {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              width: "49",
                                              height: "21",
                                              viewBox: "0 0 49 21",
                                              fill: "none",
                                              role: "img",
                                              "aria-label": "Qzzr",
                                            },
                                            [
                                              v("path", {
                                                d: "M7.6651 16.7162C8.71909 16.7163 9.58391 17.5541 9.58391 18.6081C9.58391 19.6621 8.71909 20.4999 7.6651 20.5C6.61104 20.5 5.77321 19.6622 5.77321 18.6081C5.77321 17.5541 6.63807 16.7162 7.6651 16.7162Z",
                                                fill: "white",
                                              }),
                                              v("path", {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M7.67566 0.5C11.6486 0.5 14.8647 3.71616 14.8647 7.68908C14.8647 11.6621 11.6486 14.8782 7.67566 14.8782C3.70273 14.8781 0.486572 11.662 0.486572 7.68908C0.486629 3.71619 3.70277 0.500057 7.67566 0.5ZM7.67566 3.51626C5.37308 3.51632 3.49768 5.3918 3.49755 7.69436C3.49755 9.99703 5.373 11.8729 7.67566 11.873C9.97836 11.873 11.8543 9.99706 11.8543 7.69436C11.8542 5.39177 9.97828 3.51626 7.67566 3.51626Z",
                                                fill: "white",
                                              }),
                                              v("path", {
                                                d: "M26.3027 2.77038L19.681 12.1485H26.5729V14.6079H16.1406V12.6083L22.7892 3.22962H16.3027V0.743349H26.3027V2.77038Z",
                                                fill: "white",
                                              }),
                                              v("path", {
                                                d: "M39.0434 2.77038L32.4218 12.1485H39.3136V14.6079H28.8813V12.6083L35.5299 3.22962H29.0434V0.743349H39.0434V2.77038Z",
                                                fill: "white",
                                              }),
                                              v("path", {
                                                d: "M48.5134 3.52682C46.1351 3.5269 44.6488 5.04081 44.6488 7.06778V14.6079H41.6215V0.743349H44.5676V2.68908C45.0811 1.60804 46.2973 0.581353 48.5134 0.581292V3.52682Z",
                                                fill: "white",
                                              }),
                                            ],
                                          ),
                                        ],
                                      ),
                                    ],
                                    -1,
                                  ),
                                  v(
                                    "span",
                                    { class: "riddle-cta-button" },
                                    " Create Your Own Now ",
                                    -1,
                                  ),
                                ])),
                            ],
                            8,
                            _t,
                          ))
                        : C("", !0),
                    ]))
                  : C("", !0),
              ]))
            : C("", !0);
        };
      },
    }),
    [["__scopeId", "data-v-58f88c6a"]],
  ),
  Ct = ["data-theme"],
  Lt = e({
    __name: "App",
    setup(e) {
      const t = a(0),
        o = () => {
          t.value++;
        };
      (W(o),
        l(() => {
          q(o);
        }));
      const n = H(),
        { isPagerVisible: i } = D(),
        r = M(),
        s = I(),
        d = w(() => s.isInited),
        c = w(() => s.riddle.type),
        u = w(() => "SingleBlockLayout"),
        {
          isFooterDisabled: v,
          isProgressActive: m,
          hasBorderRadiusBottom: b,
          isBackNavigationEnabled: y,
        } = N(),
        {
          hasBlockTimer: E,
          hasRiddleTimer: R,
          showPausedRiddleTimer: T,
          isTimerAllowed: S,
          showPausedBlockTimer: A,
        } = j(),
        { isRiddleClosedOverlayVisible: O } = z(),
        P = w(
          () =>
            !O.value &&
            "Standard" === s.layoutId &&
            (i.value || m.value || R.value || E.value || T.value || A.value),
        ),
        V = w(
          () =>
            !!S.value &&
            (J.value.shape === U.circleTimer ||
              K.value.shape === U.circleTimer),
        ),
        J = w(() => n.timerRiddleSettings),
        K = w(() => n.timerBlockSettings),
        $ = w(() => {
          const e = F(r.currentBlock);
          return {
            "no-footer": v.value,
            "has-footer": !v.value,
            "has-pager": i.value,
            "has-progress": m.value,
            ["block-type-" + r.currentBlock.type]: !0,
            ["block-type-group-" + r.currentBlock.typeGroup]: !0,
            ["page-index-" + r.currentIndex]: !0,
            ["block-id-" + r.currentBlock.id]: !0,
            "has-media": e.isMediaVisible ?? !1,
            "has-topbar": P.value,
            "has-circle-timer": V.value,
            "has-border-radius-bottom": b.value,
            "is-right-to-left": !Z(),
            "is-left-to-right": Z(),
            "has-back-button": y.value,
          };
        });
      ((document.title = s.riddle.title),
        document.documentElement.setAttribute("lang", s.baseLanguage));
      const Q = (e) => e.toLowerCase().split("-")[0];
      (navigator.languages ?? [navigator.language]).some(
        (e) => Q(e) === Q(s.baseLanguage),
      ) &&
        (document.documentElement.setAttribute("translate", "no"),
        document.documentElement.classList.add("notranslate"));
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
      return (
        "true" ===
          new URLSearchParams(window.location.search).get("staticHeight") ||
          window.self === window.top ||
          document.documentElement.style.setProperty("overflow", "hidden"),
        (e, a) => (
          g(),
          p(
            f,
            null,
            [
              X.value
                ? (g(),
                  _(
                    B("AdBlock"),
                    { key: 0, config: X.value, section: "top" },
                    null,
                    8,
                    ["config"],
                  ))
                : C("", !0),
              d.value
                ? (g(),
                  p(
                    "div",
                    {
                      class: L(["riddle", $.value]),
                      "data-theme": h(s).layoutId,
                      key: t.value,
                    },
                    [
                      (g(),
                      _(
                        B(c.value),
                        { class: "riddle-type-component" },
                        { default: k(() => [(g(), _(B(u.value)))]), _: 1 },
                      )),
                      x(kt),
                      x(G),
                      x(ht),
                    ],
                    10,
                    Ct,
                  ))
                : C("", !0),
              Y.value
                ? (g(),
                  _(
                    B("AdBlock"),
                    { key: 2, config: Y.value, section: "bottom" },
                    null,
                    8,
                    ["config"],
                  ))
                : C("", !0),
            ],
            64,
          )
        )
      );
    },
  }),
  Bt = b(
    e({
      __name: "SingleBlockLayout",
      setup(e) {
        const t = a(),
          o = M(),
          { currentBlock: n } = u(o);
        Y("currentBlock", n);
        const i = K();
        let r = !1;
        const l = w(() => o.currentNavId),
          s = w(() =>
            o.currentBlock.typeGroup === A.Form
              ? o.currentBlock.typeGroup + J[o.currentBlock.type]
              : o.currentBlock.typeGroup +
                i[`Riddle${o.currentBlock.typeGroup}BlockType`][
                  o.currentBlock.type
                ],
          ),
          d = I(),
          c = w(() => (d.isFirstBlockShown ? "block-transition" : "")),
          f =
            "true" ===
            new URLSearchParams(window.location.search).get("staticHeight"),
          m = (e) => {
            t.value &&
              d.isFirstBlockShown &&
              (t.value.style.height =
                t.value.getBoundingClientRect().height + "px");
            const a = e;
            a.style.height = a.getBoundingClientRect().height + "px";
          },
          b = (e) => {
            const a = e;
            if (
              (o.isNavigatingBack && a.classList.add("is-navigating-back"),
              d.isFirstBlockShown && 0 === o.history.length && t.value)
            ) {
              const e =
                t.value.parentElement.offsetHeight -
                t.value.offsetTop -
                t.value.offsetHeight;
              ((a.style.marginTop = t.value.offsetTop + "px"),
                (a.style.marginBottom = e + "px"),
                (a.style.marginTop = ""),
                (a.style.marginBottom = ""));
            }
          };
        let y,
          C = 0;
        const E = (e) => {
            const t = e;
            if (f && d.isFirstBlockShown && "Epic" === d.layoutId) {
              t.style.height = "auto";
              const e = t.getBoundingClientRect().height,
                a = t.parentElement.getBoundingClientRect().height;
              a > e && (t.style.height = a + "px");
            }
            (e.parentElement &&
              d.isFirstBlockShown &&
              (y = setInterval(() => {
                let t = e.getBoundingClientRect().height;
                t !== C && ((C = t), (e.parentElement.style.height = t + "px"));
              }, 15)),
              (d.isFirstBlockShown = !0));
          },
          R = (e) => {
            (clearInterval(y), (C = 0));
            const t = e;
            if (
              ((t.style.marginTop = ""),
              (t.style.marginBottom = ""),
              (t.style.height = ""),
              e.parentElement && (e.parentElement.style.height = ""),
              o.currentIndex + 1 <= o.logicBlockIdListLinear.length - 1)
            ) {
              const e = o.blockListLinear[o.currentIndex + 1];
              Q(e);
            } else {
              if (d.riddle.results) for (const e of d.riddle.results) Q(e);
              (d.riddle.resultTemplate && Q(d.riddle.resultTemplate),
                X("ShareButtons"));
            }
            if (
              (t.classList.contains("is-navigating-back") &&
                (t.classList.remove("is-navigating-back"),
                (o.isNavigatingBack = !1)),
              (o.isNavigating = !1),
              r)
            ) {
              (e.querySelector("[data-block-focus-target]") ?? e).focus({
                preventScroll: !0,
              });
            }
            r = !0;
          },
          T = (e) => {
            (clearInterval(y), (C = 0), t.value && (t.value.style.height = ""));
            const a = e;
            (a.classList.contains("is-navigating-back") &&
              (a.classList.remove("is-navigating-back"),
              (o.isNavigatingBack = !1)),
              (o.isNavigating = !1));
          },
          { layoutClasses: S } = j();
        return (e, a) => (
          g(),
          p(
            "div",
            { class: L(["single-block-layout layout", h(S)]) },
            [
              v(
                "div",
                {
                  ref_key: "wrapper",
                  ref: t,
                  class: "single-block-layout-inner",
                },
                [
                  x(
                    $,
                    {
                      name: c.value,
                      onBeforeLeave: m,
                      onBeforeEnter: b,
                      onEnter: E,
                      onAfterEnter: R,
                      onEnterCancelled: T,
                    },
                    {
                      default: k(() => [
                        (g(),
                        _(
                          B(s.value),
                          {
                            key: l.value,
                            "data-block-id": h(n).id,
                            "data-block-type": h(n).type,
                            "data-block-type-group": h(n).typeGroup,
                          },
                          null,
                          8,
                          [
                            "data-block-id",
                            "data-block-type",
                            "data-block-type-group",
                          ],
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["name"],
                  ),
                ],
                512,
              ),
            ],
            2,
          )
        );
      },
    }),
    [["__scopeId", "data-v-d663912e"]],
  ),
  Et = e({
    name: "UnrolledBlockLayoutBlock",
    props: { block: { type: Object, required: !0 } },
    setup(e) {
      const t = w(() => e.block);
      Y("currentBlock", t);
      return { blockComponent: w(() => e.block.typeGroup + e.block.type) };
    },
  });
const Rt = e({
    name: "UnrolledBlockLayout",
    components: {
      UnrolledBlockLayoutBlock: b(Et, [
        [
          "render",
          function (e, t, a, o, n, i) {
            return (g(), _(B(e.blockComponent)));
          },
        ],
      ]),
    },
    setup() {
      const e = I();
      return { blocks: w(() => e.riddle.blocks) };
    },
  }),
  Tt = { class: "unrolled" };
const It = b(Rt, [
  [
    "render",
    function (e, t, a, o, n, i) {
      const r = O("UnrolledBlockLayoutBlock");
      return (
        g(),
        p("div", Tt, [
          (g(!0),
          p(
            f,
            null,
            ee(
              e.blocks,
              (e) => (g(), _(r, { key: e.id, block: e }, null, 8, ["block"])),
            ),
            128,
          )),
        ])
      );
    },
  ],
]);
const St = b(
    e({
      name: "ResultBlockItem",
      props: { block: { type: Object, required: !0 } },
      setup(e) {
        const t = w(() => e.block);
        Y("currentBlock", t);
        const a = K();
        return {
          blockComponent: w(
            () =>
              t.value.typeGroup +
              a[`Riddle${t.value.typeGroup}BlockType`][t.value.type],
          ),
        };
      },
    }),
    [
      [
        "render",
        function (e, t, a, o, n, i) {
          return (g(), _(B(e.blockComponent)));
        },
      ],
    ],
  ),
  Mt = {
    beforeMount(e, { value: t }, { transition: a }) {
      ((e.__originalVisibility =
        "hidden" === e.style.visibility ? "" : e.style.visibility),
        a && t ? a.beforeEnter(e) : At(e, t));
    },
    mounted(e, { value: t }, { transition: a }) {
      a && t && a.enter(e);
    },
    updated(e, { value: t, oldValue: a }, { transition: o }) {
      !t != !a &&
        (o
          ? t
            ? (o.beforeEnter(e), At(e, !0), o.enter(e))
            : o.leave(e, () => {
                At(e, !1);
              })
          : At(e, t));
    },
    beforeUnmount(e, { value: t }) {
      At(e, t);
    },
  };
function At(e, t) {
  e.style.visibility = t ? e.__originalVisibility : "hidden";
}
const Ot =
  "true" === new URLSearchParams(window.location.search).get("lazyImages");
function Pt(e) {
  ((e.__LazyImageLoaded = !0), e.classList.add("fadeStart"));
  var t = new Image();
  (t.addEventListener("load", function () {
    ("img" == e.tagName.toLowerCase()
      ? e.setAttribute("src", e.__LazyUrl)
      : e.style.setProperty(
          "background-image",
          e.__LazyUrl ? "url(" + e.__LazyUrl + ")" : "",
        ),
      e.classList.add("fadeIn"));
  }),
    (t.src = e.__LazyUrl));
}
const xt = {
  beforeMount(e, { value: t }) {
    (e.classList.remove("fadeIn"),
      (e.__LazyUrl = t),
      Ot
        ? ((e.__LazyListener = (function (e) {
            return function (t) {
              if (
                "object" == typeof t.data &&
                !e.__LazyImageLoaded &&
                void 0 !== t.data.iframeOffsetTop &&
                void 0 !== t.data.viewtop &&
                void 0 !== t.data.viewbottom
              ) {
                var a = e.getBoundingClientRect().top + t.data.iframeOffsetTop,
                  o = a + e.getBoundingClientRect().height,
                  n = t.data.viewtop <= a && a <= t.data.viewbottom,
                  i = t.data.viewtop <= o && o <= t.data.viewbottom;
                (n || i) && Pt(e);
              }
            };
          })(e)),
          window.addEventListener("message", e.__LazyListener, !1))
        : Pt(e));
  },
  updated(e, { value: t, oldValue: a }) {
    t !== a &&
      ((e.__LazyUrl = t),
      e.__LazyImageLoaded &&
        ((e.__LazyImageLoaded = !1), e.classList.remove("fadeIn"), Pt(e)));
  },
  beforeUnmount(e) {
    e.__LazyListener &&
      window.removeEventListener("message", e.__LazyListener, !1);
  },
};
function Vt(e, t) {
  return ((t = t ?? 0), Math.floor(Math.random() * (e - t + 1) + t));
}
const Ht = "__RID_AUTOFOCUS__",
  Dt = /^d\d+$/i;
function Nt(e) {
  if (
    (function (e) {
      return !!(
        ["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(e.tagName) ||
        e.hasAttribute("href") ||
        (e.hasAttribute("tabindex") && "-1" !== e.getAttribute("tabindex"))
      );
    })(e)
  )
    e.focus();
  else {
    const t = e.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    t?.focus();
  }
}
const jt = {
  beforeMount(e, t) {
    let a = 200;
    if (t.value && "number" == typeof t.value) a = t.value;
    else if (t.value && "boolean" == typeof t.value) a = t.value;
    else if (t.modifiers)
      for (const o in t.modifiers) Dt.test(o) && (a = parseInt(o.slice(1), 0));
    e[Ht] = { delay: a };
  },
  mounted: (e) => {
    const t = e[Ht];
    "number" == typeof t.delay
      ? (t.timeout = setTimeout(() => {
          Nt(e);
        }, t.delay))
      : !0 === t.delay && Nt(e);
  },
  updated(e, t) {
    !0 === t.value && !1 === t.oldValue && Nt(e);
  },
  beforeUnmount(e) {
    if (e[Ht]) {
      const t = e[Ht];
      clearTimeout(t.timeout);
    }
    delete e[Ht];
  },
};
try {
  window.BASE_URL = {}.BASE_URL;
} catch (Gt) {
  window.BASE_URL = "/embed";
}
(void 0 === window.BASE_URL && (window.BASE_URL = "/embed"),
  window.addEventListener("error", (e) => {}),
  window.addEventListener("unhandledrejection", (e) => {
    te(e.reason, "unhandledrejection", "promise");
  }));
const zt = ae(Lt).use(dt).use(oe).use(ne).use(ie());
((zt.config.errorHandler = (e, t, a) => {
  te(e, a, "vue");
}),
  re(zt));
const Ut = I();
function Ft(e = !1) {
  "true" === new URLSearchParams(window.location.search).get("staticHeight") &&
    document.body.classList.add("static-height");
  ("true" === new URLSearchParams(window.location.search).get("fullscreen") &&
    (document.documentElement.classList.add("fullscreen-embed"),
    (Ut.isFullscreen = !0)),
    Ut.InitRiddleStore(),
    de(zt),
    e ||
      (ce().init(),
      window.addEventListener(
        "message",
        (e) => {
          if ("object" == typeof e.data) {
            if (
              (e.data.dataLayerItem &&
                ce().addDataLayer([e.data.dataLayerItem]),
              e.data.dataLayer && ce().addDataLayer(e.data.dataLayer),
              e.data.riddleParentLocation &&
                (ce().riddleParentLocation = e.data.riddleParentLocation),
              "requestRiddleStatus" === e.data.type && we(),
              e.data.isRiddleApi &&
                "updateEmbedConfig" === e.data.type &&
                Ut.UpdateEmbedConfig(e.data.embedConfig),
              "riddleStorageRead" === e.data.type)
            ) {
              const t = e.data.riddleStorage;
              t &&
                t.forEach((e) => {
                  ye(e.key, e.value);
                });
            }
            "RiddleStorageInited" !== e.data.type ||
              Ut.isRiddleStorageInited ||
              (Ut.isRiddleStorageInited = _e());
          }
        },
        !1,
      ),
      M().initNav()),
    H().initTimerStore(),
    ue().init(),
    pe().loadFonts(),
    c().init(),
    (Ut.isInited = !0));
}
function Zt(e, t) {
  return e.options.areOtherResultsEnabled
    ? (e.content.otherResults.find((e) => e.minScore <= t && e.maxScore >= t)
        ?.id ?? e.content.winningResult.id)
    : e.content.winningResult.id;
}
(le(),
  Ut.isPreview
    ? (window.addEventListener("message", (e) => {
        if (
          (e.origin.endsWith("riddle.com") ||
            e.origin.endsWith("quiz-maker.co.uk") ||
            e.origin.endsWith("qzzr.com")) &&
          e.data.isRiddlePreview
        ) {
          if (Ut.isInited) {
            let t = window.meta.preset.layoutId !== e.data.meta.preset.layoutId;
            const a = window.meta.preset.settings,
              o = e.data.meta.preset.settings;
            ((t =
              t || Ut.riddle.blocks.some((e) => e.type === ge.WheelSpinner)),
              (t =
                t ||
                (a.riddleAutoClose &&
                  a.riddleAutoClose.isEnabled &&
                  a.riddleAutoClose.riddleClosedBlock &&
                  a.riddleAutoClose.riddleClosedBlock.isEnabled !==
                    o.riddleAutoClose.riddleClosedBlock.isEnabled) ||
                (a.riddleAutoClose &&
                  a.riddleAutoClose.isEnabled &&
                  a.riddleAutoClose.riddleClosedBlock &&
                  a.riddleAutoClose.riddleClosedBlock.blockId !==
                    o.riddleAutoClose.riddleClosedBlock.blockId)),
              (t = t || a.isRiddleOpen !== o.isRiddleOpen),
              (t =
                t ||
                a.riddleAutoClose?.isEnabled !== o.riddleAutoClose?.isEnabled ||
                a.riddleAutoClose?.date !== o.riddleAutoClose?.date),
              (t =
                t ||
                JSON.stringify(a.timerBlock) !== JSON.stringify(o.timerBlock) ||
                JSON.stringify(a.timerRiddle) !==
                  JSON.stringify(o.timerRiddle) ||
                JSON.stringify(a.clockRiddle) !==
                  JSON.stringify(o.clockRiddle)),
              (t = t || a.isChooseButtonVisible !== o.isChooseButtonVisible),
              (t = t || a.language !== o.language),
              (t =
                t ||
                JSON.stringify(a.rememberUser) !==
                  JSON.stringify(o.rememberUser)),
              (e.data.previewData.previewMode !=
                window.previewData?.previewMode ||
                t) &&
                window.location.reload());
          }
          if (
            ((window.data = e.data.data),
            (window.meta = e.data.meta),
            (window.previewData = e.data.previewData),
            window.previewData?.previewMode === fe.Blocks &&
              e.data.logic &&
              ((window.meta.logic.isLinear = !0),
              (window.meta.logic.initialBlockIds = window.data.blocks.map(
                (e) => e.id,
              )),
              (window.meta.logic.initialLogicBlockIds = window.data.blocks.map(
                (t) =>
                  e.data.logic.logicBlocks.find((e) => e.blockId === t.id)
                    ?.id ?? t.id,
              ))),
            Ft(!!Ut.isInited),
            H().reset(),
            window.previewData?.previewMode === fe.Blocks &&
              null !== window.previewData.currentBlockIndex)
          ) {
            const e = M(),
              t = ce();
            if (Ut.riddle.type === ve.Quiz) {
              const e = 5,
                a = 10;
              ((t.totalScore = Math.floor(Math.random() * (a - e) + e)),
                (t.score = Math.floor(Math.random() * (t.totalScore - 1) + 1)));
            }
            if (
              Ut.riddle.type === ve.Personality &&
              window.previewData.currentBlockIndex >= Ut.riddle.blocks.length
            ) {
              const a = Ut.riddle;
              let o = a.personalities[0],
                n = null;
              window.previewData.currentBlockIndex >= a.blocks.length &&
                (window.previewData.currentBlockIndex <=
                a.blocks.length + a.personalities.length - 1
                  ? (o =
                      a.personalities[
                        window.previewData.currentBlockIndex - a.blocks.length
                      ])
                  : (n =
                      a.attributes[
                        window.previewData.currentBlockIndex -
                          a.blocks.length -
                          a.personalities.length
                      ]));
              const i = t.votingResults.find((e) => -1 === e.blockId);
              i && me.remove(t.votingResults, i);
              const r = 100,
                l = {
                  blockId: -1,
                  personalityResults: [],
                  attributeResults: [],
                };
              t.votingResults.push(l);
              let s = Vt(r, r - 10);
              l.personalityResults?.push({
                id: o.id,
                score: s,
                percentage: Math.round((s / r) * 100),
                resultId: o.content.winningResult.id,
              });
              const d = a.resultTemplate.content.blocks.find(
                (e) => e.type === he.OtherPersonalities,
              );
              if (d) {
                const e = a.personalities.filter((e) => e.id !== o.id);
                for (let t = 0; t < d.value.displaySettings.count; t++)
                  if (e[t]) {
                    s = Math.max(1, s - 1);
                    const a = Vt(s, 1),
                      o = Math.round((a / r) * 100);
                    l.personalityResults?.push({
                      id: e[t].id,
                      score: a,
                      percentage: o,
                      resultId: Zt(e[t], o),
                    });
                  }
              }
              const c = a.resultTemplate.content.blocks.find(
                (e) => e.type === he.Attributes,
              );
              if (
                null !== n ||
                (c?.value.displaySettings.count ?? 0) > 0 ||
                c?.value.displaySettings.areAllAttributesVisible
              ) {
                s = Vt(r, r - 10);
                let e = a.attributes,
                  t = c?.value.displaySettings.areAllAttributesVisible
                    ? e.length
                    : (c?.value.displaySettings.count ?? 0);
                null !== n &&
                  ((e = a.attributes.filter((e) => e.id !== n.id)),
                  l.attributeResults?.push({
                    id: n.id,
                    score: s,
                    percentage: Math.round((s / r) * 100),
                    resultId: n.content.winningResult.id,
                  }),
                  t--);
                for (let a = 0; a < t; a++)
                  if (e[a]) {
                    s = Math.max(1, s - 1);
                    const t = Vt(s, 1);
                    s = t;
                    const o = Math.round((t / r) * 100);
                    l.attributeResults?.push({
                      id: e[a].id,
                      score: t,
                      percentage: o,
                      resultId: Zt(e[a], o),
                    });
                  }
              }
              const u = -2;
              (e.blockListLinear.push({
                typeGroup: A.Result,
                type: be.ResultBuilder,
                id: u,
              }),
                e.changeBlockById(u));
            } else {
              const t = window.previewData.currentBlockIndex;
              (t >= e.blockListLinear.length - 1 &&
                Ut.riddle.results &&
                e.blockListLinear.push(...Ut.riddle.results),
                e.changeBlockByIndex(t, !1));
            }
          }
        }
      }),
      "1" === new URLSearchParams(window.location.search).get("standalone") &&
        Ft())
    : Ft(),
  zt.component("SingleBlockLayout", Bt),
  zt.component("UnrolledBlockLayout", It),
  zt.component("ResultBlockItem", St),
  zt.component("Media", Le),
  zt.component("MediaFlip", Be),
  zt.component("BackgroundMedia", Ee),
  zt.component("PlainTextRenderer", se),
  zt.directive("visible", Mt),
  zt.directive("lazy", xt),
  zt.directive("autofocus", jt),
  zt.mount("#app"));
