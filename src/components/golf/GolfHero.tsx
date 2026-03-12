import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type GolfHeroProps = ComponentProps<{
  title?: string;
  backgroundImage?: Asset[];
}>;

export default function GolfHero({ component }: GolfHeroProps) {
  const backgroundImage = component.parameters?.backgroundImage?.value as Asset[] | undefined;
  const backgroundImageUrl = backgroundImage?.[0]?.fields?.url?.value as string | undefined;

  return (
    <section 
      className="relative h-[60vh] min-h-[420px] max-h-[680px] overflow-hidden" 
      aria-label="Golf hero"
    >
      {backgroundImageUrl ? (
        <img
          src={backgroundImageUrl}
          alt="Aerial view of championship golf course at Turning Stone Resort in Upstate New York"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-green-900" />
      )}
      <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
      
      <div className="relative z-10 flex h-full items-end justify-center pb-12">
        <h1 className="text-4xl font-serif text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          <UniformText parameterId="title" placeholder="Championship Golf" />
        </h1>
      </div>
    </section>
  );
}
