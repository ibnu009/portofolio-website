"use client";
import React, { useEffect, useMemo, useState } from "react";
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

  const tabs = useMemo(
    () => [
      { key: "All", title: "All" },
      { key: "Mobile Development", title: "Mobile" },
      { key: "Frontend Development", title: "Web" },
      { key: "Backend Development", title: "Backend" },
      { key: "AI Development", title: "AI" },
      { key: "Tools", title: "Tools" },
    ],
    []
  );

  const [active, setActive] = useState<string>(tabs[0].key);

  const activeGroup = useMemo(
    () => tools.find((c) => c.category === active),
    [tools, active]
  );

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-4xl font-archiabold tracking-tight">Tools & Skills</h2>

      <div className="flex flex-wrap gap-2 justify-start font-outfit rounded-md border border-neutral-800 bg-neutral-800/60 p-1 max-w-[400px]">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`px-3 py-2 text-sm rounded border border-transparent ${
              active === t.key
                ? "bg-neutral-700 text-white"
                : "bg-transparent hover:bg-neutral-700/60 text-neutral-200"
            }`}
            onClick={() => setActive(t.key)}
          >
            {t.title}
          </button>
        ))}
      </div>

      {active === "All" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-1">
          {tools.flatMap((g) => g.skills || []).map((skill, i) => (
            <div
              key={`all-${i}`}
              className="relative flex flex-col items-center group transition-transform hover:scale-[1.02]"
            >
              <img
                src={`/image/tools/${skill.icon}`}
                alt={skill.name}
                className="h-12 md:h-14 opacity-90"
              />
              <p className="absolute bottom-0 translate-y-4 opacity-0 text-xs bg-gray-700/80 text-white px-2 py-1 rounded-md transition-all duration-200 group-hover:opacity-90 group-hover:translate-y-0">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      ) : activeGroup && activeGroup.skills && activeGroup.skills.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-1">
          {activeGroup.skills.map((skill, i) => (
            <div
              key={`${active}-${i}`}
              className="relative flex flex-col items-center group transition-transform hover:scale-[1.02]"
            >
              <img
                src={`/image/tools/${skill.icon}`}
                alt={skill.name}
                className="h-12 md:h-14 opacity-90"
              />
              <p className="absolute bottom-0 translate-y-4 opacity-0 text-xs bg-gray-700/80 text-white px-2 py-1 rounded-md transition-all duration-200 group-hover:opacity-90 group-hover:translate-y-0">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 border-2 border-neutral-700 border-dashed font-outfit text-center">
          No skills found.
        </div>
      )}
    </div>
  );
}
