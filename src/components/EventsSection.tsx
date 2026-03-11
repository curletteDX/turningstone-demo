import { type ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-react";

type EventsSectionProps = ComponentProps<{
  title?: string;
  subtitle?: string;
}>;

export default function EventsSection({ component }: EventsSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl text-[#8B7355] uppercase tracking-wider">
            <UniformText parameterId="title" placeholder="Upcoming Events" />
          </h2>
          {component.parameters?.subtitle?.value && (
            <p className="mt-2 text-gray-600">
              <UniformText parameterId="subtitle" placeholder="" />
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UniformSlot name="events" />
        </div>
      </div>
    </section>
  );
}
