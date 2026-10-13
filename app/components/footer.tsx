"use client";

import { Mail, ArrowUp } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "h-3.5 w-3.5"}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "h-3.5 w-3.5"}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { id: "github", icon: GithubIcon, href: "https://github.com/purab107", label: "GitHub" },
  {
    id: "linkedin",
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/purabsahare",
    label: "LinkedIn",
  },
  { id: "mail", icon: Mail, href: "mailto:purabsahare@gmail.com", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kolkata",
  });

  return (
    <footer className="flex items-center justify-between border-t border-zinc-800 py-4 mt-4">
      <div className="flex items-center gap-1">
        {socials.map(({ id, icon: Icon, href, label }) => (
          <a
            key={id}
            href={href}
            target={id !== "mail" ? "_blank" : undefined}
            rel={id !== "mail" ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-600 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
          >
            <Icon className="h-3.5 w-3.5" />
          </a>
        ))}
        <span className="ml-2 font-mono text-[10px] text-zinc-700">{timeStr} IST</span>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="flex items-center gap-1 font-mono text-[10px] text-zinc-700 transition-colors hover:text-zinc-400"
      >
        top <ArrowUp className="h-3 w-3" />
      </button>
    </footer>
  );
}
