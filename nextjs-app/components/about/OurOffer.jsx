import Image from "next/image";
import React from "react";

import imgLarge from "../../public/images/2.jpg";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

export default function OurOffer() {
  return (
    <section className="mx-auto mb-14 grid max-w-[1720px] grid-cols-[25fr_75fr] items-start justify-between gap-5 px-4 pb-7 pt-7 lg:mb-48 lg:gap-0">
      <Image
        src={imgLarge}
        alt="Our offer"
        className="h-[138px] w-[94px] object-cover lg:h-[300px] lg:w-[225px]"
      />
      <div className="flex items-start justify-between">
        <div className="flex max-w-[580px] flex-col text-4xl">
          <p className="text-xl lg:text-4xl">OUR OFFER</p>
          <p className="mb-4 text-lg lg:mb-7 lg:text-4xl">
            Supporting Communities. Driving Sustainability.
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
      </div>
    </section>
  );
}
