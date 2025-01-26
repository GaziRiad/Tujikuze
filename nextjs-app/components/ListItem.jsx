import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function ListItem({ item }) {
  return (
    <li className="grid grid-cols-[25fr_75fr] items-start justify-between gap-5 pb-7 pt-7 lg:gap-0">
      <Image
        src={item?.img}
        alt={item?.title}
        className="h-[138px] w-[94px] object-cover lg:h-[300px] lg:w-[225px]"
      />
      <div className="flex items-start justify-between">
        <div className="flex max-w-[580px] flex-col text-4xl">
          <p className="text-xl lg:text-4xl">{item?.title}</p>
          <p className="mb-4 text-lg lg:mb-7 lg:text-4xl">
            {item?.description}
          </p>
          <div className="group">
            <Link
              href="/"
              className="mb-5 flex w-fit items-center gap-1 font-secondary text-sm text-[#1A1A1A] transition-all hover:text-[#726f66]"
            >
              <span>LEARN MORE</span>
              <GoArrowRight />
            </Link>
            <p className="hidden max-w-md text-lg text-[#726F66] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 lg:block">
              Our case studies illustrate the transformative impact of bespoke
              collaborations on local artisans.
            </p>
          </div>
        </div>
        <p className="hidden font-secondary text-sm text-[#1A1A1A] lg:block">
          {item?.meta}
        </p>
      </div>
    </li>
  );
}
