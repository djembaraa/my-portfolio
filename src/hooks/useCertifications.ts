import { useState, useEffect, useMemo } from "react";
import { client } from "@/sanity/lib/client";
import { Certification } from "../constants/certification";

export function useCertifications(itemsPerPage: number) {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const query = `*[_type == "certification"] {
          name, issuer, description, date, credentialId, category, color, previewImage,
          "fileUrl": certificateFile.asset->url
        }`;
        const data = await client.fetch(query);
        setCerts(data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  const sortedCerts = useMemo(() => {
    return [...certs].sort((a, b) => {
      const parseCustomDate = (dateStr: string) => {
        if (!dateStr) return 0;
        const parts = dateStr.split("/");
        if (parts.length !== 3) return 0;
        return new Date(
          parseInt(parts[2]),
          parseInt(parts[1]) - 1,
          parseInt(parts[0])
        ).getTime();
      };
      const timeA = parseCustomDate(a.date);
      const timeB = parseCustomDate(b.date);
      return sortOrder === "desc" ? timeB - timeA : timeA - timeB;
    });
  }, [certs, sortOrder]);

  const totalPages = Math.ceil(sortedCerts.length / itemsPerPage);
  
  const currentItems = useMemo(() => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    return sortedCerts.slice(firstIndex, lastIndex);
  }, [sortedCerts, currentPage, itemsPerPage]);

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    document.getElementById("certifications")?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    loading,
    sortOrder,
    currentItems,
    totalPages,
    currentPage,
    toggleSort,
    goToPage,
  };
}