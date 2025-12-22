import React from "react";
import { navigation } from "@/lib/navlinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 pt-12 pb-8 md:pt-20 md:pb-12 overflow-hidden bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#2CA852]/10 to-[#5B369D]/10 blur-[80px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Djembar Arafat
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Crafting digital experiences with heart & code.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
              &copy; {currentYear} Djembar Arafat. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={`https://${item.name}.com/${item.username}`}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="
                  group relative flex items-center justify-center 
                  w-10 h-10 rounded-full 
                  bg-neutral-100 dark:bg-neutral-800 
                  border border-neutral-200 dark:border-neutral-700
                  text-neutral-500 dark:text-neutral-400
                  transition-all duration-300
                  hover:scale-110 hover:-translate-y-1
                  hover:hover:border-cyan-500 hover:bg-white dark:hover:border-cyan-500
                  hover:text-cyan-600 dark:hover:text-cyan-400
                  hover:shadow-lg hover:shadow-cyan-500/10
                "
              >
                <span className="sr-only">{item.name}</span>
                <item.icon
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-800/50 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-[10px] md:text-xs text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-wider">
          <span>Based in Banyumas, Indonesia</span>
          <span className="flex items-center gap-1">
            Member of
            <span className="text-neutral-600 dark:text-neutral-300 font-bold">
              <a href="https://www.uwisara.com/" target="_blank" rel="noopener noreferrer"/>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
