import {
  d as e,
  g as a,
  ab as i,
  a as d,
  c as o,
  h as m,
  o as l,
  b as s,
  j as t,
  _ as r,
} from "./RteBlock-fGDN0Vv6.js";
import { M as p } from "./useMediaOrientation-DtxNNf98.js";
const n = { key: 0, class: "bg-media" },
  u = r(
    e({
      __name: "BackgroundMedia",
      props: {
        media: {},
        isOnlyImgAllowed: { type: Boolean, default: !1 },
        ariaHidden: { type: Boolean },
      },
      setup(e) {
        const r = e,
          u = a(() => r.media.type === i.Giphy || r.media.type === i.UploadGif),
          c = a(() => r.media),
          y = a(() =>
            [
              i.GoogleImage,
              i.UploadImage,
              i.StockIcon,
              i.Stock,
              i.Pexels,
            ].includes(r.media.type)
              ? r.media
              : r.media.type === i.UploadVideo
                ? r.media.source.previewImage ||
                  r.media.source.defaultPreviewImage
                : r.media.type === i.UploadAudio
                  ? r.media.source.previewImage || void 0
                  : r.media.type === i.Youtube || r.media.type === i.Vimeo
                    ? r.media.source.previewImage
                    : !r.isOnlyImgAllowed ||
                        (r.media.type !== i.Giphy &&
                          r.media.type !== i.UploadGif)
                      ? void 0
                      : r.media.source.previewImage ||
                        r.media.source.defaultPreviewImage,
          );
        return (a, i) => {
          const r = d("Image"),
            g = d("GifPlayer");
          return e.media
            ? (l(),
              o("div", n, [
                y.value
                  ? (l(),
                    s(
                      r,
                      {
                        key: 0,
                        media: y.value,
                        mediaSection: t(p).Original,
                        "aria-hidden": e.ariaHidden,
                      },
                      null,
                      8,
                      ["media", "mediaSection", "aria-hidden"],
                    ))
                  : m("", !0),
                u.value && !e.isOnlyImgAllowed
                  ? (l(), s(g, { key: 1, media: c.value }, null, 8, ["media"]))
                  : m("", !0),
              ]))
            : m("", !0);
        };
      },
    }),
    [["__scopeId", "data-v-5930dff4"]],
  );
export { u as B };
