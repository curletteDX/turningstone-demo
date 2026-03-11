import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type PromotionCardProps = ComponentProps<{
  title?: string;
  description?: string;
  image?: Asset[];
  imageUrl?: string;
  url?: { path?: string };
}>;

export default function PromotionCard({ component }: PromotionCardProps) {
  const image = component.parameters?.image?.value as Asset[] | undefined;
  const assetUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const directUrl = component.parameters?.imageUrl?.value as string | undefined;
  const imageUrl = assetUrl || directUrl;
  const url = component.parameters?.url?.value as { path?: string } | undefined;

  const content = (
    <div className="w-[300px] shrink-0 overflow-hidden bg-white">
      {imageUrl && (
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={imageUrl} 
            alt="" 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">
          <UniformText parameterId="title" placeholder="Promotion Title" />
        </h3>
        {component.parameters?.description?.value && (
          <p className="mt-2 text-sm text-gray-600">
            <UniformText parameterId="description" placeholder="" />
          </p>
        )}
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
