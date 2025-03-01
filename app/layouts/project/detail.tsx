"use client";

import React, {useRef, useEffect, useState, use} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import Head from "next/head";

import "swiper/css";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {Projects, Tags} from "@/app/types/portos";
import fetch from "@/app/utils/axios";

export default function detail({slug}: { slug: string }) {
    const [data, setData] = useState<Projects>();
    const prevSlide = useRef(null);
    const nextSlide = useRef(null);

    const getDetailProject = async ({slug}: { slug: string }) => {
        try {
            const response = await fetch.get("project.json");

            const filteredData = response.data.find(
                (item: any) => item.slug === slug
            );

            setData(filteredData);
        } catch (error) {
            console.error("Error fetching project:", error);
            return null;
        }
    };

    useEffect(() => {
        getDetailProject({slug: slug});
    });

    return (
        <>
            {data && (
                <Head>
                    <title>{data.title} . Ibnu Batutah</title>
                    <meta name="description" content={data.description}/>
                    <meta name="robots" content="index, follow"/>
                    <meta
                        property="og:title"
                        content={`${data.title} . Ibnu Batutah`}
                    />
                    <meta
                        property="og:description"
                        content={data.description}
                    />
                    <meta property="og:type" content="website"/>
                </Head>
            )}
            <div className="space-y-8 pb-16 pt-10 container mx-auto">
                <div className="max-w-7xl mx-auto font-outfit">
                    <Link href={`/`} className=" flex gap-2 items-center">
                        <Icon icon="ion:arrow-back"/>{" "}
                        <span>Back to home </span>
                    </Link>
                </div>
                <div className="relative  ">
                    <div className="mt-8 relative">
                        {data && data.thumbnail.length > 1 ? (
                            <button
                                ref={nextSlide}
                                className="px-4 py-4 bg-neutral-800 rounded-full font-outfit absolute  lg:right-0 -right-5  lg:top-80 top-24 text-2xl z-20">
                                <span>
                                    <Icon icon="lucide:arrow-right"/>
                                </span>
                            </button>
                        ) : null}
                        {data && data.thumbnail.length > 1 ? (
                            <button
                                ref={prevSlide}
                                className="px-4 py-4 bg-neutral-800 rounded-full font-outfit absolute lg:left-0 -left-5  lg:top-80 top-24 text-2xl z-20">
                                <span>
                                    <Icon icon="lucide:arrow-left"/>
                                </span>
                            </button>
                        ) : null}
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevSlide.current,
                            nextEl: nextSlide.current,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}>
                        {data && data.thumbnail.length > 0 ? (
                            data.thumbnail.map((item: string, i: number) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={"/image/project/" + item}
                                        className="w-full max-w-7xl mx-auto rounded-md"
                                    />
                                </SwiperSlide>
                            ))
                        ) : (
                            <SwiperSlide>
                                <div
                                    className="w-full max-w-7xl mx-auto border-2 border-dashed border-col-secondary-font p-5">
                                    No Image Showed
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

                <div className="max-w-7xl mx-auto space-y-5">
                    <div className="flex lg:flex-row flex-col justify-between gap-5">
                        <h2 className="text-4xl  font-archiabold tracking-tighter">
                            {data?.title}
                        </h2>
                        <div className="flex  gap-5">
                            {data && data.website && data.website.length > 0 ? (
                                data.website.map((item: any, i: number) => (
                                    <React.Fragment key={i}>
                                        {item.appstore && (
                                            <Link
                                                key={`appstore-${i}`}
                                                href={item.appstore}
                                                target="_blank"
                                                className="px-5 lg:text-base text-sm font-outfit py-2 flex gap-2 items-center bg-neutral-700 rounded-md text-white">
                                                <Icon
                                                    icon="mdi:apple"
                                                    className="text-lg"
                                                />
                                                <span>App Store</span>
                                            </Link>
                                        )}
                                        {item.googleplay && (
                                            <Link
                                                key={`googleplay-${i}`}
                                                href={item.googleplay}
                                                target="_blank"
                                                className="px-5 lg:text-base text-sm font-outfit py-2 flex gap-2 items-center bg-neutral-700 rounded-md text-white">
                                                <Icon
                                                    icon="mdi:google-play"
                                                    className="text-lg"
                                                />
                                                <span>Google Play</span>
                                            </Link>
                                        )}
                                    </React.Fragment>
                                ))
                            ) : (
                                <div></div>
                            )}
                            {data && data.repository && (
                                <Link
                                    href={data.repository}
                                    target="_blank"
                                    className="px-5 lg:text-base text-sm font-outfit py-2 flex gap-2 items-center bg-neutral-700 rounded-md text-white">
                                    Repository
                                    <span>
                                        {" "}
                                        <Icon icon="mdi:github"/>
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Description with Image Placement */}
                    <div className="space-y-6 text-lg font-outfit text-neutral-300">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="col-span-5">
                                <p className="text-justify">{data?.overview}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {data && data.tag.length > 0 ? (
                                data.tag.map((item: string, i: number) => (
                                    <span
                                        key={i}
                                        className="text-center font-outfit px-3 py-1 text-sm bg-black border border-white rounded-md">
                                        {item}
                                    </span>
                                ))
                            ) : (
                                <span className="text-center font-outfit px-3 py-1 text-sm bg-neutral-800 rounded-md">
                                    No techonlogy used
                                </span>
                            )}
                        </div>
                        <div>
                            <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                Tech Stack
                            </h3>
                            {data?.techstack &&
                            typeof data.techstack === "object" ? (
                                Object.entries(data.techstack).map(
                                    ([category, technologies]) => (
                                        <div key={category} className="mb-2">
                                            <span className="font-semibold">
                                                {category}:{" "}
                                            </span>
                                            {Array.isArray(technologies)
                                                ? technologies.join(", ")
                                                : technologies}
                                        </div>
                                    )
                                )
                            ) : (
                                <span>No tech stack available</span>
                            )}
                        </div>
                        <div>
                            <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                Key Features
                            </h3>
                            <ul>
                                {data?.key_features &&
                                Array.isArray(data.key_features)
                                    ? data.key_features.map(
                                        (item: string, i: number) => (
                                            <li key={i}>✅ {item}</li>
                                        )
                                    )
                                    : "No key features available"}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                Challenges & Solutions
                            </h3>
                            <ul>
                                {data?.challenges_solutions &&
                                Array.isArray(data.challenges_solutions)
                                    ? data.challenges_solutions.map(
                                        (item: string, i: number) => (
                                            <li key={i}>👉 {item}</li>
                                        )
                                    )
                                    : "No challenges and solutions available"}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                My Role & Contributions
                            </h3>
                            <ul>
                                {data?.my_role && Array.isArray(data.my_role)
                                    ? data.my_role.map(
                                        (item: string, i: number) => (
                                            <li key={i}>🔹 {item}</li>
                                        )
                                    )
                                    : "No my role available"}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                Impact Metrics
                            </h3>
                            <ul>
                                {data?.impact_metrics &&
                                Array.isArray(data.impact_metrics)
                                    ? data.impact_metrics.map(
                                        (item: any, i: number) => (
                                            <li
                                                key={i}
                                                className="flex items-center gap-2">
                                                <Icon
                                                    icon={item.icon}
                                                    className="text-xl"
                                                />
                                                <span>{item.text}</span>
                                            </li>
                                        )
                                    )
                                    : "No impact metrics available"}
                            </ul>
                        </div>
                        {data?.future_plans && Array.isArray(data.future_plans) && data.future_plans.length > 0 && (
                            <div>
                                <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                    Future Plans
                                </h3>
                                <ul>
                                    {data.future_plans.map((item: string, i: number) => (
                                        <li key={i}>✨ {item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {data?.description?.trim() && (
                            <div>
                                <h3 className="text-3xl mb-3 underline underline-offset-8 space-y-8 font-archiabold tracking-tighter">
                                    More About the Project
                                </h3>

                                {data.description.split("$!").map((text, index) => (
                                    <div key={index} className="space-y-4 py-6">
                                        <p className="text-neutral-300 text-justify">{text}</p>

                                        {data?.images?.[index] && (
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={`/image/project/${data.images[index]}`}
                                                    className="w-[90%] max-h-[47vh] mx-auto rounded-md shadow-md object-cover"
                                                    alt={`Project image ${index + 1}`}
                                                />
                                                {data?.captions?.[index] && (
                                                    <p className="text-sm mt-2">{data.captions[index]}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
