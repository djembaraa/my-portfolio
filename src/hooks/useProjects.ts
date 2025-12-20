"use client";

import { useEffect, useMemo, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProjectsQuery, Project } from "@/constants/projects";

export function useProjects(itemsPerPage = 9) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        const data: Project[] = await client.fetch(allProjectsQuery);
        if (!alive) return;
        setProjects(Array.isArray(data) ? data : []);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return projects.slice(start, start + itemsPerPage);
  }, [projects, currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    const safe = Math.min(Math.max(page, 1), Math.max(totalPages, 1));
    setCurrentPage(safe);
  };

  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return {
    loading,
    currentItems,
    totalPages,
    currentPage,
    goToPage,
  };
}
