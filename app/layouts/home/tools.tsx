"use client";
import React, { useEffect, useState } from "react";
import fetch from "@/app/utils/axios";
import { Tool } from "@/app/types/portos";
import { config } from "@/app/utils/config";

export default function tools() {
  const [tools, setTools] = useState<Tool[]>([]);

  const fetchData = async () => {
    try {
      const res = await fetch.get("tools.json");
      setTools(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-8 pb-16 text-center">
      <h2 className="text-4xl font-archiabold tracking-tighter">
        Tools and Skills
      </h2>
      <div className="lg:flex grid md:grid-cols-3 grid-cols-2 gap-10 p-5 items-center justify-center">
        {tools.map((tool: Tool, i: number) => (
          <div
            className="space-y-3"
            key={i}
          >
            <img
              src={"./image/tools/" + tool.icon}
              alt={tool.name}
              className="max-w-[70px] max-h-[70px] mx-auto"
            />
            <p className="font-outfit text-lg lg:hidden block">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
