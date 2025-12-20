"use client";

import { Award, Calendar, CheckCircle2, FileText } from "lucide-react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { Certification } from "../../constants/certification";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  return (
    <div
      onClick={() => cert.fileUrl && window.open(cert.fileUrl, "_blank")}
      className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        cert.fileUrl ? "cursor-pointer" : ""
      }`}
    >
      <div
        className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${cert.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0`}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative w-full h-44 mb-6 rounded-xl bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200/50 dark:border-neutral-700/50 overflow-hidden flex items-center justify-center">
          {cert.category && (
            <div className="absolute top-3 left-3 z-20 px-2 py-1 text-[9px] uppercase tracking-wider font-bold bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md text-neutral-600 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700">
              {cert.category}
            </div>
          )}

          {cert.previewImage ? (
            <img
              src={urlFor(cert.previewImage).url()}
              alt={cert.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-neutral-400">
              <FileText size={48} strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                PDF Document
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 rounded-xl bg-black/10 dark:bg-neutral-50 dark:bg-blue-900/20 text-black-600 dark:text-neutral-600 group-hover:scale-110 transition-transform duration-300">
            <Award size={24} strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 dark:text-neutral-500 border border-neutral-100 dark:border-neutral-800 rounded-full px-2.5 py-1">
            <Calendar size={12} />
            {cert.date}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-bold text-neutral-900 dark:text-white transition-colors line-clamp-1">
            {cert.name}
          </h3>
          <div className="flex flex-col mt-1">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
              {cert.issuer}
              <CheckCircle2 size={12} className="text-blue-500" />
            </p>
            {cert.description && (
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 leading-relaxed line-clamp-3">
                {cert.description}
              </p>
            )}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
              Credential ID
            </span>
            <span className="text-xs font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-md mt-1 w-fit">
              {cert.credentialId}
            </span>
          </div>
          <div className="text-[10px] font-bold text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
            Click to Open PDF
          </div>
        </div>
      </div>
    </div>
  );
}