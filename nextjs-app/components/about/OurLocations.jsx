import imgLarge from "../../public/images/2.jpg";
import Image from "next/image";
import TabSection from "@/lib/hooks/TabSection";

export default function OurLocations() {
  return (
    <TabSection title="Our Locations in Kenya">
      <div className="mx-auto mb-11 grid max-w-[1720px] grid-cols-1 gap-5 px-4 lg:mb-24 lg:grid-cols-2 lg:gap-0">
        <p className="max-w-[648px] text-lg text-dark-600 lg:text-4xl">
          Our locations across Kenya highlight the diverse craftsmanship and
          cultural heritage of local artisan communities.
        </p>
        <div className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
          <p>
            Tujikuze collaborates with artisan groups in key regions across
            Kenya, each renowned for its unique craftsmanship. From beadwork in
            Eastern Kenya to weaving in the Rift Valley, we celebrate the
            distinct techniques and traditions that define these communities.
          </p>
          <p>
            Our presence fosters growth, sustainability, and connection in every
            region we work in.
          </p>
        </div>
      </div>
      <Image
        src={imgLarge}
        alt="man crafting"
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[920px]"
      />
    </TabSection>
  );
}
