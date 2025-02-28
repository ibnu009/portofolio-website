"use client";
import React, { useEffect, useState } from "react";
import fetch from "@/app/utils/axios";
import {Tool, ToolCategory} from "@/app/types/portos";
import { config } from "@/app/utils/config";

export default function tools() {
  const [tools, setTools] = useState<ToolCategory[]>([]);

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
      <div className="space-y-8 pb-12 text-center">
        <h2 className="text-4xl font-archiabold tracking-tight">Tools & Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
          {tools.flatMap((category) => category.skills).map((skill, i) => (
              <div
                  key={i}
                  className="relative flex flex-col items-center group transition-transform hover:scale-[1.02]"
              >
                <img
                    src={`/image/tools/${skill.icon}`}
                    alt={skill.name}
                    className="h-12 md:h-14 opacity-90"
                />
                {/* Hover Tooltip */}
                <p className="absolute bottom-0 translate-y-4 opacity-0 text-xs bg-gray-700/80 text-white px-2 py-1 rounded-md transition-all duration-200 group-hover:opacity-90 group-hover:translate-y-0">
                  {skill.name}
                </p>
              </div>
          ))}
        </div>
      </div>

  );
}
