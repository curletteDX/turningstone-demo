import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { LinkParamValue } from "@uniformdev/canvas";

export default function FooterLink({ component }: ComponentProps) {
  const url = component.parameters?.url?.value as LinkParamValue | undefined;
  const href = url?.path ?? "#";

  return (
    <a
      href={href}
      className="text-sm text-gray-600 transition hover:text-gray-900"
    >
      <UniformText parameterId="label" placeholder="Link" />
    </a>
  );
}
