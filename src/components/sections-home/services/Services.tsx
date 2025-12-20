"use client";

import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../../../constants/services";

export function Services() {
  return (
    <section
      id="services"
      className="relative pt-20 pb-8 md:pt-16 lg:pt-16 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 md:mb-4">
            Beyond Just Coding
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg">
            I provide holistic web solutions, applying Gestalt principles to
            both design and code architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden 
                rounded-2xl
                bg-white dark:bg-neutral-900/40 
                border border-neutral-200 dark:border-neutral-800
                p-6 md:p-8 
                transition-all duration-300 
                hover:shadow-lg dark:hover:shadow-none 
                hover:border-blue-500/30 dark:hover:border-blue-500/30
                ${service.span}
              `}
            >
              <div
                className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className="flex justify-between items-start">
                  <div
                    className={`p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 ${
                      service.color.split(" ")[2]
                    }`}
                  >
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight className="text-neutral-400 dark:text-neutral-600 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}