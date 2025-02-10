import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] lg:mb-48 lg:mt-56">
        <SectionHeading title="Contact Us" />
        <div className="mx-auto max-w-[1720px] px-4">
          <h2 className="mb-14 text-sm lg:mb-48 lg:text-5xl">
            Need help? We’re here for you. For customer service or general
            inquiries, please reach out using the email below.
          </h2>
        </div>

        <ContactForm />
      </section>
      <Image
        width={1600}
        height={1600}
        src={"/images/2.jpg"}
        // alt={data.mainImage.alt}
        className="h-[512px] w-full object-cover object-center lg:h-[620px] 2xl:h-[920px]"
      />
      <Footer noHeading={true} />
    </>
  );
}
