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

  const CHUNK_SIZE = 3;

  const startPage = Math.floor((currentPage - 1) / CHUNK_SIZE) * CHUNK_SIZE + 1;
  const endPage = Math.min(startPage + CHUNK_SIZE - 1, totalPages);

  const pagesToRender = Array.from(
    { length: endPage - startPage + 1 },
    (_, idx) => startPage + idx
  );

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
        {pagesToRender.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 text-xs font-medium rounded-full transition-all duration-300 border ${
              currentPage === page
                ? "border-cyan-500 text-cyan-500 bg-cyan-500/5"
                : "border-transparent text-neutral-500 hover:border-cyan-500 hover:text-cyan-500"
            }`}
          >
            {page}
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
