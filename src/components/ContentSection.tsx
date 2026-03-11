import { type ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-react";

type ContentSectionProps = ComponentProps<{
  title?: string;
  subtitle?: string;
  body?: object;
  alignment?: string;
}>;

export default function ContentSection({ component }: ContentSectionProps) {
  const alignment = (component.parameters?.alignment?.value as string) || "center";
  
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section className="py-12 bg-white">
      <div className={`mx-auto max-w-4xl px-4 ${alignmentClasses[alignment as keyof typeof alignmentClasses] || "text-center"}`}>
        {component.parameters?.title?.value && (
          <h2 className="font-serif text-3xl text-[#8B7355]">
            <UniformText parameterId="title" placeholder="Section Title" />
          </h2>
        )}
        {component.parameters?.subtitle?.value && (
          <p className="mt-2 text-lg text-gray-600">
            <UniformText parameterId="subtitle" placeholder="" />
          </p>
        )}
        {component.parameters?.body?.value && (
          <div className="mt-6 prose prose-gray max-w-none">
            <UniformRichText parameterId="body" />
          </div>
        )}
      </div>
    </section>
  );
}
