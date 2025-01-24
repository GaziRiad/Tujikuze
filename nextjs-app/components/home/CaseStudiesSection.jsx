import SectionHeading from "../SectionHeading";

import material1 from "../../public/images/cotton.png";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const CASES = [
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
  {
    title: "THE CONAD ORDER",
    description: "Crafting Products. Empowering Artisans.",
    meta: "2024, Conad Order",
    img: material1,
  },
];

function CaseStudiesSection() {
  return (
    <section className="mx-auto mb-48 max-w-[1720px]">
      <SectionHeading title="Case Studies" />
      <ul className="mt-24 flex flex-col divide-y divide-[#1A1A1A]/20">
        {CASES.map((item, index) => (
          <li
            key={index}
            className="grid grid-cols-[25fr_75fr] items-start justify-between pb-7 pt-7"
          >
            <Image
              src={item.img}
              alt={item.title}
              className="h-[300px] w-[225px] object-cover"
            />
            <div className="flex items-start justify-between">
              <div className="flex max-w-[580px] flex-col text-4xl">
                <p>{item.title}</p>
                <p className="mb-7">{item.description}</p>
                <div className="group">
                  <Link
                    href="/"
                    className="font-secondary mb-5 flex w-fit items-center gap-1 text-sm text-[#1A1A1A] transition-all hover:text-[#726f66]"
                  >
                    <span>LEARN MORE</span>
                    <GoArrowRight />
                  </Link>
                  <p className="max-w-md text-lg text-[#726F66] opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
                    Our case studies illustrate the transformative impact of
                    bespoke collaborations on local artisans.
                  </p>
                </div>
              </div>
              <p className="font-secondary text-sm text-[#1A1A1A]">
                {item.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CaseStudiesSection;
