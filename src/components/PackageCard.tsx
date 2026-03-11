import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type PackageCardProps = ComponentProps<{
  title?: string;
  image?: Asset[];
  url?: { path?: string };
  category?: string;
}>;

export default function PackageCard({ component }: PackageCardProps) {
  const image = component.parameters?.image?.value as Asset[] | undefined;
  const imageUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const url = component.parameters?.url?.value as { path?: string } | undefined;

  const content = (
    <div className="w-[280px] shrink-0">
      <div className="aspect-4/3 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-gray-400">Package Image</span>
          </div>
        )}
      </div>

      <p className="mt-3 text-center text-sm text-gray-700">
        <UniformText parameterId="title" placeholder="Package Name" />
      </p>
    </div>
  );

  if (url?.path) {
    return (
      <a href={url.path} className="block">
        {content}
      </a>
    );
  }

  return content;
}
