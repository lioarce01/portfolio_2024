"use client";

import React from "react";
//@ts-ignore
import { ChevronRight } from "lucide-react";

import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, isActive, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg mb-3 cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-white/10 border-l-4 border-blue-500"
          : "hover:bg-white/5 border-l-4 border-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <ChevronRight
          className={`w-5 h-5 transition-transform ${
            isActive ? "rotate-90" : ""
          }`}
        />
      </div>
      <p className="text-sm text-gray-400 mt-2 line-clamp-2">
        {project.description}
      </p>
      <div className="flex gap-2 mt-3">
        {project.tech_stack_card?.split(",").map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-full bg-white/5 text-gray-300"
          >
            {tech.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
