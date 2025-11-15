import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import ProjectCard from "../gallery/ProjectCard";

function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 md:mb-6">
          הפרויקטים שלנו מדברים בעד עצמם
        </h2>
        <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto px-4">
          מדירות מוזנחות למניבות רווח - ראו את השינוי
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center">
        <NavLink to="/gallery">
          <Button className="px-6 md:px-8 py-2.5 md:py-3 transform hover:scale-105 transition-transform duration-200">
            ראו את כל הפרויקטים →
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default FeaturedProjects;
