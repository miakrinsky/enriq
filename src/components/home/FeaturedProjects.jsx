import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import FeaturedProjectCard from "../gallery/Featuredprojectcard";

function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <div className="px-4 py-12 md:py-16 ">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-neutral-900 mb-4">
          הפרויקטים שלנו מדברים בעד עצמם
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
          מדירות מוזנחות למניבות רווח - ראו את השינוי
        </p>
      </div>

      {/* FIXED: Changed grid to sm:grid-cols-2 lg:grid-cols-3 for better visual stability on tablets/small laptops */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 md:gap-8 mb-10">
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
