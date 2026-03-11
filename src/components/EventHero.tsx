import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type EventHeroProps = ComponentProps<{
  title?: string;
  date?: string;
  time?: string;
  venue?: string;
  category?: string;
  image?: Asset[];
  buttonText?: string;
  buttonUrl?: { path?: string };
}>;

export default function EventHero({ component }: EventHeroProps) {
  const image = component.parameters?.image?.value as Asset[] | undefined;
  const imageUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const buttonUrl = component.parameters?.buttonUrl?.value as { path?: string } | undefined;
  const buttonText = component.parameters?.buttonText?.value as string | undefined;

  const showButton = buttonUrl?.path && buttonText?.trim();

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="shrink-0 md:w-1/2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt=""
                className="h-auto w-full object-cover"
              />
            ) : (
              <div className="flex aspect-4/3 items-center justify-center bg-gray-200">
                <span className="text-gray-400">Event Image</span>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="font-serif text-3xl text-[#8B7355] md:text-4xl lg:text-5xl">
              <UniformText parameterId="title" placeholder="Event Title" />
            </h1>

            <div className="mt-6 space-y-2 text-gray-700">
              <p className="text-lg">
                <UniformText parameterId="date" placeholder="April 24" />
                {" at "}
                <UniformText parameterId="time" placeholder="8:00pm" />
              </p>
              <p className="text-lg">
                <UniformText parameterId="venue" placeholder="The Showroom" />
              </p>
              <p className="text-lg">
                <UniformText parameterId="category" placeholder="Tribute" />
              </p>
            </div>

            {showButton && (
              <div className="mt-8">
                <a
                  href={buttonUrl.path}
                  className="inline-block border-2 border-[#8B7355] bg-[#8B7355] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-transparent hover:text-[#8B7355]"
                >
                  <UniformText parameterId="buttonText" placeholder="BUY TICKETS" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
