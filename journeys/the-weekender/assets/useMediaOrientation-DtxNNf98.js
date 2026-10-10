import {
  d as e,
  B as t,
  C as a,
  c as o,
  o as n,
  e as i,
  h as s,
  t as r,
  j as l,
  ah as u,
  F as d,
  b as p,
  _ as c,
  N as g,
  u as b,
  L as O,
  g as m,
  cC as v,
  dI as _,
  a0 as y,
  bW as S,
  bH as f,
  ab as w,
} from "./RteBlock-fGDN0Vv6.js";
var k = ((e) => (
  (e.Answers = "answers"),
  (e.AnswerExplanation = "answerExplanation"),
  (e.Cover = "cover"),
  (e.Hotspot = "hotspot"),
  (e.Settings = "settings"),
  (e.FooterLogo = "footerLogo"),
  (e.Personality = "personality"),
  (e.PersonalityOther = "personalityOther"),
  (e.Attribute = "attribute"),
  (e.Original = "original"),
  e
))(k || {});
const h = ["data-test"],
  C = { class: "me-auto" },
  L = { class: "toast-body" },
  T = { key: 0, class: "toast-action" },
  j = e({
    __name: "BaseErrorToast",
    props: { showRestartButton: { type: Boolean }, dataTest: {} },
    setup(e) {
      const p = t(),
        { errorHandlingText: c } = a(p);
      return (t, a) => (
        n(),
        o(
          d,
          null,
          [
            i(
              "div",
              { class: "toast-header", "data-test": e.dataTest },
              [i("strong", C, r(l(c)("headline")), 1)],
              8,
              h,
            ),
            i("div", L, [i("div", null, r(l(c)("body")), 1)]),
            e.showRestartButton
              ? (n(),
                o("div", T, [
                  i(
                    "button",
                    {
                      class: "btn",
                      onClick: a[0] || (a[0] = (...e) => l(u) && l(u)(...e)),
                    },
                    r(t.$t("v2.errorHandling.button.RESTART_RIDDLE")),
                    1,
                  ),
                ]))
              : s("", !0),
          ],
          64,
        )
      );
    },
  }),
  M = Object.freeze(
    Object.defineProperty({ __proto__: null, default: j }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  P = e({
    __name: "MissingIdentifier",
    setup: (e) => (e, t) => (n(), p(j, { "show-restart-button": !0 })),
  }),
  A = Object.freeze(
    Object.defineProperty({ __proto__: null, default: P }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  B = e({
    __name: "MissingNickname",
    setup: (e) => (e, t) => (n(), p(j, { "show-restart-button": !0 })),
  }),
  z = Object.freeze(
    Object.defineProperty({ __proto__: null, default: B }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  x = e({
    __name: "NicknameAlreadyTaken",
    setup: (e) => (e, t) => (
      n(),
      p(j, { "data-test": "nickname-already-taken-error-toast-header" })
    ),
  }),
  R = Object.freeze(
    Object.defineProperty({ __proto__: null, default: x }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  E = e({
    __name: "NicknameContainsBadwords",
    setup: (e) => (e, t) => (n(), p(j, { "show-restart-button": !0 })),
  }),
  N = Object.freeze(
    Object.defineProperty({ __proto__: null, default: E }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  D = e({ __name: "RatelimitExceeded", setup: (e) => (e, t) => (n(), p(j)) }),
  F = Object.freeze(
    Object.defineProperty({ __proto__: null, default: D }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  H = e({ __name: "RiddleClosed", setup: (e) => (e, t) => (n(), p(j)) }),
  I = Object.freeze(
    Object.defineProperty({ __proto__: null, default: H }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  W = e({ __name: "SingleVote", setup: (e) => (e, t) => (n(), p(j)) }),
  q = Object.freeze(
    Object.defineProperty({ __proto__: null, default: W }, Symbol.toStringTag, {
      value: "Module",
    }),
  );
function V(e) {
  if (null == e || isNaN(e)) return "0";
  const t = Math.max(0, Math.floor(e));
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(t);
}
const G = c({}, [
    [
      "render",
      function (e, t) {
        return (n(), o("div"));
      },
    ],
  ]),
  U = Object.freeze(
    Object.defineProperty({ __proto__: null, default: G }, Symbol.toStringTag, {
      value: "Module",
    }),
  ),
  Q = (e) => {
    const t = e?.settings;
    return t?.altTag?.trim() ?? "";
  };
function Y(e) {
  const { currentBlock: t } = g(),
    a = b(),
    { media: o, mediaSection: n } = O(e);
  function i(e) {
    return e && e !== _.Settings
      ? e.toString().toLowerCase()
      : a.settings.mediaOrientation.toString().toLowerCase();
  }
  const s = m(() => {
      const e = a.riddle;
      let s = "wide";
      switch (n.value) {
        case k.Answers:
          let o = _.Settings;
          switch (t.value.typeGroup) {
            case y.Poll:
              void 0 !== t.value.options.pollAnswerOptions
                ? (o = t.value.options.pollAnswerOptions.mediaOrientation)
                : void 0 !== t.value.options.swiperAnswerOptions
                  ? (o = _.Square)
                  : void 0 !== t.value.options.thisOrThatOptions
                    ? (o = t.value.options.thisOrThatOptions.mediaOrientation)
                    : void 0 !== t.value.options.tierListOptions &&
                      (o = t.value.options.tierListOptions.mediaOrientation);
              break;
            case y.Quiz:
              o = t.value.options.quizAnswerOptions.mediaOrientation;
              break;
            case y.Minigame:
              t.value.type === S.WheelSpinner &&
                (o = t.value.options.wheelSpinnerOptions.mediaOrientation);
          }
          s = i(o);
          break;
        case k.FooterLogo:
          s = a.settings.footerBranding.mediaOrientation
            .toString()
            .toLowerCase();
          break;
        case k.Personality:
          const n = e.resultTemplate.content.blocks.find(
            (e) => e.type === f.WinningPersonality,
          );
          s = i(n.value?.displaySettings.mediaOrientation);
          break;
        case k.PersonalityOther:
          const r = e.resultTemplate.content.blocks.find(
            (e) => e.type === f.OtherPersonalities,
          );
          s = i(r.value?.displaySettings.mediaOrientation);
          break;
        case k.Attribute:
          const l = e.resultTemplate.content.blocks.find(
            (e) => e.type === f.Attributes,
          );
          s = i(l.value?.displaySettings.mediaOrientation);
          break;
        case k.Settings:
          s = a.settings.mediaOrientation.toString().toLowerCase();
          break;
        case k.AnswerExplanation:
          t.value.typeGroup !== y.Minigame ||
          (t.value.type !== S.Sudoku && t.value.type !== S.Crosswords)
            ? ((s = t.value.options.answerExplanationOptions.mediaOrientation
                .toString()
                .toLowerCase()),
              (s = i(
                t.value.options.answerExplanationOptions.mediaOrientation,
              )))
            : ((s = t.value.options.successMsgOptions.mediaOrientation
                .toString()
                .toLowerCase()),
              (s = i(t.value.options.successMsgOptions.mediaOrientation)));
          break;
        case k.Hotspot:
          s = i(t.value.options.hotspotMediaOrientation);
          break;
        case k.Original:
          s = _.Original.toString().toLowerCase();
          break;
        default:
          if (t.value.type === v.ResultBuilder) {
            s = _.Original.toString().toLowerCase();
            break;
          }
          const u = t.value.options.mediaOrientation;
          if (u === _.Settings) {
            s = a.settings.mediaOrientation.toString().toLowerCase();
            break;
          }
          if (void 0 === u) {
            s = _.Original.toString().toLowerCase();
            break;
          }
          s = u.toString().toLowerCase() ?? _.Original.toString().toLowerCase();
      }
      return (
        !o.value ||
          (o.value.type !== w.UploadVideo &&
            o.value.type !== w.Vimeo &&
            o.value.type !== w.Youtube &&
            o.value.type !== w.Bump &&
            o.value.type !== w.DrDk) ||
          ("original" === s && (s = "wide")),
        s
      );
    }),
    r = m(() => {
      switch (s.value) {
        case _.Original.toLowerCase():
          return null;
        case _.Square.toLowerCase():
          return "1:1";
        case _.Wide.toLowerCase():
          return "16:9";
        case _.Tall.toLowerCase():
          return "3:4";
        default:
          return null;
      }
    });
  return { orientationClass: s, ratio: r };
}
export {
  M as B,
  k as M,
  R as N,
  F as R,
  q as S,
  j as _,
  A as a,
  z as b,
  N as c,
  I as d,
  U as e,
  V as f,
  Q as g,
  Y as u,
};
