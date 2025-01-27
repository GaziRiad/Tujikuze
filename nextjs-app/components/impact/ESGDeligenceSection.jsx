import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

import mainImg from "../../public/images/gradient-impact.png";

export default function ESGDeligenceSection() {
  return (
    <section>
      <SectionHeading title="ESG Due Diligence" href="/" />
      <div className="mx-auto max-w-[1720px] px-4">
        <div className="mb-11 grid grid-cols-1 gap-5 lg:mb-24 lg:grid-cols-2 lg:gap-0">
          <p className="max-w-[648px] text-lg text-dark-600 lg:text-4xl">
            Our case studies showcase how bespoke products empower artisans and
            promote sustainability.
          </p>
          <div className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
            <p>
              Our case studies illustrate the transformative impact of bespoke
              collaborations on local artisans. By partnering with Tujikuze,
              businesses not only gain access to authentic craftsmanship but
              also contribute to the economic empowerment of the communities
              involved.
            </p>
            <p>
              Our case studies illustrate the transformative impact of bespoke
              collaborations on local artisans. By partnering with Tujikuze,
              businesses not only gain access to authentic craftsmanship but
              also contribute to the economic empowerment of the communities
              involved.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={mainImg}
        alt="Main image of our impact of Tujikuze"
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-24 lg:h-[920px]"
      />
    </section>
  );
}
