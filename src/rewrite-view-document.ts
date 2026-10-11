import * as htmlparser2 from "htmlparser2";
import type { IncomingMessage } from "node:http";

const VIEW_ROUTE = /^\/view\/(.+)$/;

const rewriteDocument = (rawHtml: string) => {
  let dom = htmlparser2.parseDocument(rawHtml);
  const [iframeElement] = htmlparser2.DomUtils.getElementsByTagName(
    "iframe",
    dom,
  );
  if (iframeElement) {
    const replacementHtml = `<iframe 
        src="${iframeElement.attribs["src"]}"
        title="${iframeElement.attribs["title"]}"
        allow="${iframeElement.attribs["allow"]}"
        referrerpolicy="no-referrer"
      ></iframe>`;
    const replacement = htmlparser2.parseDocument(replacementHtml);
    htmlparser2.DomUtils.replaceElement(
      iframeElement,
      replacement.childNodes[0],
    );
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
    VIEW_ROUTE.exec(req.path) != undefined
  ) {
    let rawHtml = responseBuffer.toString("utf-8");
    return rewriteDocument(rawHtml);
  }

  return false;
};
