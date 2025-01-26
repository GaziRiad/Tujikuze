import React from "react";

import mainImg from "../../public/images/gradient-impact.png";
import Image from "next/image";
import InfoSection from "@/components/impact/InfoSection";

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
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-24 lg:h-[920px]"
      />
      <InfoSection />
    </>
  );
}
