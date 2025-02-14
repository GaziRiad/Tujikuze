import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

import ItemsGridList from "@/components/our-offer/ItemsGridList";
import OfferMaterials from "@/components/our-offer/OfferMaterials";
import TermsOfTrade from "@/components/our-offer/TermsOfTrade";
import { sanityFetch } from "@/sanity/client";
import { ourofferquery } from "@/sanity/groq";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { groq } from "next-sanity";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "our-offer"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["our-offer"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | Our Offer",
    description: data?.seo?.description || "Tujikuze | Our Offer",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export default async function page() {
  const data = await sanityFetch({
    query: ourofferquery,
    tags: ["our-offer", "case-studies"],
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] px-4 lg:mb-48 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">{data.intro.text}</p>
        <Image
          width={1200}
          height={1200}
          src={data.intro?.image?.imageUrl || "/images/placeholder.jpg"}
          alt={data.intro?.image?.alt || "Tujikuze Image"}
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
        src={data.mainImage?.imageUrl || "/images/placeholder.jpg"}
        alt={data.mainImage?.alt || "Tujikuze Image"}
        className="mb-8 mt-14 w-full object-cover object-center lg:mb-48 lg:mt-48"
      />

      <TermsOfTrade data={data.termsSection} />

      <CaseStudiesSection data={data.casesSection} />

      <Footer />
    </>
  );
}
