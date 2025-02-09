"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function ListItem({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="grid grid-cols-[25fr_75fr] items-start justify-between gap-5 pb-7 pt-7 lg:gap-0">
      {/* Image Section */}
      <Link
        href={`/case-studies/${item?.slug.current}`}
        className="block w-fit"
      >
        <div
          className="relative h-[138px] w-[94px] lg:h-[300px] lg:w-[225px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            width={1200}
            height={1200}
            src={item?.mainImage.imageUrl}
            alt={item?.title}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          {/* Fixed Dark Overlay */}
          <div
            className={`absolute inset-0 bg-dark-600 transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-20" : "opacity-0"
            }`}
          ></div>
        </div>
      </Link>

      {/* Text Content */}
      <div className="flex items-start justify-between">
        <div
          className="flex max-w-[580px] flex-col"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Title and Subtitle */}
          <Link
            href={`/case-studies/${item?.slug.current}`}
            className={`transition-all duration-300 ${
              isHovered ? "text-dark-400" : "text-dark-600"
            }`}
          >
            <p className="text-xl lg:text-4xl">{item?.title}</p>
            <p className="mb-4 text-lg lg:mb-7 lg:text-4xl">{item?.subTitle}</p>
          </Link>

          {/* "LEARN MORE" Section */}
          <div>
            <Link
              href={`/case-studies/${item?.slug.current}`}
              className="mb-5 flex w-fit gap-1 font-secondary text-sm transition-all"
            >
              <span
                className={`transition-colors duration-300 ${
                  isHovered ? "text-dark-400" : "text-dark-600"
                }`}
              >
                LEARN MORE
              </span>
              <GoArrowRight
                size={18}
                className={`transition-transform duration-300 ${
                  isHovered
                    ? "translate-x-1 text-dark-400"
                    : "translate-x-0 text-dark-600"
                }`}
              />
            </Link>

            {/* Summary Appears on Hover */}
            <p
              className={`hidden max-w-md text-lg text-dark-400 transition-opacity duration-300 ease-in-out lg:block ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.summary}
            </p>
          </div>
        </div>

        {/* META Info */}
        <div className="hidden items-center gap-1 font-secondary text-sm text-dark-600 lg:flex">
          <p>{item?.publishedAt?.split("-")[0]},</p>
          <ul>
            {item?.categories?.map((category, index) => (
              <Link
                href={`case-studies?category=${category.slug.current}`}
                className="transition-all duration-300 hover:text-dark-400"
                key={category.slug.current}
              >
                <li className={`cursor-pointer`}>{category.title}</li>
                {index < item.categories.length - 1 && (
                  <span className="hidden lg:inline">,</span>
                )}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
