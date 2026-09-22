import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/project";
import Badge from "../common/Badge";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      className="group cursor-pointer opacity-0 translate-y-2 transition-all duration-700 ease-out animate-[fadeInUp_0.7s_ease-out_forwards] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
      style={{
        animationDelay: 'var(--delay, 0ms)'
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-16/10 overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl bg-neutral-900 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-lg active:scale-[0.98]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
        />

        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 ease-out group-hover:bg-black/0" />

        <div className="absolute right-3 sm:right-5 top-3 sm:top-5 flex h-8 sm:h-10 w-8 sm:w-10 items-center justify-center rounded-full bg-black/60 opacity-0 backdrop-blur transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-110">
          <ArrowUpRight 
            size={16} 
            className="sm:w-4.25 sm:h-4.25 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
          />
        </div>
      </div>

      <div className="mt-3 sm:mt-4 lg:mt-5 flex flex-col gap-3 sm:gap-4 transition-all duration-300 ease-out">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium leading-tight text-white transition-colors duration-300 ease-out group-hover:text-neutral-100">
              {project.title}
            </h3>

            <p className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-sm text-neutral-500 line-clamp-2 transition-colors duration-300 ease-out group-hover:text-neutral-400">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Badge>{project.category}</Badge>
        </div>
      </div>
    </article>
  );
}