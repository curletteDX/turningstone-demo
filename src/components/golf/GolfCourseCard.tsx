import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type GolfCourseCardProps = ComponentProps<{
  image?: Asset[];
  imageAlt?: string;
  overlayType?: "logo-text" | "script-title" | "badge-label";
  overlayText?: string;
  overlaySubtext?: string;
  href?: { path?: string };
}>;

export default function GolfCourseCard({ component }: GolfCourseCardProps) {
  const image = component.parameters?.image?.value as Asset[] | undefined;
  const imageUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const imageAlt = (component.parameters?.imageAlt?.value as string) || "";
  const overlayType = (component.parameters?.overlayType?.value as string) || "script-title";
  const overlayText = component.parameters?.overlayText?.value as string | undefined;
  const overlaySubtext = component.parameters?.overlaySubtext?.value as string | undefined;
  const hrefParam = component.parameters?.href?.value as { path?: string } | undefined;
  const href = hrefParam?.path || "#";

  const cardContent = (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-800" />
      )}

      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          overlayType === "script-title"
            ? "bg-foreground/30 group-hover:bg-foreground/40"
            : "bg-foreground/20 group-hover:bg-foreground/35"
        }`}
        aria-hidden="true"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-8">
        {overlayType === "script-title" && (
          <p className="text-center font-serif text-2xl font-light uppercase italic tracking-widest text-white drop-shadow-lg md:text-3xl">
            <UniformText parameterId="overlayText" placeholder="Course Name" as="span" />
          </p>
        )}

        {overlayType === "badge-label" && (
          <div className="w-full text-left">
            <p className="mb-0.5 font-sans text-sm font-light leading-snug text-white/90">
              <UniformText parameterId="overlayText" placeholder="Label" as="span" />
            </p>
            {overlaySubtext && (
              <p className="font-serif text-3xl font-semibold leading-tight text-white drop-shadow-md md:text-4xl">
                <UniformText parameterId="overlaySubtext" placeholder="Subtext" as="span" />
              </p>
            )}
          </div>
        )}

        {overlayType === "logo-text" && (
          <div className="flex flex-col items-center gap-2">
            {/* Circle logo placeholder */}
            <div className="mb-1 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-sm">
              <svg
                viewBox="0 0 32 32"
                className="h-8 w-8 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 6 C10 10 8 14 8 18 C8 22 11 26 16 26 C21 26 24 22 24 18 C24 14 22 10 16 6Z"
                  opacity="0.6"
                />
              </svg>
            </div>
            <p className="font-serif text-2xl font-semibold tracking-wide text-white drop-shadow-md md:text-3xl">
              <UniformText parameterId="overlayText" placeholder="Course Name" as="span" />
            </p>
          </div>
        )}
      </div>
    </>
  );

  return (
    <a
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden bg-foreground"
      aria-label={`Learn more about ${overlayText || "this course"}`}
    >
      {cardContent}
    </a>
  );
}
