import React from "react";

export default function TextListModule({ data }) {
  return (
    <ul className="mx-auto mb-14 flex max-w-[1720px] flex-col justify-end gap-[54px] px-4 lg:mb-48 lg:flex-row">
      {data?.items?.map((item, index) => (
        <li key={index} className="">
          <p className="mb-5 text-2xl text-dark-600 lg:mb-6">{item?.name}</p>
          <p className="whitespace-pre-line text-lg">{item?.description}</p>
        </li>
      ))}
    </ul>
  );
}
