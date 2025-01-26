import SectionHeading from "../SectionHeading";

import material1 from "../../public/images/cotton.png";
import ListItem from "../ListItem";

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
    <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
      <SectionHeading title="Case Studies" href="/" />
      <ul className="mt-8 flex flex-col divide-y divide-[#1A1A1A]/20 lg:mt-24">
        {CASES.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default CaseStudiesSection;
