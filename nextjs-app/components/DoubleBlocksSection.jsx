"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

function DoubleBlocksSection({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!data) return null;

  return (
    <section className="mx-auto mb-28 flex max-w-[1460px] flex-col justify-between gap-9 px-4 lg:mb-48 lg:flex-row lg:items-start lg:gap-52">
      {/* Text Section (Clickable) */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={data?.link?.linkUrl}
          className={`block transition-colors duration-300 ${
            isHovered ? "text-dark-400" : "text-dark-600"
          }`}
        >
          <p className="text-[22px] lg:text-3xl">{data?.title}</p>
          <p className="mb-7 text-lg leading-tight lg:text-3xl">
            {data?.subTitle}
          </p>
        </Link>

        {/* Small Link + Arrow (Now Triggers Hover Effects Too) */}
        <Link
          href={data?.link?.linkUrl}
          className="mb-5 flex w-fit gap-1 font-secondary text-sm transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={isHovered ? "text-dark-400" : "text-dark-600"}>
            {data?.link?.label}
          </span>
          <GoArrowRight
            size={18}
            className={`transition-transform ${
              isHovered
                ? "translate-x-1 text-dark-400"
                : "translate-x-0 text-dark-600"
            }`}
          />
        </Link>

        {/* Hidden paragraph appears on hover */}
        <p
          className={`hidden max-w-md whitespace-pre-line text-lg text-dark-400 transition-opacity duration-300 ease-in-out lg:block ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {data?.text}
        </p>
      </div>

      {/* Image Section (Clickable) */}
      <Link
        href={data?.link?.linkUrl}
        className="relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <Image
            width={1200}
            height={1200}
            src={data?.image?.url || "/images/placeholder.jpg"}
            alt={data?.image?.alt || "Tujikuze Image"}
            className="h-[420px] object-cover object-center transition-all lg:h-[520px] 2xl:h-[620px]"
          />
          {/* Dark Overlay Effect */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isHovered ? "opacity-30" : "opacity-0"
            }`}
          ></div>
        </div>
      </Link>
    </section>
  );
}

export default DoubleBlocksSection;
