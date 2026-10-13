import { Hero } from "./components/hero";
import { About } from "./components/about";
import { CodingProfiles } from "./components/coding-profiles";
import { Experience } from "./components/experience";
import { Education } from "./components/education";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Research } from "./components/research";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#09090b] px-4 relative">
      {/* Subtle dot-grid texture confined to top area */}
      <div className="pointer-events-none absolute inset-0 h-[420px] dot-grid opacity-30" />
      {/* Radial fade to mask the grid */}
      <div className="pointer-events-none absolute inset-0 h-[420px] bg-gradient-to-b from-transparent via-transparent to-[#09090b]" />

      <main className="relative flex flex-1 w-full max-w-2xl flex-col py-16">
        <Hero />
        <div className="animate-fade-up delay-100"><About /></div>
        <div className="animate-fade-up delay-200"><CodingProfiles /></div>
        <div className="animate-fade-up delay-300"><Experience /></div>
        <div className="animate-fade-up delay-300"><Education /></div>
        <div className="animate-fade-up delay-400"><Projects /></div>
        <div className="animate-fade-up delay-400"><Skills /></div>
        <div className="animate-fade-up delay-500"><Research /></div>
        <div className="animate-fade-up delay-500"><Contact /></div>
        <Footer />
      </main>
    </div>
  );
}
