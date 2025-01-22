"use client";

import { useState, useRef, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { CursorEffect } from "../Cusor";

const slides = [
  { id: 1, image: "/images/1.jpg", title: "Collection Winter 2025" },
  { id: 2, image: "/images/2.jpg", title: "New Arrivals" },
  { id: 3, image: "/images/cotton.png", title: "Accessories" },
  { id: 4, image: "/images/metal.png", title: "Spring Collection" },
  { id: 5, image: "/images/fibers.png", title: "Summer Essentials" },
  { id: 6, image: "/images/1.jpg", title: "More Collections" },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorStyle, setCursorStyle] = useState("default");
  const sliderRef = useRef(null);

  const totalSlides = slides.length;
  const slidesPerView = 3;

  const nextSlide = () => {
    const nextIndex = Math.min(currentIndex + 1, totalSlides - slidesPerView);
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        (currentIndex * 100) / totalSlides
      }%)`;
    }
  }, [currentIndex, totalSlides]);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const { innerWidth } = window;
    const threshold = innerWidth / 3;

    if (clientX < threshold && currentIndex > 0) {
      setCursorStyle("left");
    } else if (
      clientX > innerWidth - threshold &&
      currentIndex < totalSlides - slidesPerView
    ) {
      setCursorStyle("right");
    } else {
      setCursorStyle("default");
    }
  };

  const handleClick = (e) => {
    const { clientX } = e;
    const { innerWidth } = window;
    const threshold = innerWidth / 2;

    if (clientX < threshold && currentIndex > 0) {
      prevSlide();
    } else if (
      clientX >= threshold &&
      currentIndex < totalSlides - slidesPerView
    ) {
      nextSlide();
    }
  };

  return (
    <div
      id="hero-section"
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{ cursor: "none" }}
    >
      {/* CursorEffect scoped to hero section */}
      <CursorEffect targetSelector="#hero-section" />

      {/* Custom Cursor */}
      <div
        className={`pointer-events-none fixed z-20 mix-blend-difference transition-opacity duration-300 ${
          cursorStyle === "default" ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: "var(--x)",
          top: "var(--y)",
          transform: `translate(-50%, -50%) translateX(${
            cursorStyle === "left" ? -20 : 20
          }px)`,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
        }}
      >
        {cursorStyle === "left" && (
          <GoArrowLeft className="h-10 w-10 text-white" />
        )}
        {cursorStyle === "right" && (
          <GoArrowRight className="h-10 w-10 text-white" />
        )}
      </div>

      {/* Slides */}
      <div
        ref={sliderRef}
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{
          width: `${(totalSlides / slidesPerView) * 100}%`,
          transform: `translateX(-${(currentIndex / (totalSlides - slidesPerView)) * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-full"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <Image
              width={1800}
              height={1800}
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute left-8 right-8 top-8">
              <h1
                className="animate-fade-in text-4xl font-light text-white opacity-0 md:text-6xl"
                style={{ animation: "fadeIn 0.5s ease-out forwards" }}
              >
                {slide.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
