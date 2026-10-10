import {
  d as e,
  L as a,
  A as t,
  bj as s,
  g as i,
  ab as n,
  bN as l,
  b as o,
  c as d,
  o as u,
  j as r,
  a3 as c,
  e as p,
  s as v,
  I as m,
  a as f,
  n as y,
  m as b,
  t as _,
  _ as h,
  B as T,
  C as g,
  F as B,
  w as I,
} from "./RteBlock-fGDN0Vv6.js";
import { M } from "./useMediaOrientation-DtxNNf98.js";
const S = { class: "content" },
  j = ["innerHTML"],
  C = { class: "privacy-button" },
  R = h(
    e({
      __name: "Media",
      props: {
        media: {},
        href: { default: "" },
        mediaSection: { default: M.Cover },
        labelId: {},
        isTransitionFinished: { type: Boolean, default: !0 },
        isAutoplayDisabled: { type: Boolean, default: !1 },
      },
      setup(e, { expose: h }) {
        const T = e,
          { media: g } = a(T),
          B = t(),
          I = s(),
          { setConsent: M, getBannerText: R, getButtonText: k } = I,
          D = i(
            () =>
              !(
                !g.value ||
                (g.value.type !== n.Youtube &&
                  g.value.type !== n.Vimeo &&
                  g.value.type !== n.Twitter)
              ) &&
              I.isConsentRequired &&
              !I.hasConsent(g.value.type),
          ),
          F = i(() => (g.value ? g.value.type : n.UploadImage)),
          x = i(() => l[F.value]);
        return (
          h({
            play: () => {
              B.value && "function" == typeof B.value.play && B.value.play();
            },
            pause: () => {
              B.value && "function" == typeof B.value.pause && B.value.pause();
            },
          }),
          (a, t) => {
            const s = f("BaseButton");
            return D.value
              ? (u(),
                d(
                  "div",
                  {
                    key: 1,
                    class: y([
                      "privacy-banner",
                      { [F.value]: !0, [e.mediaSection]: !0 },
                    ]),
                  },
                  [
                    p("div", S, [
                      p("div", { innerHTML: r(R)(F.value) }, null, 8, j),
                      p("div", C, [
                        v(
                          s,
                          { onClick: t[0] || (t[0] = (e) => r(M)(F.value)) },
                          { default: m(() => [b(_(r(k)), 1)]), _: 1 },
                        ),
                      ]),
                    ]),
                  ],
                  2,
                ))
              : (u(),
                o(
                  c(x.value),
                  {
                    key: 0,
                    ref_key: "mediaRef",
                    ref: B,
                    media: r(g),
                    href: e.href,
                    mediaSection: e.mediaSection,
                    labelId: e.labelId,
                    isTransitionFinished: e.isTransitionFinished,
                    isAutoplayDisabled: e.isAutoplayDisabled,
                  },
                  null,
                  8,
                  [
                    "media",
                    "href",
                    "mediaSection",
                    "labelId",
                    "isTransitionFinished",
                    "isAutoplayDisabled",
                  ],
                ));
          }
        );
      },
    }),
    [["__scopeId", "data-v-cc47c381"]],
  ),
  k = { class: "toast-header" },
  D = { class: "me-auto" },
  F = { class: "toast-body" },
  x = { class: "toast-action" },
  A = e({
    __name: "RefreshForNewRiddle",
    setup(e) {
      const a = T(),
        { errorHandlingText: t } = g(a);
      function s() {
        document.location.href = "/a/" + window.parentUuid;
      }
      return (e, a) => (
        u(),
        d(
          B,
          null,
          [
            p("div", k, [p("strong", D, _(r(t)("headline")), 1)]),
            p("div", F, [p("div", null, _(r(t)("body")), 1)]),
            p("div", x, [
              p(
                "button",
                { class: "btn", onClick: s },
                _(e.$t("v2.errorHandling.button.RELOAD_RIDDLE")),
                1,
              ),
            ]),
          ],
          64,
        )
      );
    },
  }),
  O = Object.freeze(
    Object.defineProperty({ __proto__: null, default: A }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  w = e({
    __name: "Media",
    props: {
      block: {},
      index: {},
      id: {},
      isInsideFormBuilder: { type: Boolean },
    },
    setup(e) {
      const { formContent: a } = I();
      return (e, t) => (
        u(),
        d("div", null, [v(R, { media: r(a).media }, null, 8, ["media"])])
      );
    },
  }),
  L = Object.freeze(
    Object.defineProperty({ __proto__: null, default: w }, Symbol.toStringTag, {
      value: "Module",
    }),
  );
export { R as M, O as R, L as a };
