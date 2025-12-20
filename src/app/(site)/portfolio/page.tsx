"use client";

import { ProjectCard } from "@/components/card/ProjectCard";
import { FolderGit2 } from "lucide-react";
import { PaginationControls as Pagination } from "../../../components/paginations/PaginationControls";
import { useProjects } from "@/hooks/useProjects";

export default function PortfolioPage() {
  const { loading, currentItems, totalPages, currentPage, goToPage } =
    useProjects(6);

  if (loading) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-20">
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-16 max-w-5xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
            <FolderGit2 size={14} /> Full Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            My Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CA852] to-[#5B369D]">
              Works.
            </span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            A comprehensive collection of projects I've worked on, ranging from
            web applications, UI/UX explorations, to open source contributions.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentItems.length > 0 ? (
            currentItems.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                No projects found. Check back later!
              </p>
            </div>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </section>
    </main>
  );
}
