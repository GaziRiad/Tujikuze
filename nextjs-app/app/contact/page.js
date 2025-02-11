import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import { sanityFetch } from "@/sanity/client";
import { contactquery } from "@/sanity/groq";
import Image from "next/image";
import React from "react";

export default async function page() {
  const data = await sanityFetch({
    query: contactquery,
    tags: ["contact-us"],
  });

  if (!data) return null;

  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] lg:mb-48 lg:mt-56">
        <SectionHeading
          title={data.sectionHeading?.title}
          label={data.sectionHeading?.link?.label}
          href={data.sectionHeading?.link?.linkUrl}
        />
        <div className="mx-auto max-w-[1720px] px-4">
          <h2 className="mb-14 text-sm lg:mb-48 lg:text-5xl">
            {data.subHeading}
          </h2>
        </div>

        <ContactForm
          data={{ ...data.contactForm, label: data.contactForm?.buttonLabel }}
        />
      </section>
      <Image
        width={1600}
        height={1600}
        src={data.image?.asset?.url || "/images/placeholder.jpg"}
        alt={data.image?.alt || "Tujikuze Image"}
        className="h-[512px] w-full object-cover object-center lg:h-[620px] 2xl:h-[920px]"
      />
      <Footer noHeading={true} />
    </>
  );
}
