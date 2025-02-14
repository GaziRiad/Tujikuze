import SectionHeading from "./SectionHeading";
import ListItem from "./ListItem";

function CaseStudiesSection({ data }) {
  return (
    <section>
      {data?.sectionHeading && (
        <SectionHeading
          title={data.sectionHeading.title}
          label={data.sectionHeading?.link?.label}
          href={data.sectionHeading?.link?.linkUrl}
        />
      )}
      <ul className="mx-auto mb-14 mt-8 flex max-w-[1720px] flex-col divide-y divide-dark-600 px-4 lg:mb-24 lg:mt-24">
        {data.caseStudies.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default CaseStudiesSection;
