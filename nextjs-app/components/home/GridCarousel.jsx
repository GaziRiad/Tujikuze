import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function GridCarousel({ data }) {
  // Default to 3 columns if not specified
  const columns = data?.columns || 3;

  const columnClasses = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3 xl:grid-cols-3",
    4: "lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <ul
      className={`mx-auto mb-28 grid w-full max-w-[1720px] gap-x-3 gap-y-24 px-4 lg:mb-48 ${columnClasses[columns]} grid-cols-1 md:grid-cols-2`}
    >
      {data?.items?.map((item, index) => (
        <li key={index} className={``}>
          <div>
            <Image
              width={1200}
              height={1200}
              src={item?.image?.url || "/placeholder.svg"}
              alt={item?.image?.alt}
              className="mb-4 h-[430px] w-full object-cover lg:h-[480px] 2xl:h-[600px]"
            />
            <p className="mb-2 text-xl sm:text-[22px]">{item?.name}</p>
            <p className="max-w-80 text-sm sm:text-base md:text-lg">
              {item?.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
    // <Carousel
    //   opts={{
    //     align: "start",
    //     loop: false,
    //     offset: 10,
    //   }}
    //   className="mx-auto mb-28 w-full max-w-[1720px] px-4 lg:mb-48"
    // >
    //   <CarouselContent className="-ml-2 md:-ml-4">
    //     {data?.items?.map((item, index) => (
    //       <CarouselItem
    //         key={index}
    //         className={`basis-[85%] pl-2 sm:basis-[90%] md:basis-2/4 md:pl-4 lg:basis-1/3 ${columnClasses[columns] || "lg:basis-1/4"}`}
    //       >
    //         <div className="p-1">
    //           <Image
    //             width={1200}
    //             height={1200}
    //             src={item?.image?.url || "/placeholder.svg"}
    //             alt={item?.image?.alt}
    //             className="mb-4 h-[430px] w-full object-cover lg:h-[480px] 2xl:h-[600px]"
    //           />
    //           <p className="mb-2 text-xl sm:text-[22px]">{item?.name}</p>
    //           <p className="max-w-80 text-sm sm:text-base md:text-lg">
    //             {item?.description}
    //           </p>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    // </Carousel>
  );
}
