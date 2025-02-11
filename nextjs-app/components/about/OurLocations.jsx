import imgLarge from "../../public/images/2.jpg";
import Image from "next/image";
import TabSection from "@/lib/hooks/TabSection";

export default function OurLocations({ data }) {
  return (
    <TabSection title={data.heading}>
      <div className="mx-auto mb-11 grid max-w-[1720px] grid-cols-1 gap-5 px-4 lg:mb-24 lg:grid-cols-2 lg:gap-0">
        <p className="max-w-[648px] text-lg text-dark-600 lg:text-4xl">
          {data.mainText}
        </p>
        <div className="grid grid-cols-1 items-start text-lg text-dark-400 lg:grid-cols-2 lg:gap-12">
          {data.textContent.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
      <Image
        width={1600}
        height={1600}
        src={data?.locationImage?.url || "/images/placeholder.jpg"}
        alt={data?.locationImage?.alt || "Tujikuze Image"}
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
    </TabSection>
  );
}
