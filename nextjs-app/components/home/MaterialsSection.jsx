import Image from "next/image";
import Link from "next/link";

import img1 from "../../public/images/visuals.png";

import material1 from "../../public/images/cotton.png";
import material2 from "../../public/images/fibers.png";
import material3 from "../../public/images/metal.png";
import material4 from "../../public/images/textiles.png";

const craftsmanships = [
  { title: "Beading", text: "Showcases intricate designs and rich heritage." },
  { title: "Weaving", text: "Showcases intricate designs and rich heritage." },
  {
    title: "Screenprinting",
    text: "Showcases intricate designs and rich heritage.",
  },
  { title: "Macame", text: "Showcases intricate designs and rich heritage." },
  { title: "Beading", text: "Showcases intricate designs and rich heritage." },
  { title: "Weaving", text: "Showcases intricate designs and rich heritage." },
  {
    title: "Screenprinting",
    text: "Showcases intricate designs and rich heritage.",
  },
];

const materials = [
  {
    title: "Natural Fibers",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
    img: material2,
  },
  {
    title: "Cotton",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
    img: material1,
  },
  {
    title: "Upcycled Textiles",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
    img: material3,
  },
  {
    title: "Metal",
    description:
      "Unraveling the connection between tradition, design, and craftsmanship. ",
    img: material4,
  },
];

function MaterialsSection() {
  return (
    <section className="mx-auto mb-48 max-w-[1720px]">
      <div className="mb-3 flex items-center justify-between border-b-2 border-[#1A1A1A]/20 pb-5">
        <p className="text-2xl">Materials & Craftsmanships</p>
        <Link href="/" className="font-secondary text-sm">
          LEARN MORE
        </Link>
      </div>
      <h2 className="mb-28 max-w-[1320px] text-4xl">
        We use sustainable, locally sourced materials to create high-quality
        pieces that honor Kenya’s craftsmanship and cultural heritage.
      </h2>
      <div className="mb-48 flex items-start justify-between">
        <ul className="flex flex-col gap-[6px]">
          {craftsmanships.map((item, index) => (
            <li className="flex items-center justify-between gap-28 text-[#BABABA] transition-all hover:text-[#1A1A1A]">
              <p className="font-secondary text-sm">{item.title}</p>
              <p className="text-lg">{item.text}</p>
            </li>
          ))}
        </ul>
        <Image src={img1} alt="image" className="h-[620px] object-cover" />
      </div>
      <ul className="grid grid-cols-4 gap-x-3">
        {materials.map((item, index) => (
          <li key={index} className="text-[#1A1A1A]">
            <Image
              src={item.img}
              alt="image"
              className="mb-7 h-[600px] object-cover"
            />
            <p className="font-secondary mb-3 text-2xl">{item.title}</p>
            <p className="text-lg">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MaterialsSection;
