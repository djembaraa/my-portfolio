import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ProjectCard } from "@/components/card/ProjectCard";
import { featuredProjectsQuery, Project } from "@/constants/projects";

export async function FeaturedProjects() {
  const projects: Project[] = await client.fetch(featuredProjectsQuery);

  return (
    <section
      id="projects"
      className="relative pt-20 pb-8 md:pt-16 lg:pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Selected Works
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CA852] to-[#5B369D]">
                Projects.
              </span>
            </h2>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              A selection of my favorite works, showcasing my expertise in
              Fullstack Development.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group hidden md:flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-500 transition-colors mb-2"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50">
            <p className="text-neutral-500 font-medium">
              No featured projects selected yet.
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              Go to Sanity Studio toggle "Featured" on your projects.
            </p>
          </div>
        )}

        <div className="mt-12 md:hidden flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}