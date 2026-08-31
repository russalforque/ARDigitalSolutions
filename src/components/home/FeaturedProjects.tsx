import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectGrid from "../projects/ProjectGrid";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section className="border-t border-white/10 py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Selected work"
            title="Built for impact."
            animateTitle={true}
          />

          <Link
            to="/projects"
            className="text-xs sm:text-sm text-neutral-400 transition hover:text-white whitespace-nowrap"
          >
            View all projects →
          </Link>
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <ProjectGrid projects={featured} />
        </div>
      </Container>
    </section>
  );
}