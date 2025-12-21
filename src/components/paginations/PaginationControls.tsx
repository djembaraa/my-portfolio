"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const DOTS = "..." as const;
type PageItem = number | typeof DOTS;

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
}

function getPaginationItems(params: {
  currentPage: number;
  totalPages: number;
}): PageItem[] {
  const totalPages = Math.max(1, params.totalPages);
  const currentPage = Math.min(Math.max(params.currentPage, 1), totalPages);

  if (totalPages <= 5) return range(1, totalPages);

  if (currentPage === 1) return [...range(1, 3), DOTS];

  const windowSize = 4;

  let start = currentPage - 1;
  let end = start + windowSize - 1;

  if (start < 1) start = 1;
  if (end > totalPages) {
    end = totalPages;
    start = Math.max(1, end - windowSize + 1);
  }

  const items: PageItem[] = [];

  if (start > 1) items.push(DOTS);
  items.push(...range(start, end));
  if (end < totalPages) items.push(DOTS);

  return items;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPaginationItems({ currentPage, totalPages });

  const goToPage = (page: number) => {
    const next = Math.min(Math.max(page, 1), totalPages);
    if (next !== currentPage) onPageChange(next);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        disabled={currentPage <= 1}
        onClick={() => goToPage(currentPage - 1)}
        className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-cyan-500 hover:text-cyan-500 disabled:opacity-30 transition-all duration-300"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex gap-2 items-center">
        {pages.map((item, idx) => {
          if (item === DOTS) {
            return (
              <span
                key={`dots-${idx}`}
                className="w-10 h-10 flex items-center justify-center text-neutral-500"
                aria-hidden="true"
              >
                <MoreHorizontal size={16} />
              </span>
            );
          }

          const page = item;

          return (
            <button
              key={`page-${page}`}
              onClick={() => goToPage(page)}
              className={`w-10 h-10 text-xs font-medium rounded-full transition-all duration-300 border ${
                currentPage === page
                  ? "border-cyan-500 text-cyan-500 bg-cyan-500/5"
                  : "border-transparent text-neutral-500 hover:border-cyan-500 hover:text-cyan-500"
              }`}
              aria-current={currentPage === page ? "page" : undefined}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:border-cyan-500 hover:text-cyan-500 disabled:opacity-30 transition-all duration-300"
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
