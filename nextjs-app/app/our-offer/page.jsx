import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

import imgLarge from "../../public/images/2.jpg";

export default function page() {
  return (
    <>
      <section className="mx-auto mb-8 mt-20 max-w-[1720px] px-4 lg:mb-48 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">
          Tujikuze began with a vision to connect Kenyan artisans with global
          markets while preserving traditional craftsmanship. Rooted in the
          meaning of “to grow together” in Kiswahili, our story is one of
          collaboration, sustainability, and empowerment. Partnering with
          visionary Kenyan organizations, we bring authentic, handcrafted
          products to the world.
        </p>
        <Image
          src={imgLarge}
          alt="man crafting"
          className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
        />
      </section>

      <Footer />
    </>
  );
}
