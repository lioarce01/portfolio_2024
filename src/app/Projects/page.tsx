"use client";

import ProjectDetail from "@/components/ProjectDetail";
import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="flex">
      <ProjectDetail />

      <Projects />
    </div>
  );
};

export default ProjectsPage;
