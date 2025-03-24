import Hero from "@/components/home/Hero";
import DoubleBlocksSection from "@/components/home/DoubleBlocksSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/client";
import { homequery } from "@/sanity/groq";
import { groq } from "next-sanity";
import InteractiveModule from "@/components/home/InteractiveModule";
import GridCarousel from "@/components/home/GridCarousel";
import MediaModule from "@/components/MediaModule";
import TextListModule from "@/components/TextListModule";
import SectionHeading from "@/components/SectionHeading";
import DataList from "@/components/DataList";

// Dynamic metadata
export async function generateMetadata() {
  const data = await sanityFetch({
    query: groq`*[_type == "home"][0]{
      seo {
        title,
        description
      }
    }`,
    tags: ["home"],
  });

  return {
    title: data?.seo?.title || "Tujikuze | Home",
    description: data?.seo?.description || "Tujikuze | Home",
  };
}

export const revalidate = 2592000; // 30 days in seconds

async function Page() {
  const data = await sanityFetch({
    query: homequery,
    tags: ["home", "ressources", "post", "case-studies", "case-study"],
  });

  if (!data) return null;

  return (
    <>
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
    </>
  );
}

export default Page;
