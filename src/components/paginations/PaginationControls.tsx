"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-cyan-500 hover:text-cyan-500 disabled:opacity-30 transition-all duration-300"
      >
        <ChevronLeft size={20} />
      </button>
      <div className="flex gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`w-10 h-10 text-xs font-medium rounded-full transition-all duration-300 border ${
              currentPage === i + 1
                ? "border-cyan-500 text-cyan-500 bg-cyan-500/5"
                : "border-transparent text-neutral-500 hover:border-cyan-500 hover:text-cyan-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-cyan-500 hover:text-cyan-500 disabled:opacity-30 transition-all duration-300"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}