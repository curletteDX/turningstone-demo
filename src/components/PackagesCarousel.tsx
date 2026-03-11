import { useState } from "react";
import { type ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-react";

type PackagesCarouselProps = ComponentProps<{
  title?: string;
  showFilters?: boolean;
}>;

const FILTER_TABS = [
  { label: "ALL", value: "all" },
  { label: "DINING", value: "dining" },
  { label: "ENTERTAINMENT", value: "entertainment" },
  { label: "SPA & FITNESS", value: "spa" },
  { label: "GOLF & SPORTS", value: "golf" },
  { label: "NIGHTLIFE & LOUNGES", value: "nightlife" },
  { label: "WEDDINGS", value: "weddings" },
  { label: "SPORTS BOOK", value: "sportsbook" },
];

export default function PackagesCarousel({ component }: PackagesCarouselProps) {
  const showFilters = component.parameters?.showFilters?.value as boolean | undefined;
  const [activeFilter, setActiveFilter] = useState("all");

  const scrollLeft = () => {
    const container = document.getElementById("packages-carousel");
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("packages-carousel");
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-3xl uppercase tracking-wider text-[#8B7355]">
          <UniformText parameterId="title" placeholder="PACKAGES" />
        </h2>

        {showFilters && (
          <div className="mt-8 flex flex-wrap justify-center gap-4 border-b border-gray-200 pb-4">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`text-sm font-medium uppercase tracking-wider transition ${
                  activeFilter === tab.value
                    ? "text-[#8B7355]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="relative mt-8">
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#8B7355] transition hover:text-[#6d5a43]"
            aria-label="Previous"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            id="packages-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth px-8 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <UniformSlot name="cards" />
          </div>

          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-[#8B7355] transition hover:text-[#6d5a43]"
            aria-label="Next"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
