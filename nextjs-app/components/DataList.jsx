import React from "react";

export default function DataList({ data }) {
  return (
    <ul className="mx-auto mb-14 flex max-w-[1720px] flex-col divide-y divide-dark-600 px-4 text-2xl lg:mb-48 lg:text-3xl">
      {data?.rows?.map((item, index) => (
        <li key={index} className="grid grid-cols-[30fr_70fr] py-6">
          <span>{item.value}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
