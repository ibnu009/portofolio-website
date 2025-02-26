"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { Tags } from "@/app/types/portos";
import { config } from "@/app/utils/config";

export default function card({
  handler,
  thumbnail,
  title,
  category,
  tags,
  order,
  activeTags,
}: {
  handler: () => void;
  thumbnail: string[] | string;
  title: string;
  category?: string;
  tags?: string[];
  key: string;
  order: number;
  activeTags?: string[];
}) {
  return (
    <div className="group relative  cursor-pointer active:scale-95 transition-all duration-300">
      <div className="relative overflow-hidden ">
        <img
          className="w-full transform group-hover:scale-110 transition-all duration-500 "
          src={"./image/project/" + thumbnail}
        />
        <div
          onClick={handler}
          className="group-hover:opacity-100 opacity-0 transition-all duration-300 p-5 bg-neutral-800 bg-opacity-90 absolute inset-0 flex items-center justify-center"
        >
          <span className="flex gap-4 font-outfit transform relative duration-500 translate-y-8 group-hover:translate-y-0  transition-all">
            <Icon
              icon="akar-icons:link-out"
              className="z-30 text-neutral-400 text-2xl  top-2 right-3"
            />
            <h2 className="absolute  font-archiabold text-7xl -top-7 left-5 text-white/10 -z-20">
              {order + 1 < 10 ? `0${order + 1}` : order + 1}
            </h2>
            <span className="font-semibold">View Details</span>
          </span>
        </div>
      </div>

      <div className=" bg-neutral-900  w-full">
        <div className="p-3">
          <h2 className="font-archiabold tracking-tighter">{title}</h2>
        </div>
        <div className="flex pb-3 pl-3 gap-2 font-outfit ">
          {/* <span className="text-neutral-300">{category}</span> */}
          {tags && tags.length > 0 ? (
            tags.map((item: string, i: number) => (
              <span
                key={i}
                className="text-center px-3 py-1  bg-neutral-800 rounded-md"
              >
                {item}
              </span>
            ))
          ) : (
            <span className="text-neutral-300">No tags</span>
          )}
        </div>
      </div>
    </div>
  );
}
