import CaseStudiesSection from "@/components/CaseStudiesSection";
import DataList from "@/components/DataList";
import Footer from "@/components/Footer";
import BlogSection from "@/components/home/BlogSection";
import DoubleBlocksSection from "@/components/home/DoubleBlocksSection";
import GridCarousel from "@/components/home/GridCarousel";
import Hero from "@/components/home/Hero";
import InteractiveModule from "@/components/home/InteractiveModule";
import MediaModule from "@/components/MediaModule";
import SectionHeading from "@/components/SectionHeading";
import TextListModule from "@/components/TextListModule";
import { sanityFetch } from "@/sanity/client";
import { impactquery } from "@/sanity/groq";
import { groq } from "next-sanity";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "our-impact"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["our-impact"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | Our Impact",
    description: data?.seo?.description || "Tujikuze | Our Impact",
  };
}

export const revalidate = 2592000; // 30 days in seconds

export default async function page() {
  const data = await sanityFetch({
    query: impactquery,
    tags: ["our-impact", "case-studies", "case-study"],
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
              <p className="whitespace-pre-line text-lg lg:text-4xl">
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
        if (module._type === "footer")
          return <Footer key={index} data={module} />;
      })}
      {/* <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-11 text-lg lg:mb-24 lg:text-4xl">{data.intro.text}</p>
      </section>
      <Image
        src={data.mainImage?.url || "/images/placeholder.jpg"}
        width={2000}
        height={2000}
        alt={data.mainImage?.alt || "Tujikuze Image"}
        className="mb-14 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
      <HighlightsSection data={data.highlightsSection} />
      <ResultSection data={data.resultsSection} />
      <ESGDeligenceSection data={data.esgSection} />
      <CaseStudiesSection data={data.casesSection} /> */}
      {/* <Footer /> */}
    </div>
  );
}
