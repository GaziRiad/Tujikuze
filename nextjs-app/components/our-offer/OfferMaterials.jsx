import TabSection from "@/lib/hooks/TabSection";
import React from "react";

export default function OfferMaterials() {
  return (
    <TabSection title="Materials & Craftsmanship">
      <div className="mx-auto mb-11 grid max-w-[1720px] grid-cols-1 gap-5 px-4 lg:mb-24 lg:grid-cols-2 lg:gap-0">
        <p className="max-w-[648px] text-lg text-dark-600 lg:text-4xl">
          Our craftsmanship combines traditional techniques with modern design
          to create unique, high-quality products.
        </p>
        <div className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
          <p>
            From intricate beadwork to handwoven textiles, our artisans bring
            generations of skill and cultural heritage to every creation. By
            investing in training and sustainable practices, we ensure their
            talents continue to flourish and gain recognition worldwide.
          </p>
          <p>
            From intricate beadwork to handwoven textiles, our artisans bring
            generations of skill and cultural heritage to every creation. By
            investing in training and sustainable practices, we ensure their
            talents continue to flourish and gain recognition worldwide.
          </p>
        </div>
      </div>
    </TabSection>
  );
}
