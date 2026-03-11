import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { LinkParamValue } from "@uniformdev/canvas";

export default function NavLink({ component }: ComponentProps) {
  const urlParam = component.parameters?.url?.value as LinkParamValue | undefined;
  const href = urlParam?.path ?? "#";

  return (
    <li>
      <a
        href={href}
        className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
      >
        <UniformText parameterId="label" placeholder="Link" />
      </a>
    </li>
  );
}
