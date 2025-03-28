"use client";

import Link from "next/link";

function SectionHeading({ title, onClick, state, type = "link", data }) {
  if (type === "tab")
    return (
      <div className="mx-auto mb-3 flex max-w-[1720px] flex-col px-4">
        <div className="flex items-center justify-between border-b border-dark-600 pb-2 lg:pb-3">
          <p className="text-sm lg:text-[22px]">{title}</p>
          <p
            className="cursor-pointer font-secondary text-xs lg:text-sm"
            onClick={() => onClick(!state)}
          >
            {state ? "VIEW LESS" : "VIEW ALL"}
          </p>
        </div>
      </div>
    );

  return (
    <div className="juss mx-auto mb-8 flex max-w-[1720px] flex-col gap-5 px-4 lg:mb-24">
      <div className="flex items-center justify-between border-b border-dark-600 pb-2 lg:pb-3">
        <p className="text-sm lg:text-lg">{data?.title}</p>
        {data?.sectionLink?.label && data?.sectionLink?.url && (
          <Link
            href={data?.sectionLink?.url}
            className="font-secondary text-xs lg:text-sm"
          >
            {data?.sectionLink?.label}
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-16">
        {data?.description && (
          <h2
            className={`mb-12 text-sm lg:mb-20 lg:max-w-7xl lg:text-3xl ${data?.items ? "" : "col-span-2"}`}
          >
            {data.description}
          </h2>
        )}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
          {data?.items?.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <p className="text-sm lg:text-lg">{item?.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SectionHeading;
