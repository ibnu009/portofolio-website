"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Achievements, Achievement } from "@/app/types/portos";
export default function achievement({ data }: Achievements) {
  return (
    <div className="space-y-5 mt-5  transition-opacity w-full ">
      <div className="relative">
        <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
          02
        </h1>
        <h1 className="text-4xl flex-col gap-5 font-archiabold tracking-tighter text-neutral-300">
          <span>
            <Icon
              icon="solar:cup-outline"
              className="text-col-primary-font"
            />
          </span>{" "}
          Achievements
        </h1>
      </div>

      <div>
        <ol className="relative text-col-primary-font border-s border-neutral-600 dark:border-gray-700">
          {data.map((item: Achievement, i: number) => (
            <li
              className="mb-10 ms-4 group transition-all duration-300"
              key={`achievement-${i}`}
            >
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-lg font-bold font-outfit">
                At {item.time}
              </time>
              <h3 className="mb-4 text-2xl font-semibold font-archiabold tracking-tighter text-neutral-400">
                {item.name}
              </h3>
              <p className="text-lg font-normal max-w-lg font-outfit text-col-secondary-font">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
