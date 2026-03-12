import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type EventCardProps = ComponentProps<{
  title?: string;
  date?: string;
  venue?: string;
  image?: Asset[];
  imageUrl?: string;
  url?: { path?: string };
}>;

export default function EventCard({ component }: EventCardProps) {
  const image = component.parameters?.image?.value as Asset[] | undefined;
  const assetUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const directUrl = component.parameters?.imageUrl?.value as string | undefined;
  const imageUrl = assetUrl || directUrl;
  const url = component.parameters?.url?.value as { path?: string } | undefined;

  const content = (
    <div className="overflow-hidden bg-white shadow-sm">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <p className="text-sm text-[#8B7355]">
          <UniformText parameterId="date" placeholder="Jan 1" />
        </p>
        <h3 className="mt-1 text-lg font-medium text-gray-900">
          <UniformText parameterId="title" placeholder="" />
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          <UniformText parameterId="venue" placeholder="Venue" />
        </p>
      </div>
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
