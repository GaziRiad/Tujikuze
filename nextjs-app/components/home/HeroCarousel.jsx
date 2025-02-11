"use client";

import { useState, useRef, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Image from "next/image";

import React from "react";
import { CursorEffect } from "../Cusor";

export default function HeroCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorStyle, setCursorStyle] = useState("default");
  const [slidesPerView, setSlidesPerView] = useState(3);
  const sliderRef = useRef(null);

  const totalSlides = images.length;

  const nextSlide = () => {
    const nextIndex = Math.min(currentIndex + 1, totalSlides - slidesPerView);
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {images.map((slide, index) => (
          <div
            key={index}
            className="relative h-full"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <Image
              width={1800}
              height={1800}
              src={slide.url || "/images/placeholder.jpg"}
              alt={slide.alt || "Tujikuze image"}
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
