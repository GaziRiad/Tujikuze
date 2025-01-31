import Hero from "@/components/home/Hero";
import img1 from "../public/images/visuals.png";
import img2 from "../public/images/visuals2.png";
import imgLarge from "../public/images/2.jpg";
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

      <DoubleBlocksSection image={img2} title="OUR WORK" />
      <DoubleBlocksSection image={img1} title="OUR IMPACT" />

      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
      <MaterialsSection />
      <CaseStudiesSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default Page;
