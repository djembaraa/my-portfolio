import { Hero } from "@/components/sections-home/hero/Hero";
import { Skills } from "@/components/sections-home/skills/Skills";
import { Services } from "@/components/sections-home/services/Services";
import { FeaturedProjects } from "@/components/sections-home/portfolio/FeaturedProjects";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900">
      <Hero />

      <Skills />

      <Services />

      <FeaturedProjects />
    </main>
  );
}
