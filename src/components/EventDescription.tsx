import { type ComponentProps, UniformText, UniformRichText } from "@uniformdev/canvas-react";

type EventDescriptionProps = ComponentProps<{
  title?: string;
  content?: object;
  showShareSection?: boolean;
  facebookUrl?: { path?: string };
  twitterUrl?: { path?: string };
  emailSubject?: string;
}>;

export default function EventDescription({ component }: EventDescriptionProps) {
  const showShareSection = component.parameters?.showShareSection?.value as boolean | undefined;
  const facebookUrl = component.parameters?.facebookUrl?.value as { path?: string } | undefined;
  const twitterUrl = component.parameters?.twitterUrl?.value as { path?: string } | undefined;
  const emailSubject = component.parameters?.emailSubject?.value as string | undefined;

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-xl font-semibold text-gray-900">
          <UniformText parameterId="title" placeholder="Event Title" />
        </h2>

        <div className="prose prose-gray mt-4 max-w-none">
          <UniformRichText parameterId="content" />
        </div>

        {showShareSection && (
          <div className="mt-12 text-center">
            <h3 className="font-serif text-2xl text-gray-900">Share</h3>
            <div className="mt-4 flex items-center justify-center gap-6">
              {facebookUrl?.path && (
                <a
                  href={facebookUrl.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B7355] transition hover:text-[#6d5a43]"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
              )}
              {twitterUrl?.path && (
                <a
                  href={twitterUrl.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B7355] transition hover:text-[#6d5a43]"
                  aria-label="Share on X"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {emailSubject && (
                <a
                  href={`mailto:?subject=${encodeURIComponent(emailSubject)}`}
                  className="text-[#8B7355] transition hover:text-[#6d5a43]"
                  aria-label="Share via Email"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
