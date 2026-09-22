import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "../../types/project";
import Badge from "../common/Badge";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-80 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-neutral-950"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="aspect-video w-full object-cover"
          />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 backdrop-blur transition-colors hover:bg-black/90"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-10 p-7 lg:grid-cols-[1fr_280px] lg:p-10">
          <div>
            <Badge>{project.category}</Badge>

            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              {project.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-7 text-sm">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-600">
                Client
              </p>

              <p>{project.client}</p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-600">
                Year
              </p>

              <p>{project.year}</p>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-600">
                Services
              </p>

              <div className="flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <Badge key={service}>{service}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-600">
                Technology
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border-b border-white/20 pb-2 pt-2 text-white transition-colors hover:text-neutral-300"
              >
                View project
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <p className="pt-2 text-sm text-neutral-600">
                Project not publicly available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}