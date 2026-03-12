import { type ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-react";

type CTABannerProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  body?: object;
  ctaText?: string;
  ctaLink?: { path?: string };
  additionalText?: string;
  additionalLink?: { path?: string };
  additionalLinkText?: string;
}>;

/**
 * CTA Banner - Full-width promotional section with headline, body text, and call-to-action
 *
 * Features:
 * - Large serif headline with accent color
 * - Subtitle with tracking and uppercase styling
 * - Rich text body content
 * - Primary CTA button
 * - Optional additional text with link
 * - Award badges section (static for now)
 */
export default function CTABanner({ component }: CTABannerProps) {
  const ctaLink = (component.parameters?.ctaLink?.value as { path?: string })?.path || "#";
  const additionalLink = (component.parameters?.additionalLink?.value as { path?: string })?.path || "#";

  return (
    <section className="py-16 px-6 bg-background text-center" aria-label="Promotional banner">
      <div className="max-w-3xl mx-auto">
        {/* Main heading */}
        {component.parameters?.title?.value && (
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-accent uppercase tracking-wide text-balance leading-tight mb-6">
            <UniformText parameterId="title" placeholder="Enter headline" />
          </h2>
        )}

        {/* Subtitle */}
        {component.parameters?.subtitle?.value && (
          <p className="font-sans text-sm md:text-base tracking-[0.22em] uppercase text-foreground/60 mb-8 text-balance">
            <UniformText parameterId="subtitle" placeholder="Enter subtitle" />
          </p>
        )}

        {/* Body text */}
        {component.parameters?.body?.value && (
          <div className="font-sans text-sm leading-relaxed text-foreground/80 max-w-2xl mx-auto mb-8 text-pretty prose prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-2">
            <UniformRichText parameterId="body" />
          </div>
        )}

        {/* CTA Button */}
        {component.parameters?.ctaText?.value && (
          <a
            href={ctaLink}
            className="inline-flex items-center px-10 py-4 bg-accent text-accent-foreground text-xs tracking-[0.2em] uppercase font-sans font-semibold hover:bg-accent/90 transition-colors mb-10"
          >
            <UniformText parameterId="ctaText" placeholder="Button text" />
          </a>
        )}

        {/* Additional text with link */}
        {component.parameters?.additionalText?.value && (
          <p className="font-sans text-sm text-foreground/70 mb-10">
            <UniformText parameterId="additionalText" placeholder="Additional text" />
            {component.parameters?.additionalLinkText?.value && (
              <>
                {" "}
                <a href={additionalLink} className="text-accent hover:underline underline-offset-2">
                  <UniformText parameterId="additionalLinkText" placeholder="Link text" />
                </a>
              </>
            )}
          </p>
        )}

        {/* Award badges row */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {/* Golfers' Choice 2025 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-blue-800 flex flex-col items-center justify-center text-white border-4 border-blue-600 shadow-md">
              <span className="font-sans text-[9px] tracking-widest uppercase text-blue-200">Golfers&apos;</span>
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider">Choice</span>
              <span className="font-sans text-base font-black leading-none">2025</span>
              <span className="font-sans text-[8px] tracking-widest mt-0.5 text-blue-300">GolfPass</span>
            </div>
          </div>

          {/* Distinguished Golf Destination */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-secondary">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-foreground/50" fill="currentColor" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="20,8 22.5,16 31,16 24.5,21 27,29 20,24 13,29 15.5,21 9,16 17.5,16" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-sans text-sm font-bold text-foreground leading-snug">Distinguished Golf</p>
              <p className="font-sans text-sm font-bold text-foreground leading-snug">Destination</p>
              <p className="font-sans text-[10px] text-foreground/50 tracking-widest uppercase">
                from <span className="font-black">BOARDROOM</span> magazine
              </p>
            </div>
          </div>

          {/* Golfweek */}
          <div>
            <p className="font-sans text-4xl font-black text-foreground tracking-tight">Golfweek<sup className="text-lg">&#174;</sup></p>
          </div>
        </div>
      </div>
    </section>
  );
}
