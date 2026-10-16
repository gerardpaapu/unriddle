import * as htmlparser2 from "htmlparser2";
import type { Document } from "domhandler";
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

const FOOTER_BRANDING = {
  link: "https://unstuff.absent.cloud",
  logo: {
    id: 698934,
    type: "UploadImage",
    source: {
      originalUrl: "https://unriddle.absent.cloud/assets/unriddle.logo.png",
      width: 70,
      height: 70,
      url: "https://unriddle.absent.cloud/assets/unriddle.logo.png",
      shareUrl: "https://unriddle.absent.cloud/assets/unriddle.logo.png",
    },
    settings: {
      altTag: "",
      attributionText: "",
      attributionUrl: "",
      backgroundColor: "rgba(255,255,255,0)",
      overlayColor: "rgba(255,255,255,0)",
    },
  },
  logoPosition: "Right",
  maxWidth: 70,
  mediaOrientation: "Original",
  type: "CustomLogo",
};

const disableAds = (config: any) => {
  config.preset.settings.ads = NO_ADS_CONFIG;
};

const setCustomFooter = (config: any) => {
  config.preset.settings.footerBranding = FOOTER_BRANDING;
};

function rewriteJsonData(dom: Document, id: string, mutate: (_: any) => void) {
  const metaScript = htmlparser2.DomUtils.getElementById(id, dom);
  if (metaScript) {
    const json = htmlparser2.DomUtils.textContent(metaScript);
    const obj = JSON.parse(json);
    mutate(obj);

    const frag = htmlparser2.parseDocument(
      `<script type="application/json" id="${id}">${JSON.stringify(obj)}</script>`,
    );
    const script = frag.childNodes[0];

    htmlparser2.DomUtils.replaceElement(metaScript, script);
  }
}

export const rewriteEmbedDocument = (rawHtml: string) => {
  let dom = htmlparser2.parseDocument(rawHtml);
  rewriteJsonData(dom, "variable-meta", (vars) => {
    disableAds(vars);
    setCustomFooter(vars);
  });

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
