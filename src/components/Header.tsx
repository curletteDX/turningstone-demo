import { type ComponentProps, UniformSlot, UniformText } from "@uniformdev/canvas-react";

export default function Header(_props: ComponentProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-bold text-gray-900 transition hover:text-gray-600">
          <UniformText parameterId="siteName" placeholder="Your Brand" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          <UniformSlot name="navLinks" />
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
