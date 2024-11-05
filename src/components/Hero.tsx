"use client";

import React from "react";
//@ts-ignore
import { Github, Linkedin, FileDown, ChevronDown } from "lucide-react";
import SocialLink from "./SocialLink";

interface HeroProps {
  onScroll: (id: string) => void;
}

const Hero = ({ onScroll }: HeroProps) => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

    <div className="relative space-y-6 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent animate-gradient">
        Hi, I'm Lionel Arce
      </h1>

      <p className="text-xl md:text-2xl text-gray-400">
        Building Robust Software Solutions
      </p>

      <div className="flex items-center justify-center gap-4">
        <SocialLink
          href="https://linkedin.com/in/lionel-arce"
          icon={<Linkedin />}
          label="LinkedIn"
        />
        <SocialLink
          href="https://github.com/lioarce01"
          icon={<Github />}
          label="GitHub"
        />
        <SocialLink
          href="/Profile.pdf"
          icon={<FileDown />}
          label="Resume"
          download
        />
      </div>
    </div>

    <button
      onClick={() => onScroll("about")}
      className="absolute bottom-12 animate-bounce"
      aria-label="Scroll to content"
    >
      <ChevronDown className="w-8 h-8 text-gray-400 mb-7" />
    </button>
  </section>
);

export default Hero;
