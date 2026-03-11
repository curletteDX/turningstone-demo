import React from "react";
import ReactDOMServer from "react-dom/server";
import type { RootComponentInstance } from "@uniformdev/canvas";
import App from "./App";

interface RenderOptions {
  composition: RootComponentInstance;
}

export async function render({ composition }: RenderOptions) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App composition={composition} />
    </React.StrictMode>
  );
  return { html };
}
