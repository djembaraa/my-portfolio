"use client";

import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Web Developer (Independent)",
    company: "Freelance / Self-Employed",
    period: "Jan 2024 - Present",
    location: "Banyumas, Indonesia",
    description:
      "Strengthened technical proficiency by building full-stack web applications using the PERN Stack (PostgreSQL, Express, React, Node). Delivered digital marketing solutions for SMEs.",
    tags: ["PostgreSQL", "React.js", "Express.js", "Digital Marketing"],
    active: true,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    role: "Part Time Admin Marketplace + Digital Advisor",
    company: "Fourkicks Store",
    period: "Feb 2025 - Oct 2025",
    location: "Purwokerto, Indonesia",
    description:
      "Optimized marketplace operations and provided strategic digital advice to enhance online presence and sales conversion.",
    tags: ["Marketplace Management", "Digital Strategy", "E-commerce", "Sales"],
    color: "from-blue-400/20 to-indigo-500/20",
  },
  {
    role: "Creative & Digital Marketing",
    company: "PT. Properti Sanjaya Gemilang",
    period: "Jun 2024 - Aug 2024",
    location: "Purwokerto, Indonesia",
    description:
      "Managed paid advertising (Meta/Google Ads), produced multimedia content, and handled frontend CMS customization using Laravel & WordPress.",
    tags: ["Laravel", "WordPress", "Meta Ads", "Content Strategy"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    role: "Creative & Marketing Staff",
    company: "PT. Amikom Berdidaya Guna",
    period: "Jan 2024 - Jun 2024",
    location: "Purwokerto, Indonesia",
    description:
      "Created diverse visual assets, analyzed ad performance, and oversaw product licensing/compliance. Led event planning and bazaar participation.",
    tags: ["Graphic Design", "Event Management", "Compliance", "Social Media"],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    role: "Design & Web Development Intern",
    company: "PT. Jayant Perdana Indonesia",
    period: "Jul 2022 - Dec 2022",
    location: "Jakarta, Indonesia",
    description:
      "Developed brand assets, produced high-impact video content, and optimized WordPress websites for SEO and user experience.",
    tags: ["Video Editing", "WordPress", "SEO", "Branding"],
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    role: "Public Relations Officer",
    company: "Regional Government of Banyumas",
    period: "Nov 2020 - May 2022",
    location: "Banyumas, Indonesia",
    description:
      "Led photo/video production for government documentation, operated drone systems, and managed cross-departmental PR initiatives.",
    tags: ["Public Relations", "Drone Pilot", "Crisis Comms", "Photography"],
    color: "from-emerald-500/20 to-green-500/20",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative pt-20 pb-8 md:pt-32 lg:pt-24 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 md:mb-4">
            Professional Experience
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg">
            A timeline of my professional growth from public relations to
            fullstack development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-neutral-200 dark:via-neutral-800 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950 bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.2)] -translate-x-[calc(50%-0.5px)] md:-translate-x-1/2 mt-1.5 z-10">
                  {exp.active && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  )}
                </div>

                <div
                  className={`pl-12 md:pl-0 md:w-1/2 flex ${
                    index % 2 === 0
                      ? "md:justify-start md:pr-12"
                      : "md:justify-end md:pl-12"
                  } items-start`}
                >
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <div
                  className={`pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div
                    className="
                        group relative p-6 md:p-8
                        rounded-2xl
                        bg-white dark:bg-neutral-900/40 
                        border border-neutral-200 dark:border-neutral-800
                        hover:border-blue-500/30 dark:hover:border-blue-500/30
                        shadow-sm hover:shadow-lg dark:hover:shadow-none 
                        transition-all duration-300
                        hover:-translate-y-1
                        overflow-hidden
                    "
                  >
                    <div
                      className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${exp.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 pointer-events-none`}
                    />

                    <div className="relative z-10">
                      <div className="md:hidden flex items-center gap-2 mb-3 text-xs text-neutral-500 dark:text-neutral-500 font-medium">
                        <Calendar size={12} />
                        {exp.period}
                      </div>

                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                            {exp.role}
                          </h4>
                          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                            <Briefcase size={14} />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                          <MapPin size={14} />
                        </div>
                      </div>

                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 text-[10px] md:text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ArrowUpRight className="absolute top-6 right-6 text-neutral-300 dark:text-neutral-700 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 z-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}