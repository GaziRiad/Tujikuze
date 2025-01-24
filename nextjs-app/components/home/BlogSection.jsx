import Image from "next/image";
import SectionHeading from "../SectionHeading";

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
    <section className="mx-auto mb-48 max-w-[1720px]">
      <SectionHeading title="What’s New" />
      <div className="mx-auto mb-48 mt-24 flex max-w-[1460px]">
        <ul className="flex items-start justify-center gap-3">
          {ARTICLES.map((article, index) => (
            <li key={index}>
              <Image
                src={article.img}
                alt="image"
                className="mb-3 h-[720px] w-[701px] object-cover"
              />
              <ul className="mb-3 flex items-center gap-3 font-secondary text-sm uppercase">
                {article.categories.map((cat, i) => (
                  <li key={i}>{cat}</li>
                ))}
              </ul>
              <p className="mb-3 max-w-96 text-2xl">{article.title}</p>
              <p className="max-w-96 text-lg">{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BlogSection;
