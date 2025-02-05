import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

import ItemsGridList from "@/components/our-offer/ItemsGridList";
import OfferMaterials from "@/components/our-offer/OfferMaterials";
import TermsOfTrade from "@/components/our-offer/TermsOfTrade";
import { sanityFetch } from "@/sanity/client";
import { ourofferquery } from "@/sanity/groq";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";

export default async function page() {
  const data = await sanityFetch({
    query: ourofferquery,
    tags: ["our-offer"],
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] px-4 lg:mb-48 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">{data.intro.text}</p>
        <Image
          width={1200}
          height={1200}
          src={data.intro.image.imageUrl}
          alt={data.intro.image.alt}
          className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
        />
      </section>
      <OfferMaterials data={data.materialsAndCraftsmanshipSection} />
      <ItemsGridList
        title={data.craftsmanshipSection.heading}
        items={data.craftsmanshipSection.items}
      />
      <ItemsGridList
        title={data.materialsSection.heading}
        items={data.materialsSection.items}
      />

      <Image
        width={1600}
        height={1600}
        src={data.mainImage.imageUrl}
        alt={data.mainImage.alt}
        className="mb-8 mt-14 w-full object-cover object-center lg:mb-48 lg:mt-48"
      />

      <TermsOfTrade data={data.termsSection} />

      <CaseStudiesSection data={data.casesSection} />

      <Footer />
    </>
  );
}
