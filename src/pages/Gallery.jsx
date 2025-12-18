import { useState } from "react";
import { projects } from "../data/projects";
import Section from "../components/ui/Section";
import ProjectCard from "../components/gallery/ProjectCard";
import ProjectModal from "../components/gallery/ProjectModal";

function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const openModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setInitialImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setInitialImageIndex(0);
  };

  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6 md:mb-8">
            הפרויקטים שלנו{" "}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 md:mb-8"></div>
        </div>
      </Section>
      <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-2">
        כל פרויקט מספר סיפור של שינוי - מדירה מוזנחת לנכס מניב. גללו למטה לראות
        את התוצאות.
      </p>

      {/* Mobile: Compact Cards, Desktop: Full View */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Grid of compact cards */}
          <div className="grid grid-cols-1 md:hidden gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project, 0)}
                className="cursor-pointer"
              >
                <ProjectCard project={project} compact={true} />
              </div>
            ))}
          </div>

          {/* Desktop: Full detailed cards with gallery */}
          <div className="hidden md:block space-y-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                compact={false}
                onOpenModal={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for mobile and desktop */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
          initialImageIndex={initialImageIndex}
        />
      )}
    </>
  );
}

export default Gallery;
