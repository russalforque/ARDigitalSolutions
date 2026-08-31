import type { Project } from "../../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export default function ProjectGrid({
  projects,
  onProjectClick,
}: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={project.id}
          style={{
            '--delay': `${index * 100}ms`
          } as React.CSSProperties}
        >
          <ProjectCard
            project={project}
            onClick={() => onProjectClick?.(project)}
          />
        </div>
      ))}
    </div>
  );
}