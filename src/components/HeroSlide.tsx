import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type HeroSlideProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  backgroundImage?: Asset[];
  backgroundImageUrl?: string;
  buttonText?: string;
  buttonUrl?: { path?: string };
  overlayOpacity?: number;
}>;

export default function HeroSlide({ component }: HeroSlideProps) {
  const backgroundImage = component.parameters?.backgroundImage?.value as Asset[] | undefined;
  const assetUrl = backgroundImage?.[0]?.fields?.url?.value as string | undefined;
  const directUrl = component.parameters?.backgroundImageUrl?.value as string | undefined;
  const bgUrl = assetUrl || directUrl;
  const buttonUrl = component.parameters?.buttonUrl?.value as { path?: string } | undefined;
  const buttonText = component.parameters?.buttonText?.value as string | undefined;
  const overlayOpacity = (component.parameters?.overlayOpacity?.value as number) ?? 20;

  const showButton = buttonUrl?.path && buttonText?.trim();

  return (
    <div
      className="relative flex min-h-[350px] w-full shrink-0 items-center justify-center bg-cover bg-center md:min-h-[450px] lg:min-h-[500px]"
      style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : { backgroundColor: "#1a1a1a" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/30"
        style={{ opacity: overlayOpacity / 100 * 2 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center px-4">
        <h2 className="font-serif text-5xl text-white drop-shadow-2xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wide">
          <UniformText parameterId="title" placeholder="" />
        </h2>

        {component.parameters?.subtitle?.value && (
          <p className="mt-4 text-lg text-white/90 md:text-xl lg:text-2xl font-light">
            <UniformText parameterId="subtitle" placeholder="" />
          </p>
        )}

        {showButton && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={buttonUrl.path}
              className="border-2 border-white bg-transparent px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-white hover:text-[#1a1a1a]"
            >
              <UniformText parameterId="buttonText" placeholder="Learn More" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
