import SectionHeading from "../SectionHeading";
import ListItem from "../ListItem";

function CaseStudiesSection({ data }) {
  return (
    <section className="mx-auto mb-14 max-w-[1720px] px-4 lg:mb-48">
      <SectionHeading
        title={data.sectionHeading.title}
        label={data.sectionHeading?.link?.label}
        href={data.sectionHeading?.link?.linkUrl}
      />
      <ul className="mt-8 flex flex-col divide-y divide-dark-600 lg:mt-24">
        {data.caseStudies.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default CaseStudiesSection;
