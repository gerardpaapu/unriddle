import * as htmlparser2 from "htmlparser2";
import type { IncomingMessage } from "node:http";

const EMBED_ROUTE = /^\/embed\/a\/(.+)$/;

const NO_ADS_CONFIG = {
  "/* Ads disabled by the ads disabler */": true,
  adBottom: {
    ad: {
      iframeAdConfig: null,
      teamAdConfig: { slotId: 1, variables: [] },
    },
    isEnabled: true,
  },
  adTop: {
    ad: { iframeAdConfig: null, teamAdConfig: null },
    isEnabled: false,
  },
  isEnabled: true,
};

const disableAds = (config: any) => {
  config.preset.settings.ads = NO_ADS_CONFIG;
};

export const rewriteEmbedDocument = (rawHtml: string) => {
  let dom = htmlparser2.parseDocument(rawHtml);
  const tag = htmlparser2.DomUtils.getElementById("variable-meta", dom);
  if (tag) {
    const json = htmlparser2.DomUtils.textContent(tag);
    const obj = JSON.parse(json);
    disableAds(obj);

    const frag = htmlparser2.parseDocument(
      `<script type="application/json" id="variable-meta">${JSON.stringify(obj)}</script>`,
    );
    const script = frag.childNodes[0];
    htmlparser2.DomUtils.replaceElement(tag, script);
  }
  return htmlparser2.DomUtils.getOuterHTML(dom);
};

export const rewriteRequest = (
  responseBuffer: Buffer<ArrayBufferLike>,
  proxyRes: IncomingMessage,
  req: { path: string },
) => {
  if (
    proxyRes.headers["content-type"]?.startsWith("text/html") &&
    EMBED_ROUTE.exec(req.path) != undefined
  ) {
    let rawHtml = responseBuffer.toString("utf-8");
    return rewriteEmbedDocument(rawHtml);
  }

  return false;
};
