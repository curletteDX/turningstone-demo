import { type ComponentProps, UniformSlot } from "@uniformdev/canvas-react";

export default function CategoryCardsGrid({ component }: ComponentProps) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          <UniformSlot name="cards" />
        </div>
      </div>
    </section>
  );
}
