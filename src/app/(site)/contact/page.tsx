"use client";

import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("djembararafat98@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative pt-20 pb-8 md:pt-32 lg:pt-24 overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 md:mb-4">
            Let`s Work Together
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-lg">
            Have a project in mind or just want to say hi? I`m always open to
            discussing new ideas and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-8">
            <div
              className="
              p-6 rounded-2xl 
              bg-white dark:bg-neutral-900/40 
              border border-neutral-200 dark:border-neutral-800 
              backdrop-blur-sm
              hover:border-blue-500/30 dark:hover:border-blue-500/30
              transition-all duration-300
              hover:shadow-lg dark:hover:shadow-none
            "
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="group flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 shadow-sm group-hover:text-blue-500 transition-colors">
                      <Mail size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-neutral-400 font-medium">
                        Email me at
                      </span>
                      <span className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        djembararafat98@gmail.com
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-neutral-700 text-neutral-400 hover:text-blue-500 transition-all"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 group rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-neutral-100 dark:hover:border-neutral-700">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 font-medium">
                      Based in
                    </span>
                    <span className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Banyumas, Indonesia
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4 block">
                  Connect with me
                </span>
                <div className="flex gap-3">
                  <SocialLink
                    href="https://github.com/djembaraa"
                    icon={Github}
                    label="GitHub"
                  />
                  <SocialLink
                    href="https://linkedin.com/in/djembar-arafat-9a6602178"
                    icon={Linkedin}
                    label="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="
                p-6 md:p-8 
                rounded-2xl 
                bg-white dark:bg-neutral-900/40 
                border border-neutral-200 dark:border-neutral-800 
                backdrop-blur-md 
                shadow-sm
                hover:border-blue-500/30 dark:hover:border-blue-500/30
                hover:shadow-lg dark:hover:shadow-none
                transition-all duration-300
              "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-neutral-400 text-sm text-neutral-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-neutral-400 text-sm text-neutral-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-neutral-400 text-sm text-neutral-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-neutral-400 text-sm resize-none text-neutral-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="
                        group w-full relative flex items-center justify-center gap-2 
                        py-3.5 rounded-xl 
                        bg-neutral-900 dark:bg-white 
                        text-white dark:text-black 
                        font-medium text-sm
                        overflow-hidden
                        transition-all hover:shadow-lg hover:-translate-y-0.5
                    "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2CA852] to-[#5B369D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
                  Send Message{" "}
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
                flex items-center gap-2 px-4 py-2 
                rounded-lg 
                bg-neutral-50 dark:bg-neutral-800 
                border border-neutral-200 dark:border-neutral-700
                hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/20
                text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400
                text-sm font-medium
                transition-all duration-300
                hover:-translate-y-0.5
            "
    >
      <Icon size={16} />
      {label}
    </a>
  );
}
