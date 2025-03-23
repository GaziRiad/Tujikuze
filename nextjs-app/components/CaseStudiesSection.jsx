import ListItem from "./ListItem";

function CaseStudiesSection({ data }) {
  return (
    <section>
      <ul className="mx-auto mb-14 flex max-w-[1720px] flex-col justify-start divide-y divide-dark-600 px-4 lg:mb-24">
        {data?.caseStudies?.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            index={index}
            totalItems={data.caseStudies.length}
          />
        ))}
      </ul>
    </section>
  );
}

export default CaseStudiesSection;
