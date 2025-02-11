import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

import TabSection from "@/lib/hooks/TabSection";

export default function OurTeam({ data }) {
  return (
    <TabSection title="Our Team">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          offset: 10,
        }}
        className="mx-auto mb-14 mt-8 w-full max-w-[1720px] px-4 lg:mb-48 lg:mt-24"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] pl-2 text-dark-600 sm:basis-[90%] md:basis-2/4 md:pl-4 lg:basis-1/3"
            >
              <div className="p-1">
                <Image
                  width={1200}
                  height={1200}
                  src={item?.memberImage?.url || "/placeholder.svg"}
                  alt={item?.memberImage?.alt || "Tujikuze Image"}
                  className="mb-4 h-[300px] w-full object-cover lg:h-[520px] 2xl:h-[869px]"
                />
                <p className="mb-2 font-secondary text-xl sm:text-2xl">
                  {item.fullname}
                </p>
                <p className="max-w-80 text-sm sm:text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </TabSection>
  );
}
