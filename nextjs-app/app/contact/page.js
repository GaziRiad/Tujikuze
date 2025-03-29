import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactForm from "@/components/contact/ContactForm";
import DataList from "@/components/DataList";
import BlogSection from "@/components/BlogSection";
import DoubleBlocksSection from "@/components/DoubleBlocksSection";
import GridCarousel from "@/components/home/GridCarousel";
import Hero from "@/components/home/Hero";
import InteractiveModule from "@/components/InteractiveModule";
import MediaModule from "@/components/MediaModule";
import SectionHeading from "@/components/SectionHeading";
import TextListModule from "@/components/TextListModule";
import { sanityFetch } from "@/sanity/client";
import { contactquery } from "@/sanity/groq";
import { groq } from "next-sanity";
import React from "react";
import Footer from "@/components/Footer";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "contact"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["contact-us"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | Contact US",
    description: data?.seo?.description || "Tujikuze | Contact US",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export default async function page() {
  const data = await sanityFetch({
    query: contactquery,
    tags: ["contact"],
  });

  if (!data) return null;

  return (
    <div className="mt-20">
      {data?.modules?.map((module, index) => {
        if (module._type === "hero") return <Hero key={index} data={module} />;
        if (module._type === "sectionHeader")
          return <SectionHeading key={index} data={module} />;
        if (module._type === "ctaModule")
          return <DoubleBlocksSection key={index} data={module} />;
        if (module._type === "interactiveCardList")
          return <InteractiveModule key={index} data={module} />;
        if (module._type === "cardList")
          return <GridCarousel key={index} data={module} />;
        if (module._type === "mediaModule")
          return <MediaModule key={index} data={module} />;
        if (module._type === "editorial")
          return (
            <div
              key={index}
              className="mx-auto mb-28 flex max-w-[1720px] flex-col gap-6 px-4 py-5 lg:mb-48 lg:gap-8"
            >
              <p className="whitespace-pre-line text-lg lg:text-3xl">
                {module?.text}
              </p>
            </div>
          );

        if (module._type === "textList")
          return <TextListModule key={index} data={module} />;
        if (module._type === "keyStats")
          return <DataList key={index} data={module} />;
        if (module._type === "casesModule")
          return <CaseStudiesSection key={index} data={module} />;
        if (module._type === "blogModule")
          return <BlogSection key={index} data={module} />;

        if (module._type === "contactForm")
          return (
            <ContactForm
              key={index}
              data={{
                module,
              }}
            />
          );
      })}
      <Footer />
    </div>
  );
}
