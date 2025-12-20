import {
  Code2,
  LayoutTemplate,
  Database,
  Zap,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Fullstack Web Development",
    description:
      "Building comprehensive web solutions. I handle everything from the database architecture to the pixel-perfect frontend interface using the Next.js ecosystem.",
    icon: Code2,
    span: "md:col-span-2",
    color: "from-blue-500/20 to-cyan-500/20 text-blue-600 dark:text-blue-400",
  },
  {
    title: "UI Implementation",
    description:
      "Translating Figma designs into responsive, interactive code with Tailwind CSS.",
    icon: LayoutTemplate,
    span: "md:col-span-1",
    color:
      "from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400",
  },
  {
    title: "Backend Engineering",
    description:
      "Robust API design, database modeling (SQL), and secure authentication systems.",
    icon: Database,
    span: "md:col-span-1",
    color:
      "from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400",
  },
  {
    title: "Performance & SEO",
    description:
      "Optimizing Core Web Vitals, server-side caching, and technical SEO structure.",
    icon: Zap,
    span: "md:col-span-2",
    color:
      "from-emerald-500/20 to-green-500/20 text-emerald-600 dark:text-emerald-400",
  },
];