"use client";

import Image from "next/image";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";
import { MotionDiv } from "./HeroMotion";
import { heroMotion } from "./Motion";

export function Hero() {
  return (
    <section
      id="intro"
      className="relative pt-20 pb-8 md:pt-32 lg:pt-24 overflow-hidden"
    >
      <MotionDiv
        variants={heroMotion.glow}
        initial="hidden"
        animate="show"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#2CA852]/20 to-[#5B369D]/20 blur-[100px] rounded-full pointer-events-none -z-10 opacity-50 dark:opacity-30"
      />

      <div className="container mx-auto max-w-5xl flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12 px-4 md:px-6">
        <MotionDiv
          variants={heroMotion.container}
          initial="hidden"
          animate="show"
          className="flex-1 text-center md:text-left space-y-6 md:space-y-8 z-10"
        >
          <MotionDiv variants={heroMotion.item}>
            <div className="inline-flex items-center gap-2 px-4 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/60 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-300 text-xs font-medium shadow-sm w-fit mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2CA852] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2CA852]"></span>
              </span>
              Available for new projects
            </div>
          </MotionDiv>

          <MotionDiv
            variants={heroMotion.item}
            className="space-y-3 md:space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-neutral-900 dark:text-white leading-[0.9]">
              Hi, I`m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CA852] to-[#5B369D]">
                Djembar.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              A{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                Fullstack Web Developer
              </span>{" "}
              based in Indonesia. I craft accessible, pixel-perfect, and
              performant web experiences using modern technologies.
            </p>
          </MotionDiv>

          <MotionDiv
            variants={heroMotion.item}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4"
          >
            <a
              href="/contact"
              className="group relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2CA852] to-[#5B369D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Contact Me
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </a>

            <a
              href="https://drive.google.com/file/d/1GSBk-cy6OzRDlPC3Mb3PiWpc3tKLumeI/view?usp=drive_link"
              className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-transparent hover:border-cyan-500 text-neutral-500 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-500 font-medium rounded-full transition-all duration-300 flex items-center gap-2 text-sm sm:text-base"
            >
              Download CV
              <Download
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          variants={heroMotion.imageWrap}
          initial="hidden"
          animate="show"
          className="relative group flex-shrink-0 z-10 mt-4 md:mt-0"
        >
          <MotionDiv
            initial={heroMotion.pointer.initial}
            animate={heroMotion.pointer.animate}
            transition={heroMotion.pointer.transition}
            className="absolute -right-4 top-10 animate-bounce delay-700 bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 z-20 hidden md:block"
          >
            <MousePointer2 className="text-[#5B369D]" size={20} />
          </MotionDiv>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2CA852] to-[#5B369D] rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-2xl rotate-2 md:rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-out border border-white/20 mx-auto">
              <Image
                src="/image/me.png"
                alt="Djembar Profile"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
