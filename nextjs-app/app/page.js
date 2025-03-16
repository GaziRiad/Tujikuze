import Hero from "@/components/home/Hero";
import DoubleBlocksSection from "@/components/home/DoubleBlocksSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/client";
import { homequery } from "@/sanity/groq";
import { groq } from "next-sanity";
import InteractiveModule from "@/components/home/InteractiveModule";
import GridCarousel from "@/components/home/gridCarousel";
import LargeImageModule from "@/components/LargeImageModule";

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

  // console.log(data);

  return (
    <>
      {/* <Hero data={data} /> */}
      {data?.modules?.map((module, index) => {
        if (module._type === "hero") return <Hero key={index} data={module} />;
        if (module._type === "ctaModule")
          return <DoubleBlocksSection key={index} data={module} />;
        if (module._type === "interactiveCardList")
          return <InteractiveModule key={index} data={module} />;
        if (module._type === "cardList")
          return <GridCarousel key={index} data={module} />;
        if (module._type === "largeImage")
          return <LargeImageModule key={index} data={module} />;
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
        if (module._type === "blogModule")
          return <BlogSection key={index} data={module} />;
      })}

      {/* {data.blockSections.map((section, index) => (
        <DoubleBlocksSection key={index} data={section} />
      ))}
      <Image
        width={1600}
        height={1600}
        src={data.mainImage.url || "/images/placeholder.jpg"}
        alt={data.mainImage.alt || "Tujikuze image"}
        className="mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
      <MaterialsSection data={data.materialsAndCraftsmanshipSection} /> */}
      {/* <CaseStudiesSection data={data.casesSection} /> */}
      {/* <BlogSection data={data.blogSection} /> */}
      <Footer />
    </>
  );
}

export default Page;
