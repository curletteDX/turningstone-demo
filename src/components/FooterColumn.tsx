import { type ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-react";

type FooterColumnProps = ComponentProps<{
  title?: string;
}>;

export default function FooterColumn({ component }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        <UniformText parameterId="title" placeholder="Column Title" />
      </h3>
      <ul className="space-y-2">
        <UniformSlot name="links" />
      </ul>
    </div>
  );
}
