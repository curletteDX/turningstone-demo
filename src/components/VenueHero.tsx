import { useEffect } from "react";
import { type ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";
import { useUniformSignals } from "@/hooks/useUniformSignals";

type VenueHeroProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: Asset[];
  ctaText?: string;
  ctaUrl?: { path?: string };
}>;

export default function VenueHero({ component }: VenueHeroProps) {
  const { setInterest } = useUniformSignals();
  const backgroundImage = component.parameters?.backgroundImage?.value as Asset[] | undefined;
  const backgroundImageUrl = backgroundImage?.[0]?.fields?.url?.value as string | undefined;
  const ctaUrl = component.parameters?.ctaUrl?.value as { path?: string } | undefined;
  const ctaText = component.parameters?.ctaText?.value as string | undefined;

  const showCta = ctaUrl?.path && ctaText?.trim();

  useEffect(() => {
    setInterest("wedding");
  }, [setInterest]);

  return (
    <section 
      className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center py-16 md:min-h-[500px]"
      style={{
        backgroundImage: backgroundImageUrl 
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImageUrl}')`
          : 'linear-gradient(to right, #8B7355, #6d5a43)',
      }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="font-serif text-4xl font-normal md:text-5xl lg:text-6xl">
          <UniformText parameterId="title" placeholder="Wedding Venues" />
        </h1>

        <p className="mt-4 text-lg font-light tracking-wide md:text-xl">
          <UniformText 
            parameterId="subtitle" 
            placeholder="Grand Expo Courtyard • Navajo Ballroom • Grand Ballroom • Shenendoah Clubhouse" 
          />
        </p>

        <div className="mx-auto mt-8 max-w-3xl text-base leading-relaxed md:text-lg">
          <UniformRichText 
            parameterId="description" 
            placeholder="Elegant Wedding Reception & Ceremony Locations in Upstate NY" 
          />
        </div>

        {showCta && (
          <div className="mt-10">
            <a
              href={ctaUrl.path}
              className="inline-block border-2 border-white bg-transparent px-10 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:bg-white hover:text-[#8B7355]"
            >
              <UniformText parameterId="ctaText" placeholder="Let's Talk About Your Wedding" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
