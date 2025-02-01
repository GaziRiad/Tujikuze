import Image from "next/image";

import TabSection from "@/lib/hooks/TabSection";

export default function EthicalFashion({ data }) {
  return (
    <TabSection title={data.heading}>
      <div className="mx-auto max-w-[1720px] px-4">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">{data.text}</p>

        <Image
          width={1200}
          height={1200}
          src={data.halfImage.url}
          alt={data.halfImage.alt}
          className="mb-14 ml-auto aspect-square w-full object-cover object-center lg:mb-48 lg:w-1/2"
        />
      </div>
      <Image
        width={1600}
        height={1600}
        src={data.largeImage.url}
        alt={data.largeImage.alt}
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
    </TabSection>
  );
}
