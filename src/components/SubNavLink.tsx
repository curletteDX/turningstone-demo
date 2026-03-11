import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";

type SubNavLinkProps = ComponentProps<{
  label?: string;
  url?: { path?: string };
}>;

export default function SubNavLink({ component }: SubNavLinkProps) {
  const url = component.parameters?.url?.value as { path?: string } | undefined;

  return (
    <a
      href={url?.path || "#"}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      <UniformText parameterId="label" placeholder="Sub Link" />
    </a>
  );
}
