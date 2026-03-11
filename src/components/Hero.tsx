import { useState, useEffect } from "react";
import { type ComponentProps, UniformSlot } from "@uniformdev/canvas-react";

type HeroCarouselProps = ComponentProps<{}>;

export default function HeroCarousel({ component }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = component.slots?.slides || [];
  const slideCount = slides.length;

  useEffect(() => {
    if (slideCount <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <UniformSlot name="slides" />
      </div>

      {slideCount > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
