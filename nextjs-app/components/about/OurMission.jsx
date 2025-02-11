"use client";

import Image from "next/image";
import React from "react";

import DataList from "../DataList";
import TabSection from "@/lib/hooks/TabSection";

export default function OurMission({ data }) {
  return (
    <TabSection title={data.heading}>
      <div className="mx-auto max-w-[1720px] px-4">
        <p className="mb-8 text-lg lg:mb-24 lg:text-4xl">{data.text}</p>
        <DataList items={data.keyStatsTable} />
      </div>
      <Image
        width={1600}
        height={1600}
        src={data?.missionImage?.url || "/images/placeholder.jpg"}
        alt={data?.missionImage?.alt || "Tujikuze Image"}
        className="mb-9 h-[512px] w-full object-cover object-center lg:mb-48 lg:h-[620px] 2xl:h-[920px]"
      />
    </TabSection>
  );
}
