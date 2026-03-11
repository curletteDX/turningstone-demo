import { type ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-react";

type PromoCardsGridProps = ComponentProps<{
  title?: string;
}>;

export default function PromoCardsGrid({ component }: PromoCardsGridProps) {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        {component.parameters?.title?.value && (
          <h2 className="mb-8 text-center font-serif text-3xl text-[#8B7355]">
            <UniformText parameterId="title" placeholder="Featured" />
          </h2>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          <UniformSlot name="cards" />
        </div>
      </div>
    </section>
  );
}
