import React from "react";

export default function DataList({ items }) {
  return (
    <ul className="mb-14 flex flex-col divide-y divide-dark-600 text-2xl lg:mb-48 lg:text-4xl">
      {items.map((item, index) => (
        <li key={index} className="grid grid-cols-[30fr_70fr] py-6">
          <span>{item.value}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
