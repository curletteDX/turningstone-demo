import "dotenv/config";
import fs from "node:fs/promises";
import express from "express";
import {
  EMPTY_COMPOSITION,
  IN_CONTEXT_EDITOR_CONFIG_CHECK_QUERY_STRING_PARAM,
} from "@uniformdev/canvas";

import { getComposition } from "./src/uniform/api.ts";

const PLAYGROUND_PATH = "/";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

const templateHtml = isProduction ? await fs.readFile("./dist/client/index.html", "utf-8") : "";

const app = express();

/**
 * @type {import('vite').ViteDevServer}
 */
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");
    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const isConfigCheck = req.query[IN_CONTEXT_EDITOR_CONFIG_CHECK_QUERY_STRING_PARAM] === "true";
    if (isConfigCheck) {
      res.json({
        hasPlayground: Boolean(PLAYGROUND_PATH),
      });
      return;
    }

    // Note: with app.use("*", ...), req.path is always "/" regardless of the
    // actual URL. Parse the true pathname from req.originalUrl instead.
    const requestPath = new URL(req.originalUrl, "http://localhost").pathname;
    let composition;

    // /api/preview is the Canvas in-context editor entry point. Always serve
    // EMPTY_COMPOSITION so the React shell loads cleanly regardless of whether
    // the browser sends a Referer header (it often doesn't on reload). Canvas
    // will push the real composition to the page via postMessage.
    if (requestPath === "/api/preview") {
      composition = EMPTY_COMPOSITION;
    } else {
      composition = await getComposition(requestPath);
    }

    const rendered = await render({ composition });

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
