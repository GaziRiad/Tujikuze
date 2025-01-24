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

function Page() {
  return (
    <div className="font-main">
      <Hero />
      <section className="mx-auto mb-28 flex max-w-[1720px] px-4 py-5 lg:mb-48">
        <p className="text-lg lg:text-4xl">
          “Tujikuze” means “to grow together” in Kiswahili, reflecting our
          commitment to fostering collaboration and growth among artisanal
          producers. Tujikuze is a partnership of visionary and like-minded
          Kenyan companies: Africa Collect Textiles, Savio Youth Enterprise,
          Virtuous and Satubo. We are producing fashion with some of the best
          artisan groups in Kenya.
          <br />
          <br />
          Together, with the support of the Italian Agency for Development
          Cooperation (AICS) and ITC’s Ethical Fashion Initiative, we aim to
          create a fairer, greener, and better landscape for artisans in Kenya.
        </p>
      </section>

      <DoubleBlocksSection image={img2} title="OUR WORK" />
      <DoubleBlocksSection image={img1} title="OUR IMPACT" />

      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-28 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[920px]"
      />
      <MaterialsSection />
      <CaseStudiesSection />
      {/* <BlogSection />
      <Footer /> */}
    </div>
  );
}

export default Page;
