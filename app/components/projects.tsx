import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "h-3 w-3"}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    id: "gramgains",
    name: "GramGains",
    description:
      "Adaptive Indian nutrition tracker with custom two-stage food search (PostgreSQL + JS relevance ranking) and an 8-stage calorie-target recommendation engine using Holt's exponential smoothing.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript", "shadcn/ui"],
    github: "https://github.com/purab107/gramgains",
    live: null,
  },
  {
    id: "bhukkadh",
    name: "Bhukkadh Rider App",
    description:
      "Cross-platform food delivery rider app with real-time dispatch, GPS routing, OTP verification, earnings dashboard, wallet & payout management.",
    tags: ["React Native", "Expo", "TypeScript", "Socket.IO", "Firebase", "Razorpay"],
    github: null,
    live: null,
  },
  {
    id: "miracal",
    name: "Miracal Chat App",
    description:
      "Consumer messaging app with real-time chat, group conversations, status updates, WebRTC voice/video calls, and local message caching.",
    tags: ["React Native", "Expo", "TypeScript", "WebRTC", "Socket.IO", "Firebase"],
    github: null,
    live: null,
  },
  {
    id: "innotm",
    name: "Innotm — Digital Wallet",
    description:
      "Full-stack digital wallet web app with user authentication, balance management, transaction history, and an AI-powered chatbot for user interaction.",
    tags: ["Angular", "ASP.NET", "TypeScript", "SQL"],
    github: "https://github.com/purab107/innotm",
    live: null,
  },
  {
    id: "sortera",
    name: "SORTERA — Sorting Visualizer",
    description:
      "Interactive sorting algorithm visualizer with step-by-step animations and real-time visual feedback for Bubble, Merge, Quick, and Insertion sort.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/purab107/sortera",
    live: null,
  },
];

export function Projects() {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <h2 className="text-sm font-semibold text-zinc-50">Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:-translate-y-0.5"
          >
            {/* Project image */}
            <div className="relative h-36 w-full overflow-hidden bg-zinc-900">
              <Image
                src="/project-mock.png"
                alt={`${project.name} screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover opacity-70 transition-opacity duration-200 group-hover:opacity-90"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-2 p-4">
              <span className="text-sm font-medium text-zinc-200">
                {project.name}
              </span>
              <p className="text-xs leading-relaxed text-zinc-500 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Links */}
              {(project.github || project.live) && (
                <div className="flex items-center gap-2 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub`}
                    >
                      <Button variant="outline" size="sm" className="gap-1.5 text-[11px] h-7">
                        <GithubIcon className="h-3 w-3" />
                        Source
                      </Button>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live site`}
                    >
                      <Button variant="ghost" size="sm" className="gap-1.5 text-[11px] h-7">
                        <ExternalLink className="h-3 w-3" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
