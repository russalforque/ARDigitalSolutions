import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Badge from "../components/common/Badge";
import Container from "../components/common/Container";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium">
            Project not found
          </h1>

          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-400"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <Container>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white"
        >
          <ArrowLeft size={15} />
          All projects
        </Link>

        <div className="mt-12">
          <Badge>{project.category}</Badge>

          <h1 className="mt-6 max-w-5xl text-5xl font-medium tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-neutral-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_300px]">
          <div>
            <p className="max-w-3xl text-xl leading-9 text-neutral-400">
              {project.fullDescription}
            </p>

            <div className="mt-14">
              <h2 className="text-sm uppercase tracking-wider text-neutral-600">
                Services
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <Badge key={service}>{service}</Badge>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm uppercase tracking-wider text-neutral-600">
                Technologies
              </h2>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                Client
              </p>
              <p className="mt-2">{project.client}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-neutral-600">
                Year
              </p>
              <p className="mt-2">{project.year}</p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm"
            >
              Visit project
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}