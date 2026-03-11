import type { RootComponentInstance } from "@uniformdev/canvas";
import { UniformComposition } from "@uniformdev/canvas-react";
import { Context } from "@uniformdev/context";
import { UniformContext } from "@uniformdev/context-react";
import { manifest } from "@/uniform/manifest";
import { resolveComponent } from "@/uniform/resolve";
import "./App.css";

declare global {
  interface Window {
    _uniformPreloadedComposition?: RootComponentInstance;
  }
}

const context = new Context({ manifest, defaultConsent: true });

export default function App({
  composition,
}: { composition?: RootComponentInstance } = {}) {
  let data = composition;
  if (typeof window !== "undefined" && window._uniformPreloadedComposition) {
    data = window._uniformPreloadedComposition;
  }

  return (
    <div>
      <UniformContext context={context}>
        <UniformComposition
          data={data}
          behaviorTracking="onLoad"
          resolveRenderer={resolveComponent}
        />
      </UniformContext>

      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `window._uniformPreloadedComposition = ${JSON.stringify(data)};`,
        }}
      />
    </div>
  );
}
