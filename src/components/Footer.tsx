import { type ComponentProps, UniformSlot } from "@uniformdev/canvas-react";

export default function Footer({ component }: ComponentProps) {
  const copyrightText = component.parameters?.copyrightText?.value as string | undefined;

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <UniformSlot name="links" />
        </nav>

        {copyrightText && (
          <p className="mt-8 text-center text-sm text-gray-500">
            {copyrightText}
          </p>
        )}
      </div>
    </footer>
  );
}
