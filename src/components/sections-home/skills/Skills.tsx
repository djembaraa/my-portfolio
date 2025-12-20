"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { row1, row2 } from "../skills/skills-icon";

export function Skills() {
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="relative pt-20 pb-8 md:pt-16 lg:pt-16 overflow-hidden">
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 md:px-6 mb-10 md:mb-14 text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 md:mb-4">
          Technological Foundation
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
          The modern tools I use to bring products to life.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-20 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent pointer-events-none" />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          className="w-full"
        >
          {duplicatedRow1.map((skill, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <SkillCard name={skill.name} icon={skill.icon} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView="auto"
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          className="w-full"
        >
          {duplicatedRow2.map((skill, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <SkillCard name={skill.name} icon={skill.icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function SkillCard({ name, icon: Icon }: { name: string; icon: any }) {
  return (
    <div
      className="
            flex items-center gap-3 px-6 py-3
            rounded-2xl 
            bg-white dark:bg-neutral-900/40 
            border border-neutral-200 dark:border-neutral-800
            shadow-sm hover:shadow-md dark:shadow-none
            hover:border-cyan-500/30 dark:hover:border-cyan-500/30
            transition-all duration-300
        "
    >
      <div className="text-neutral-600 dark:text-neutral-400">
        <Icon className="w-5 h-5 md:w-6 md:h-6" />{" "}
      </div>
      <span className="font-medium text-neutral-800 dark:text-neutral-200 text-sm whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
