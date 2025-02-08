import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function ListItem({ item }) {
  return (
    <li className="grid grid-cols-[25fr_75fr] items-start justify-between gap-5 pb-7 pt-7 lg:gap-0">
      <Image
        width={1200}
        height={1200}
        src={item?.mainImage.imageUrl}
        alt={item?.title}
        className="h-[138px] w-[94px] object-cover lg:h-[300px] lg:w-[225px]"
      />
      <div className="flex items-start justify-between">
        <div className="flex max-w-[580px] flex-col text-4xl">
          <Link
            href={`/case-studies/${item?.slug.current}`}
            className="transition-all hover:text-dark-400"
          >
            <p className="text-xl lg:text-4xl">{item?.title}</p>
            <p className="mb-4 text-lg lg:mb-7 lg:text-4xl">{item?.subTitle}</p>
          </Link>
          <div className="group">
            <Link
              href={`/case-studies/${item?.slug.current}`}
              className="mb-5 flex w-fit items-center gap-1 font-secondary text-sm text-dark-600 transition-all hover:text-dark-400"
            >
              <span>LEARN MORE</span>
              <GoArrowRight />
            </Link>
            <p className="hidden max-w-md text-lg text-dark-400 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 lg:block">
              {item.summary}
            </p>
          </div>
        </div>
        <p className="hidden font-secondary text-sm text-dark-600 lg:block">
          {item?.publishedAt.split("-")[0]}, {item?.title}
        </p>
      </div>
    </li>
  );
}
