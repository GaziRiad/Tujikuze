import OurLocations from "@/components/about/OurLocations";
import OurMission from "@/components/about/OurMission";
import React from "react";

export default function page() {
  return (
    <>
      <section className="mx-auto mt-20 max-w-[1720px] px-4 lg:mt-56">
        <p className="mb-8 text-lg lg:mb-48 lg:text-4xl">
          Tujikuze began with a vision to connect Kenyan artisans with global
          markets while preserving traditional craftsmanship. Rooted in the
          meaning of “to grow together” in Kiswahili, our story is one of
          collaboration, sustainability, and empowerment. Partnering with
          visionary Kenyan organizations, we bring authentic, handcrafted
          products to the world.
        </p>
      </section>
      <OurMission />
      <OurLocations />
    </>
  );
}
