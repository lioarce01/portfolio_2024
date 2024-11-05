"use client";

import React from "react";
//@ts-ignore
import { Code2, Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="py-24 px-6 bg-black/30">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Experience_
      </h2>

      <div className="relative border-l-2 border-blue-500/30 pl-8 ml-4">
        <ExperienceItem
          icon={<Briefcase />}
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
  <div className="relative mb-12">
    <div className="absolute -left-[44px] p-2 bg-blue-500 rounded-full">
      {icon}
    </div>
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{period}</p>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
