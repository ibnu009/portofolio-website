"use client";
import React, { useState, useEffect } from "react";
import NumberTicker from "@/components/ui/number-ticker";
import fetch from "@/app/utils/axios";
// import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";

export default function about() {
  const desc = `
Highly motivated Mobile Developer with 4+ years of experience building high-performance Android and iOS apps using Flutter, Kotlin, and Java. Skilled in leading and mentoring teams, ensuring scalable and maintainable codebases through clean architecture and best coding practices.
Beyond mobile development, I have hands-on experience with NestJS and Golang for backend development, python for AI engineering and have successfully integrated machine learning models (TensorFlow & Keras) to enhance functionality in applications. Passionate about performance optimization, problem-solving, and driving innovation, I thrive in dynamic environments, tackling complex challenges, and pushing technological boundaries. Driven by curiosity and innovation, I am always eager to take on new challenges and contribute to impactful projects.🚀

`;
  return (
    <React.Fragment>
      <div className="relative flex flex-col gap-20 pb-8 ">
        <div className="font-outfit relative z-10 text-neutral-300 rounded-md w-full  space-y-5">
          <div className="relative">
            <h1 className="text-4xl font-archiabold tracking-tighter z-10">
              About Myself
            </h1>
          </div>
          <ReactMarkdown className=" text-lg text-neutral-350 text-justify">
            {desc ?? "No about."}
          </ReactMarkdown>
          <div className="flex flex-col md:flex-row justify-start gap-5">
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold">
                <NumberTicker
                  value={19}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-green-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-neutral-350 ">
                Client Projects
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold">
                <NumberTicker
                  value={8}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-green-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-neutral-350">
                Achivements
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-archiabold ">
                <NumberTicker
                  value={4}
                  className="text-neutral-300 tracking-tighter"
                />
                <span className="text-green-500">+</span>
              </h2>
              <p className="font-outfit text-lg text-neutral-350">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
