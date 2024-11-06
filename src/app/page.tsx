"use client";

import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaChevronDown,
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaCode,
} from "react-icons/fa";

export default function Component() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getAge = () => {
    return new Date().getFullYear() - new Date("May 01, 99").getFullYear();
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-gray-300 overflow-x-hidden scroll-smooth">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0c0c]/80 backdrop-blur-sm">
        <ul className="flex justify-center space-x-4 p-4">
          {["hero", "about", "experience", "education"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === section
                    ? "text-blue-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#0c0c0c] to-[#0c0c0c]" />
        <div className="relative space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Lionel Arce
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 animate-fade-in-up">
            Building Robust Software Solutions
          </p>
          <div className="flex items-center justify-center gap-4 animate-fade-in-up">
            <SocialLink
              href="https://linkedin.com/in/lionel-arce"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/lioarce01"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialLink
              href="/Profile.pdf"
              icon={<FaFileDownload />}
              label="Resume"
              download
            />
          </div>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 animate-bounce"
          aria-label="Scroll to content"
        >
          <FaChevronDown className="w-8 h-8 text-gray-500 mb-8" />
        </button>
      </section>

      <section id="about" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            About me_
          </h2>
          <div className="bg-[#1a1a1a] rounded-2xl p-8 backdrop-blur-sm transform transition-all duration-500 hover:scale-105">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Lionel, a {getAge()} year old full-stack developer with a
              passion for crafting exceptional web experiences. I specialize in
              building scalable applications that combine elegant design with
              robust functionality. Currently working as a freelancer, I'm
              constantly pushing the boundaries of what's possible in web
              development.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Experience_
          </h2>
          <div className="relative border-l-2 border-blue-500/30 pl-8 ml-4">
            <ExperienceItem
              icon={<FaBriefcase />}
              title="Freelance Software Developer"
              period="2022 - Present"
              description="Design, build, and deploy scalable applications using modern technologies. Specialize in full-stack development with React/Next.js and Node/Spring Boot."
              technologies={[
                "React/Next.js",
                "TypeScript",
                "Node",
                "Express",
                "Java",
                "Spring Boot",
                "MongoDB",
                "PostgreSQL",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="education" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Education_
          </h2>
          <div className="relative border-l-2 border-green-500/30 pl-8 ml-4 space-y-12">
            <EducationItem
              icon={<FaGraduationCap />}
              title="Computer Engineering"
              institution="Universidad Nacional de La Matanza"
              period="2020 - In progress"
            />
            <EducationItem
              icon={<FaBook />}
              title="Henry Bootcamp"
              institution="Henry"
              period="2022"
              description="Led agile team development of a social network with integrated crowdfunding for animal shelters. Focused on scalable architecture and clean code practices."
            />
            <EducationItem
              icon={<FaCode />}
              title="Solidity Smart Contracts Developer"
              institution="Udemy"
              period="2022"
              description="Specialized in developing and deploying secure smart contracts on Ethereum, creating user-friendly dApps with React integration."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  download?: boolean;
}

const SocialLink = ({ href, icon, label, download }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download}
    className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-colors duration-200"
    aria-label={label}
  >
    {icon}
  </a>
);

interface ExperienceItemProps {
  icon: React.ReactNode;
  title: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  icon,
  title,
  period,
  description,
  technologies,
}: ExperienceItemProps) => (
  <div className="relative mb-12 transform transition-all duration-500 hover:scale-105">
    <div className="absolute -left-[44px] p-2 bg-blue-600 rounded-full">
      {icon}
    </div>
    <div className="bg-[#1a1a1a] rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 mb-4">{period}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-blue-900/20 text-blue-300 border border-blue-800/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

interface EducationItemProps {
  icon: React.ReactNode;
  title: string;
  institution: string;
  period: string;
  description?: string;
}

const EducationItem = ({
  icon,
  title,
  institution,
  period,
  description,
}: EducationItemProps) => (
  <div className="relative transform transition-all duration-500 hover:scale-105">
    <div className="absolute -left-[44px] p-2 bg-green-600 rounded-full">
      {icon}
    </div>
    <div className="bg-[#1a1a1a] rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{title}</h3>
      <p className="text-gray-400 mb-3">
        {institution} · {period}
      </p>
      {description && <p className="text-gray-300">{description}</p>}
    </div>
  </div>
);
