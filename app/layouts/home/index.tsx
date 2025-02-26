"use client";

import React from "react";
import Link from "next/link";
import { Homes } from "../../types/portos";
import WordRotate from "@/components/ui/word-rotate";
import { Icon } from "@iconify-icon/react";
import Tilt from "react-parallax-tilt";

const Home: React.FC<Homes> = ({
  greeting,
  name,
  passion,
  description,
  image,
  sm,
}) => {
  return (
    <div className="flex md:flex-row flex-col lg:h-[80vh] pb-32 lg:mt-0 mt-8 lg:gap-52 gap-20 items-center justify-center">
      <div className="space-y-5 md:order-1 order-2">
        {/*<div className="flex gap-2 items-center">*/}
        {/*  <Icon*/}
        {/*    icon="mdi:leaf"*/}
        {/*    className="lg:text-lg text-sm text-green-500"*/}
        {/*  />*/}
        {/*  <p className="lg:text-lg text-sm text-neutral-300 font-outfit">*/}
        {/*    Available for freelance work*/}
        {/*  </p>*/}
        {/*</div>*/}
        <div className="font-archiabold text-neutral-300">
          <h1 className="lg:text-6xl text-4xl tracking-tighter">{greeting}</h1>
          <h1 className="lg:text-6xl text-4xl tracking-tighter">
            {name ?? "Your Name"},
          </h1>
          <h1 className="lg:text-6xl text-4xl tracking-tighter flex gap-2 items-center">
            a{" "}
            <WordRotate
              words={passion}
              duration={3500}
            />
          </h1>
        </div>
        <div className="sub-heading">
          <p className="lg:text-2xl text-lg font-outfit max-w-2xl text-col-secondary-font">
            {description}
          </p>
        </div>
        <div className="button-wrapping space-x-5 font-outfit">
          <ul className="flex gap-5 text-2xl text-col-primary-font">
            {sm.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  target="_blank"
                >
                  <Icon icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:order-2 order-1">
        <Tilt
          tiltReverse={true}
          scale={1}
          glarePosition="all"
          gyroscope={true}
          glareEnable={true}
          className="relative group"
        >
          <div className="transform-perserve-3d relative before:absolute before:md:w-[300px] before:w-[300px] before:h-[400px] before:lg:h-[500px] before:lg:w-[400px]  before:-top-6 before:-left-8 before:bg-transparent before:border-2 before:transform before:translate before:border-green-500  bg-gradient-to-b from-green-500 via-green-600 to-transparent rounded-md hover:shadow-sm cursor-pointer active:scale-95 transition-all">
            <div className="absolute -right-20 -bottom-20 z-40">
              <div className="relative">
                <img
                  src="./image/profile/DCA Logo.png"
                  alt=""
                  className=" group-hover:scale-110 transition-all contrast-100 brightness-100 z-40  shadow max-w-[200px]"
                />
                <span className="px-3 py-1  text-green-500 bg-green-500/10 tracking-wide border border-green-500 ml-12  font-bold rounded-md font-outfit">
                  Certified
                </span>
              </div>
            </div>
            <img
              src={image ? image : "https://via.placeholder.com/300"}
              alt=""
              className=" md:max-w-[400px] w-full max-w-[300px] object-cover contrast-100 brightness-90 scale-100 transform-perserve-3d group-hover:parallax-image"
            />
          </div>
          <img
            src="./image/thatme.svg"
            alt=""
            className="absolute transform-perserve-3d -bottom-8 -left-20"
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
