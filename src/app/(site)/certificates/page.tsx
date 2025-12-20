"use client";

import { Award, ArrowUpDown } from "lucide-react";
import { useCertifications } from "@/hooks/useCertifications";
import { CertificationCard } from "../../../components/card/CertificationCard";
import { PaginationControls as Pagination} from "../../../components/paginations/PaginationControls";

export default function CertificationsPage() {
  // Panggil Logic dari Hook (Clean Code!)
  const {
    loading,
    sortOrder,
    currentItems,
    totalPages,
    currentPage,
    toggleSort,
    goToPage,
  } = useCertifications(4); // itemsPerPage = 4

  if (loading) return null;

  return (
    <main
      id="certifications"
      className="relative min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-20 overflow-hidden"
    >
      {/* Background Blob (Desain Tetap) */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-16 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={14} /> Licenses & Certifications
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2CA852] to-[#5B369D]">
                Certifications.
              </span>
            </h1>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
              Continuous learning and validation of skills through recognized
              institutions.
            </p>
          </div>

          <button
            onClick={toggleSort}
            className="group flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 text-sm font-bold transition-colors mb-2"
          >
            <ArrowUpDown size={16} />
            Sort by: {sortOrder === "desc" ? "Newest" : "Oldest"}
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[600px]">
          {currentItems.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </section>
    </main>
  );
}