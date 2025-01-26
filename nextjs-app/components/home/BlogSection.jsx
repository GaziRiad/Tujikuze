import Image from "next/image";
import SectionHeading from "../SectionHeading";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import img1 from "../../public/images/visuals.png";
import img2 from "../../public/images/visuals2.png";

const ARTICLES = [
  {
    img: img1,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
  {
    img: img2,
    categories: ["Fashion", "Sustainability"],
    title: "Looming Legacies: The Art and Science of Handweaving",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship.",
  },
];

function BlogSection() {
  return (
    <section className="mx-auto max-w-[1720px] px-4">
      <SectionHeading title="What’s New" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
          offset: 10,
        }}
        className="mx-auto mb-28 mt-24 max-w-[1460px] lg:mb-48"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {ARTICLES.map((article, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] pl-2 sm:basis-[90%] md:basis-2/4 md:pl-4"
            >
              <Image
                src={article.img}
                alt="image"
                className="mb-3 h-[431px] w-full object-cover lg:h-[720px]"
              />
              <ul className="mb-3 flex items-center gap-3 font-secondary text-sm uppercase">
                {article.categories.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ul>
              <p className="mb-3 max-w-96 text-2xl">{article.title}</p>
              <p className="max-w-96 text-lg">{article.description}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default BlogSection;
