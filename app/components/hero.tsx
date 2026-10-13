"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="flex items-start justify-between gap-4 pt-2 pb-10 animate-fade-up">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-4xl font-bold tracking-tight leading-tight">
          <span className="gradient-text">Hi, I&apos;m Purab</span>
        </h1>
        <p className="text-zinc-500 font-mono text-sm">
          Backend-Focused Full Stack Developer
          <span className="animate-blink ml-0.5 text-zinc-400">|</span>
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="inline-flex items-center gap-1.5 text-xs text-zinc-600 font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </span>
        </div>
      </div>
      <Avatar className="h-[72px] w-[72px] avatar-glow flex-shrink-0 rounded-full">
        <AvatarImage
          src="/pfp-mock.jpg"
          alt="Purab Sahare"
          className="object-cover"
        />
        <AvatarFallback className="text-lg bg-zinc-800 text-zinc-300">PS</AvatarFallback>
      </Avatar>
    </section>
  );
}
