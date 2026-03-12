import { useEffect } from "react";
import { type ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";
import { useUniformSignals } from "@/hooks/useUniformSignals";

type VenueCardProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  description?: string;
  image?: Asset[];
  availabilityNote?: string;
  features?: string;
  capacityData?: string;
  ctaText?: string;
  ctaUrl?: { path?: string };
}>;

interface CapacityRow {
  space: string;
  squareFt: string;
  seatingCapacity: string;
}

export default function VenueCard({ component }: VenueCardProps) {
  const { setInterest } = useUniformSignals();
  const image = component.parameters?.image?.value as Asset[] | undefined;

  useEffect(() => {
    setInterest("wedding");
  }, [setInterest]);
  const imageUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const ctaUrl = component.parameters?.ctaUrl?.value as { path?: string } | undefined;
  const ctaText = component.parameters?.ctaText?.value as string | undefined;
  const availabilityNote = component.parameters?.availabilityNote?.value as string | undefined;
  const capacityDataRaw = component.parameters?.capacityData?.value as string | undefined;

  const showCta = ctaUrl?.path && ctaText?.trim();

  let capacityRows: CapacityRow[] = [];
  if (capacityDataRaw) {
    try {
      capacityRows = JSON.parse(capacityDataRaw);
    } catch {
      capacityRows = [];
    }
  }

  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        {availabilityNote && (
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#8B7355]">
            <UniformText parameterId="availabilityNote" placeholder="Available Labor Day 2026" />
          </p>
        )}

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="shrink-0 lg:w-1/2">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt=""
                className="h-auto w-full rounded-lg object-cover shadow-lg"
              />
            ) : (
              <div className="flex aspect-4/3 items-center justify-center rounded-lg bg-gray-200">
                <span className="text-gray-400">Venue Image</span>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:w-1/2">
            <h2 className="font-serif text-2xl text-[#8B7355] md:text-3xl">
              <UniformText parameterId="title" placeholder="Venue Name" />
            </h2>

            <p className="mt-1 text-lg font-medium uppercase tracking-wide text-gray-600">
              <UniformText parameterId="subtitle" placeholder="Tagline Here" />
            </p>

            <div className="mt-4 text-gray-700 leading-relaxed">
              <UniformRichText parameterId="description" placeholder="Venue description..." />
            </div>

            <div className="mt-6">
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-gray-800">
                Features:
              </h3>
              <div className="prose prose-sm text-gray-700">
                <UniformRichText parameterId="features" placeholder="• Feature 1\n• Feature 2" />
              </div>
            </div>

            {capacityRows.length > 0 && (
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 pr-4 font-semibold text-gray-800">Space</th>
                      <th className="py-2 pr-4 font-semibold text-gray-800">Square Ft</th>
                      <th className="py-2 font-semibold text-gray-800">Seating Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {capacityRows.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 pr-4 text-gray-700">{row.space}</td>
                        <td className="py-2 pr-4 text-gray-700">{row.squareFt}</td>
                        <td className="py-2 text-gray-700">{row.seatingCapacity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {showCta && (
              <div className="mt-8">
                <a
                  href={ctaUrl.path}
                  className="inline-block border-2 border-[#8B7355] bg-[#8B7355] px-6 py-3 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-transparent hover:text-[#8B7355]"
                >
                  <UniformText parameterId="ctaText" placeholder="Let's Talk About Your Wedding" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
