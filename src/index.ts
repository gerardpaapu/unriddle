import express from "express";
import {
  createProxyMiddleware,
  responseInterceptor,
} from "http-proxy-middleware";

import { setDefaultAutoSelectFamilyAttemptTimeout } from "node:net";
import * as EmbedRewrite from "./rewrite-embed-document.ts";
import * as ViewRewrite from "./rewrite-view-document.ts";

// if we don't do this it can fail to make the request
// to riddle.com, due to some IPv6 nonsense
setDefaultAutoSelectFamilyAttemptTimeout(500); // 500ms fallback

export const app = express();

const proxy = createProxyMiddleware({
  target: "https://www.riddle.com",
  changeOrigin: true,

  selfHandleResponse: true, // res.end() will be called internally by responseInterceptor()

  on: {
    proxyReq: (request) => {
      request.setHeader("Referer", "https://www.riddle.com");
    },
    proxyRes: responseInterceptor(
      async (responseBuffer, proxyRes, req, res) => {
        res.removeHeader("content-security-policy"); // Remove the Content Security Policy header

        let response = EmbedRewrite.rewriteRequest(
          responseBuffer,
          proxyRes,
          req as unknown as express.Request,
        );

        if (response) {
          return response;
        }

        response = ViewRewrite.rewriteRequest(
          responseBuffer,
          proxyRes,
          req as unknown as { path: string },
        );
        if (response) {
          return response;
        }

        return responseBuffer;
      },
    ),
  },
});

app.use(proxy);
