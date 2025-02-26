"use client";
import React, { useState, useEffect } from "react";
import fetch from "@/app/utils/axios";
import Card from "@/app/components/project/card";
import { Projects } from "@/app/types/portos";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  const [projects, setProjects] = useState<Projects[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const navigateToId = (slug: string) => {
    router.replace(`/project/${slug}`);
  };

  const fetchAll = async () => {
    try {
      const response = await fetch.get<Projects[]>("project.json");

      const uniqueCategories = [
        "all",
        ...Array.from(
          new Set(
            response.data.flatMap((item) =>
              item.category ? [item.category] : []
            )
          )
        ),
      ];
      setCategories(uniqueCategories);
      setProjects(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20 pb-40 space-y-8 container mx-auto">
      <div className="space-y-5">
        <h2 className="text-4xl font-archiabold tracking-tighter">
          My Projects
        </h2>
        <p className="font-outfit text-lg text-col-secondary-font max-w-6xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          repellat suscipit est expedita.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-5 font-outfit">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md capitalize ${
              selectedCategory === category
                ? "bg-neutral-700 "
                : "bg-neutral-800"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 justify-center grid-cols-1">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item, i) => (
            <Card
              order={i}
              key={`${item.slug}-${i}`}
              handler={() => navigateToId(item.slug)}
              thumbnail={item.thumbnail[0]}
              tags={item.tag}
              title={item.title}
            />
          ))
        ) : (
          <div className="p-4 border-2 border-neutral-700 border-dashed font-outfit">
            <h2>No project to show.</h2>
          </div>
        )}
      </div>
    </div>
  );
}
