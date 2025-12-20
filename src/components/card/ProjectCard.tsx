"use client";

import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface ProjectProps {
  project: {
    title: string;
    description: string;
    image: any;
    tags: string[];
    demoUrl?: string;
    githubUrl?: string;
    slug: { current: string };
  };
}

export function ProjectCard({ project }: ProjectProps) {
  const displayTitle =
    project.title.length > 30
      ? `${project.title.substring(0, 20)}...`
      : project.title;

  return (
    <div className="group relative flex flex-col bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-800">
        {project.image ? (
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-neutral-400 text-sm">
            No Preview Available
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-cyan-500 transition-colors">
            {displayTitle}
          </h3>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 max-w-[75%] h-[42px] overflow-hidden content-end">
            {project.tags?.slice(0, 5).map((tag, i) => (
              <span
                key={i}
                className="
                  max-w-[80px] truncate
                  px-2 py-0.5 
                  text-[9px] font-medium uppercase tracking-wide
                  rounded-full 
                  bg-neutral-100 dark:bg-neutral-800 
                  text-neutral-600 dark:text-neutral-300 
                  border border-neutral-200 dark:border-neutral-700
                "
                title={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 shrink-0 pb-0.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700"
                title="View Code"
              >
                <Github size={14} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-cyan-500 hover:text-white transition-all border border-transparent hover:border-cyan-400/30"
                title="Live Demo"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
