import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function FeaturedProjects() {
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
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="bg-gradient-to-br from-neutral-200 to-neutral-300 h-80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <p className="text-neutral-500 z-10">תמונה לפני/אחרי {item}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-semibold">פרויקט {item}</p>
              <p className="text-neutral-200 text-sm">הדר, חיפה</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <NavLink to="/gallery">
          <Button className="px-8 py-3 transform hover:scale-105 transition-transform duration-200">
            ראו את כל הפרויקטים →
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default FeaturedProjects;
