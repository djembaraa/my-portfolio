"use client";

import Image from "next/image";
import Link from "next/link";
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
    slug: any;
  };
}

function truncateText(text: string, maxChars: number) {
  const t = (text ?? "").trim();
  if (t.length <= maxChars) return t;

  const cut = t.slice(0, maxChars);
  const lastSpace = cut.lastIndexOf(" ");
  const pretty = lastSpace > 40 ? cut.slice(0, lastSpace) : cut;

  return `${pretty}...`;
}

export function ProjectCard({ project }: ProjectProps) {
  const displayTitle =
    project.title.length > 30
      ? `${project.title.substring(0, 20)}...`
      : project.title;

  const slugCurrent =
    typeof project.slug === "string" ? project.slug : project.slug?.current;

  const displayDescription = truncateText(project.description, 115);

  return (
    <div className="group relative flex flex-col bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-500/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <Link
        href={`/portfolio/${slugCurrent}`}
        className="block relative w-full aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-800 cursor-pointer"
      >
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
      </Link>

      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <Link href={`/portfolio/${slugCurrent}`}>
            <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-cyan-500 transition-colors cursor-pointer">
              {displayTitle}
            </h3>
          </Link>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
          {displayDescription}
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
