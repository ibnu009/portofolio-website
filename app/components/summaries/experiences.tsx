"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Experiences, Experience } from "@/app/types/portos";
import ReadMoreText from "../ReadMore";

export default function experiences({ data }: Experiences) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="experience"
      className="space-y-5 mt-5 w-full col-span-2"
    >
      {/* Head */}
      <div className="relative">
        <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
          04
        </h1>
        <h1 className="text-4xl font-archiabold tracking-tighter text-neutral-300">
          <Icon
            icon="fluent-mdl2:work"
            className="text-col-primary-font"
          />
          Experience
        </h1>
      </div>
      {/* Body */}
      <div
        className={`${
          data && data.length > 4
            ? showMore
              ? "h-auto"
              : "h-[530px] overflow-hidden"
            : "h-auto"
        } w-full  relative`}
      >
        <div className="p-2">
          <ol className="relative pl-2 text-col-primary-font border-s border-neutral-600 dark:border-gray-700">
            {data.map((item: Experience, i: number) => (
              <li
                className="mb-10 ms-4"
                key={i}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white z-20 dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-2 text-lg font-bold font-outfit">
                  {item.time}
                </time>
                <h3 className="mb-2 text-2xl font-semibold font-archiabold tracking-tighter text-neutral-400">
                  {item.name}
                </h3>
                <h3 className="mb-4 text-lg font-semibold text-col-secondary-font">
                  {item.position} -{" "}
                  <span className="lowercase"> ({item.type})</span>
                </h3>
                <ReadMoreText text={item.description} />
              </li>
            ))}
          </ol>
        </div>
        {/* button showmore or show less when the data length is more than 4 */}
        {data && data.length > 4 && (
          <div
            className={`w-full flex pb-10 pl-0 left-0 justify-center bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent sticky ${
              showMore ? "bottom-0" : "-bottom-2"
            } -ml-5 z-30`}
          >
            <button
              className="bg-neutral-600 px-5 py-2 rounded-md font-outfit"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More..."}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
