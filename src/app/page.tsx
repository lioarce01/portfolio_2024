"use client";

import React from "react";
//@ts-ignore
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden scroll-smooth">
      <Hero onScroll={scrollToSection} />
      <About />
      <Experience />
      <Education />
    </div>
  );
}
