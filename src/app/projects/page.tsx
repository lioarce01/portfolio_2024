"use client";

import React, { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectDetail from "../../components/ProjectDetail";
import { projects } from "../../data/projects";
//@ts-ignore
import { Boxes } from "lucide-react";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="flex h-screen bg-[#0a0a0a] text-white">
      <aside className="w-[400px] min-w-[400px] border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Boxes className="w-6 h-6 text-blue-500" />
            <h2 className="text-xl font-semibold">Projects</h2>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {projects?.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              isActive={selectedProject.name === project.name}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </aside>

      <ProjectDetail project={selectedProject} />
    </div>
  );
};

export default ProjectsPage;
