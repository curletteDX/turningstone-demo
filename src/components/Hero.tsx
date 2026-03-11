import {
  type ComponentProps,
  UniformRichText,
  UniformText,
} from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type HeroProps = ComponentProps<{
  title: string;
  description?: string;
  buttonText?: string;
  backgroundImage?: Asset[];
}>;

export default function Hero({ component }: HeroProps) {
  const backgroundImage = component.parameters?.backgroundImage?.value as Asset[] | undefined;
  const bgUrl = backgroundImage?.[0]?.fields?.url?.value as string | undefined;
  const buttonUrl = component.parameters?.buttonUrl?.value as { path?: string } | undefined;

  return (
    <section
      className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center px-4 py-20"
      style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : undefined}
    >
      {bgUrl && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <UniformText
          className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${bgUrl ? "text-white" : "text-gray-900"}`}
          parameterId="title"
          as="h1"
          placeholder="Hero title goes here"
        />
        <div className={`mx-auto mt-6 max-w-2xl text-lg ${bgUrl ? "text-gray-200" : "text-gray-600"}`}>
          <UniformRichText parameterId="description" />
        </div>
        {buttonUrl?.path && (
          <div className="mt-8">
            <a
              href={buttonUrl.path}
              className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <UniformText parameterId="buttonText" placeholder="Learn more" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
