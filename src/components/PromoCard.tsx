import { type ComponentProps, UniformText } from "@uniformdev/canvas-react";
import type { Asset } from "@uniformdev/canvas";

type PromoCardProps = ComponentProps<{
  title?: string;
  description?: string;
  image?: Asset[];
  imageUrl?: string;
  buttonText?: string;
  buttonUrl?: { path?: string };
}>;

export default function PromoCard({ component }: PromoCardProps) {
  const image = component.parameters?.image?.value as Asset[] | undefined;
  const assetUrl = image?.[0]?.fields?.url?.value as string | undefined;
  const directUrl = component.parameters?.imageUrl?.value as string | undefined;
  const imageUrl = assetUrl || directUrl;
  const buttonUrl = component.parameters?.buttonUrl?.value as { path?: string } | undefined;

  return (
    <div className="w-[250px] shrink-0">
      <div className="overflow-hidden bg-white shadow-sm">
        {imageUrl && (
          <div className="h-[150px] overflow-hidden">
            <img 
              src={imageUrl} 
              alt="" 
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-6 text-center">
          <h3 className="text-xl font-medium text-[#8B7355]">
            <UniformText parameterId="title" placeholder="Card Title" />
          </h3>
          
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            <UniformText parameterId="description" placeholder="Card description goes here..." />
          </p>

          {buttonUrl?.path && (
            <a
              href={buttonUrl.path}
              className="mt-4 inline-block border-2 border-[#8B7355] px-6 py-2 text-xs font-medium uppercase tracking-wider text-[#8B7355] transition hover:bg-[#8B7355] hover:text-white"
            >
              <UniformText parameterId="buttonText" placeholder="LEARN MORE" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
