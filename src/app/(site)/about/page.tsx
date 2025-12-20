import Image from "next/image";
import { User, Code2, Rocket, Heart, Coffee, Globe } from "lucide-react";
import { Experience } from "@/components/sections-home/experience/Experience";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">      
      <section className="relative pt-20 pb-8 md:pt-32 lg:pt-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-[#2CA852]/10 to-[#5B369D]/10 blur-[120px] rounded-full pointer-events-none -z-10 opacity-50" />

        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2CA852] to-[#5B369D] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/image/me.png"
                    alt="Djembar Profile"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                  <Globe className="text-[#2CA852] mb-2" size={20} />
                  <p className="text-xs text-neutral-500">Location</p>
                  <p className="text-sm font-semibold">Indonesia</p>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                  <Coffee className="text-[#5B369D] mb-2" size={20} />
                  <p className="text-xs text-neutral-500">Experience</p>
                  <p className="text-sm font-semibold">4+ Years</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <User size={14} /> Behind the Code
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
                  Turning complex problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CA852] to-[#5B369D]">elegant solutions.</span>
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Hi, I’m Djembar Arafat. My journey in tech started with a curiosity about how things work under the hood. Today, I specialize in building performant full-stack applications that don't just work well, but feel intuitive to use.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold border-l-4 border-[#2CA852] pl-4">Core Philosophy</h3>
                <div className="grid gap-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-[#2CA852]">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Clean & Scalable Code</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Writing code for humans first, machines second. I prioritize maintainability and performance in every line.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-[#5B369D]">
                      <Heart size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Empathy-Driven Design</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Every pixel is an opportunity to solve a user's pain point. I bridge the gap between backend logic and frontend delight.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-cyan-500">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Continuous Evolution</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">In the fast-paced web ecosystem, I stay ahead by mastering modern stacks like Next.js, TypeScript, and Cloud Architectures.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Experience />

    </main>
  );
}