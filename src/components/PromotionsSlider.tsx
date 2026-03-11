import { type ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-react";

type PromotionsSliderProps = ComponentProps<{
  title?: string;
  description?: string;
}>;

export default function PromotionsSlider({ component }: PromotionsSliderProps) {
  return (
    <section className="py-12 bg-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl text-white uppercase tracking-wider">
            <UniformText parameterId="title" placeholder="Promotions" />
          </h2>
          {component.parameters?.description?.value && (
            <p className="mt-2 text-gray-300">
              <UniformText parameterId="description" placeholder="" />
            </p>
          )}
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          <UniformSlot name="promotionCards" />
        </div>
      </div>
    </section>
  );
}
