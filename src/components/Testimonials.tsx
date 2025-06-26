"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { testimonios } from "@/data/testimonios";
import { Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    []
  );

  const timer = useRef<NodeJS.Timeout | null>(null);

  // Autoplay
  useEffect(() => {
    const autoplay = () => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    };
    timer.current = setInterval(autoplay, 5000);
    return () => clearInterval(timer.current!);
  }, [instanceRef]);

  return (
    <section className="py-16 mt-20 bg-neutral-200 text-gray-700 dark:bg-neutral-950 dark:text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Lo que dicen mis clientes
        </h2>

        <div className="relative">
          <div
            ref={sliderRef}
            className="keen-slider mb-8"
            onMouseEnter={() => clearInterval(timer.current!)}
            onMouseLeave={() => {
              timer.current = setInterval(() => {
                instanceRef.current?.next();
              }, 5000);
            }}
          >
            {testimonios.map((t, i) => {
              const Slide = t.featured ? motion.div : "div";

              return (
                //CHEKEAR ESTOOOOOOOOOOOOO
                <Slide
                  key={i}
                  className="keen-slider__slide p-6 rounded-xl shadow-md bg-white text-neutral-800 dark:bg-neutral-900 dark:text-white"
                  initial={t.featured ? { opacity: 0, scale: 0.95 } : undefined}
                  animate={t.featured ? { opacity: 1, scale: 1 } : undefined}
                  transition={
                    t.featured
                      ? { duration: 0.6, ease: "easeOut", type: "spring" }
                      : {}
                  }
                >
                  <Quote className="w-8 h-8 text-blue-600 dark:text-blue-500 mx-auto mb-4" />
                  <p className="text-lg italic mb-6">“{t.message}”</p>
                  <div className="font-semibold">
                    {t.name} –{" "}
                    <span className="text-blue-600 dark:text-blue-400">
                      {t.company}
                    </span>
                  </div>
                </Slide>
              );
            })}
          </div>

          {/* Flechas */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800 hover:bg-blue-600 transition text-white"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-800 hover:bg-blue-600 transition text-white"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                currentSlide === i
                  ? "bg-blue-500"
                  : "bg-neutral-600 hover:bg-blue-500"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
