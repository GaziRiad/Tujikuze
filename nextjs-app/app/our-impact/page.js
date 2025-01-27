import React from "react";

import mainImg from "../../public/images/gradient-impact.png";
import Image from "next/image";
import InfoSection from "@/components/impact/InfoSection";
import Footer from "@/components/Footer";
import ResultSection from "@/components/impact/ResultSection";
import ESGDeligenceSection from "@/components/impact/ESGDeligenceSection";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function page() {
  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-11 text-lg lg:mb-24 lg:text-4xl">
          Tujikuze’s impact is measurable through the growth and empowerment of
          artisan communities, with thousands trained and employed in
          sustainable production. Our collaborations result in high-quality,
          ethically made products that reach global markets, creating lasting
          economic opportunities and fostering skill development. Tujikuze’s
          impact is measurable through the growth and empowerment of artisan
          communities, with thousands trained and employed in sustainable
          production. Our collaborations result in high-quality, ethically made
          products that reach global markets, creating lasting economic
          opportunities and fostering skill development.
        </p>
      </section>
      <Image
        src={mainImg}
        alt="Main image of our impact of Tujikuze"
        className="mb-14 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[920px]"
      />
      <InfoSection />
      <ResultSection />
      <ESGDeligenceSection />
      <section>
        <SectionHeading title="Case Studies / Impact Reports" href="/" />
        {/* same as ListItem */}
        <div className="mx-auto mb-14 grid max-w-[1720px] grid-cols-[25fr_75fr] items-start justify-between gap-5 px-4 pb-7 pt-7 lg:mb-48 lg:gap-0">
          <Image
            src={mainImg}
            alt="Our offer"
            className="h-[138px] w-[94px] object-cover lg:h-[300px] lg:w-[225px]"
          />
          <div className="flex items-start justify-between">
            <div className="flex max-w-[580px] flex-col text-4xl">
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
                  Our case studies illustrate the transformative impact of
                  bespoke collaborations on local artisans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
