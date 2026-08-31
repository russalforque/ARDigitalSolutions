import { useState } from "react";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectModal from "../components/projects/ProjectModal";
import {
  projectCategories,
  projects,
} from "../data/projects";
import type { Project } from "../types/project";

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <>
      <section className="pt-10 sm:pt-16 md:pt-28 pb-16 sm:pb-20 lg:pt-52 lg:pb-32">
        <Container>
          <SectionTitle
            eyebrow="Selected work"
            title="Projects that push digital forward."
            description="A selection of immersive experiences, digital products, and software solutions."
            animateTitle={true}
          />

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <ProjectFilter
              categories={projectCategories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>

          <div className="mt-10 sm:mt-12 lg:mt-14">
            <ProjectGrid
              projects={filteredProjects}
              onProjectClick={setSelectedProject}
            />
          </div>
        </Container>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}