"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Projects, Tags } from "@/app/types/portos";
import Card from "@/app/components/project/card";
import { useRouter } from "next/navigation";
import fetch from "@/app/utils/axios";

export default function Feature() {
  const [projects, setProjects] = useState<Projects[]>([]);

  const router = useRouter();

  const fetchAll = async () => {
    try {
      const response = await fetch.get("project.json");
      setProjects(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const navigateToId = (slug: string) => {
    router.replace(`/project/${slug}`);
  };

  useEffect(() => {
    fetchAll();
  });

  return (
    <div className="space-y-8 pb-16">
      <h2 className="text-4xl font-archiabold tracking-tighter">
        Featured Projects
      </h2>
      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 justify-center grid-cols-1">
        {projects && projects.length > 0 ? (
          projects.slice(0, 4).map((item: Projects, i: number) => (
            <Card
              order={i}
              key={`index-porject-${i}`}
              handler={() => navigateToId(item.slug)}
              thumbnail={item.thumbnail[0]}
              tags={item.tag}
              title={item.title}
            />
          ))
        ) : (
          <div className="p-4 border-2 border-neutral-700 border-dashed font-outfit">
            <h2>No projects to show.</h2>
          </div>
        )}
      </div>
      {projects && projects.length > 4 && (
        <div className="flex justify-center pt-8">
          <Link
            href="/project"
            className="px-5 py-3 bg-neutral-800 font-outfit hover:bg-neutral-700 text-neutral-300 rounded-md font-bold"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      )}
    </div>
  );
}
