import Hero from "@/components/home/Hero";
import img1 from "../public/images/visuals.png";
import DoubleBlocksSection from "@/components/home/DoubleBlocksSection";
import Image from "next/image";
import MaterialsSection from "@/components/home/MaterialsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import BlogSection from "@/components/home/BlogSection";
import Footer from "@/components/Footer";
import { sanityFetch } from "@/sanity/client";
import { homequery } from "@/sanity/groq";

async function Page() {
  const data = await sanityFetch({
    query: homequery,
    tags: ["home"],
  });

  if (!data) return null;

  return (
    <>
      <Hero data={data} />
      {data.blockSections.map((section, index) => (
        <DoubleBlocksSection key={index} data={section} />
      ))}

      <DoubleBlocksSection image={img1} title="OUR IMPACT" />

      <Image
        width={1600}
        height={1600}
        src={data.mainImage.url}
        alt={data.mainImage.alt}
        className="mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
      <MaterialsSection data={data.materialsAndCraftsmanshipSection} />
      <CaseStudiesSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default Page;
