import {
  d as a,
  _ as e,
  a as s,
  c as t,
  o as d,
  h as i,
  e as o,
  s as l,
  b as n,
  n as r,
  B as c,
  C as p,
  t as u,
  j as m,
  ah as y,
  F as b,
} from "./RteBlock-fGDN0Vv6.js";
const f = a({
    name: "MediaFlip",
    props: {
      primaryMedia: { type: Object, required: !0 },
      secondaryMedia: { type: Object, default: null },
      swapImage: { type: Boolean, default: !1 },
    },
  }),
  v = { key: 0, class: "media-front" },
  _ = { class: "media-back" };
const M = e(f, [
    [
      "render",
      function (a, e, c, p, u, m) {
        const y = s("Media");
        return (
          d(),
          t(
            "div",
            { class: r(["media-flip", { flipped: a.swapImage }]) },
            [
              a.swapImage
                ? i("", !0)
                : (d(),
                  t("div", v, [
                    l(y, { media: a.primaryMedia }, null, 8, ["media"]),
                  ])),
              o("div", _, [
                a.secondaryMedia
                  ? (d(),
                    n(y, { key: 0, media: a.secondaryMedia }, null, 8, [
                      "media",
                    ]))
                  : i("", !0),
              ]),
            ],
            2,
          )
        );
      },
    ],
    ["__scopeId", "data-v-15cf9b3f"],
  ]),
  g = { class: "toast-header" },
  R = { class: "me-auto" },
  j = { class: "toast-body" },
  k = { class: "toast-action" },
  I = a({
    __name: "RestartRiddle",
    setup(a) {
      const e = c(),
        { errorHandlingText: s } = p(e);
      return (a, e) => (
        d(),
        t(
          b,
          null,
          [
            o("div", g, [o("strong", R, u(m(s)("headline")), 1)]),
            o("div", j, [o("div", null, u(m(s)("body")), 1)]),
            o("div", k, [
              o(
                "button",
                {
                  class: "btn",
                  onClick: e[0] || (e[0] = (...a) => m(y) && m(y)(...a)),
                },
                u(a.$t("v2.errorHandling.button.RESTART_RIDDLE")),
                1,
              ),
            ]),
          ],
          64,
        )
      );
    },
  }),
  h = Object.freeze(
    Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, {
      value: "Module",
    }),
  );
export { M, h as R };
