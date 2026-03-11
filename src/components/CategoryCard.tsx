import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type CategoryCardProps = ComponentProps<{
  title?: string;
  backgroundImage?: Asset[];
  backgroundImageUrl?: string;
  url?: { path?: string };
}>;

export default function CategoryCard({ component }: CategoryCardProps) {
  const backgroundImage = component.parameters?.backgroundImage?.value as Asset[] | undefined;
  const assetUrl = backgroundImage?.[0]?.fields?.url?.value as string | undefined;
  const directUrl = component.parameters?.backgroundImageUrl?.value as string | undefined;
  const bgUrl = assetUrl || directUrl;
  const url = component.parameters?.url?.value as { path?: string } | undefined;
  const title = component.parameters?.title?.value as string | undefined;

  const showTitle = title?.trim();

  const content = (
    <div 
      className="relative flex min-h-[200px] items-center justify-center bg-cover bg-center md:min-h-[250px] lg:min-h-[300px]"
      style={bgUrl ? { backgroundImage: `url(${bgUrl})` } : { backgroundColor: "#3d3d3d" }}
    >
      <div className="absolute inset-0 bg-black/30 transition-opacity hover:bg-black/40" />
      
      {showTitle && (
        <h3 className="relative z-10 text-center text-2xl font-medium uppercase tracking-wider text-white drop-shadow-lg md:text-3xl lg:text-4xl">
          <UniformText parameterId="title" placeholder="Category" />
        </h3>
      )}
    </div>
  );

  if (url?.path) {
    return (
      <a href={url.path} className="block overflow-hidden">
        {content}
      </a>
    );
  }

  return <div className="overflow-hidden">{content}</div>;
}
