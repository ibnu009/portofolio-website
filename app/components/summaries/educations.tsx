"use client";
import { Icon } from "@iconify/react";
import { Educations, Education } from "@/app/types/portos";
export default function educations({ data }: Educations) {
  return (
    <div className="space-y-5 mt-5 lg:col-span-1 col-span-2 transition-opacity w-full ">
      <div className="relative">
        <h1 className="text-6xl absolute bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-transparent font-archiabold tracking-tighter -top-9 -left-5">
          03
        </h1>
        <h1 className="text-4xl flex-col gap-5 font-archiabold tracking-tighter text-neutral-300">
          <span>
            <Icon
              icon="fluent-mdl2:education"
              className="text-col-primary-font"
            />
          </span>{" "}
          Education
        </h1>
      </div>

      <div id="education">
        <ol className="relative text-col-primary-font border-s border-neutral-600 dark:border-gray-700">
          {data.map((item: Education, i: number) => (
            <li
              className="mb-10 ms-4 group transition-all duration-300"
              key={`education-${i}`}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={`Image of ${item.name}`}
                  className="absolute -top-1 opacity-0 object-cover w-[500px] h-[300px] rounded-md group-hover:opacity-10 transition-all duration-1000 transform translate-y-12 group-hover:translate-y-0 -z-10"
                />
              </div>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-lg font-bold font-outfit">
                {item.time}
              </time>
              <h3 className="mb-4 text-2xl font-semibold font-archiabold tracking-tighter text-neutral-400">
                {item.name}
              </h3>
              <p className="text-lg font-normal font-outfit text-col-secondary-font">
                {item.major}
              </p>
              <p className="text-lg font-normal font-outfit text-col-secondary-font">
                Grade: <span className="font-bold">{item.gpa}/4.00 (GPA)</span>
              </p>
            </li>
          ))}
          <li className="mb-10 ms-4 group">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-lg font-semibold text-neutral-400">
              Ended - (Present) 🎓
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
}
