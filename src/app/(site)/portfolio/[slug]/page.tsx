import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Github,
  Layers,
} from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { projectBySlugQuery } from "../../../../constants/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project: any = await client.fetch(projectBySlugQuery, { slug });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Djembar Arafat`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project: any = await client.fetch(projectBySlugQuery, { slug });

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-20 selection:bg-cyan-500/30">
      <article className="container mx-auto px-4 md:px-6 max-w-7xl">
        <header className="mb-12 md:mb-16">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 hover:border-cyan-500/30 text-neutral-600 dark:text-neutral-400sm font-medium text-neutral-600 dark:text-cyan-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:border-cyan-500/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 mb-8"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Portfolio
          </Link>

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              {project.title}
            </h1>

            <div className="flex items-center gap-3">
              {project.publishedAt && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 text-sm font-medium">
                  <Calendar size={15} />
                  <span>
                    {new Date(project.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-16 shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-950/50">
          {project.image ? (
            <Image
              src={urlFor(project.image).url()}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-400">
              No Preview Available
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="prose prose-lg md:prose-xl prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
                Project Overview
              </h3>
              <div className="whitespace-pre-line">{project.description}</div>
            </div>
          </div>

          <aside className="lg:col-span-4 order-1 lg:order-2">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 md:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-col gap-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-full flex items-center justify-between px-6 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-lg rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="relative z-10">Visit Website</span>
                      <ArrowUpRight className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#2CA852] to-[#5B369D] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </a>
                  ) : (
                    <div className="w-full px-6 py-4 rounded-2xl bg-neutral-200 dark:bg-neutral-800 text-neutral-500 text-center font-medium cursor-not-allowed">
                      Demo Not Available
                    </div>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500 dark:hover:border-cyan-500 text-neutral-600 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium text-lg rounded-2xl transition-all"
                    >
                      <span>Source Code</span>
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2 mb-6 text-neutral-900 dark:text-white font-bold text-lg">
                  <Layers
                    size={20}
                    className="text-cyan-600 dark:text-cyan-400"
                  />
                  <h3>Tech Stack</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm font-medium rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
