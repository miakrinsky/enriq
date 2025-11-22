import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import FeaturedProjectCard from "../gallery/Featuredprojectcard";

function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
          הפרויקטים שלנו מדברים בעד עצמם
        </h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          מדירות מוזנחות למניבות רווח - ראו את השינוי
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featured.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center">
        <NavLink to="/gallery">
          <Button className="px-8 py-3 transform hover:scale-105 transition-transform duration-200">
            ראו את כל הפרויקטים ←
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default FeaturedProjects;
