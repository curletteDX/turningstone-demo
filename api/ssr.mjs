import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  EMPTY_COMPOSITION,
  IN_CONTEXT_EDITOR_CONFIG_CHECK_QUERY_STRING_PARAM,
} from "@uniformdev/canvas";
import { getComposition } from "../src/uniform/api.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const templateHtml = readFileSync(
  join(rootDir, "dist", "server", "index.html"),
  "utf-8"
);

let renderFn;

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const requestPath = url.pathname;

    console.log("[nova] SSR handler called for path:", requestPath);
    console.log("[nova] UNIFORM_PROJECT_ID present:", Boolean(process.env.UNIFORM_PROJECT_ID));
    console.log("[nova] UNIFORM_API_KEY present:", Boolean(process.env.UNIFORM_API_KEY));

    const isConfigCheck =
      url.searchParams.get(IN_CONTEXT_EDITOR_CONFIG_CHECK_QUERY_STRING_PARAM) === "true";
    if (isConfigCheck) {
      return res.json({ hasPlayground: true });
    }

    let composition;
    if (requestPath === "/api/preview") {
      composition = EMPTY_COMPOSITION;
    } else {
      composition = await getComposition(requestPath);
    }

    console.log("[nova] composition result:", composition ? "found" : "null");

    if (!renderFn) {
      const entryPath = join(rootDir, "dist", "server", "entry-server.js");
      const mod = await import(entryPath);
      renderFn = mod.render;
    }

    const rendered = await renderFn({ composition });

    const html = templateHtml
      .replace("<!--app-head-->", rendered.head ?? "")
      .replace("<!--app-html-->", rendered.html ?? "");

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (e) {
    console.error("[nova] SSR handler error:", e);
    res.status(500).send(e.stack || e.message);
  }
}
