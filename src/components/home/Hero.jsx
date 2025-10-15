import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function Hero() {
  return (
    <div className="text-center py-20 px-4">
      <div className="animate-fade-in">
        <h1 className=" md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
          הפכו דירות השקעה
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            למניבות רווח
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          מתמחים בשיפוצים ותיווך נדל"ן בחיפה - מלווים משקיעים מהרכישה ועד להשכרה
          הראשונה
        </p>

        <NavLink to="/contact">
          <Button className="px-10 py-4 text-lg transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl">
            קבלו הצעת מחיר חינם
          </Button>
        </NavLink>
      </div>

      <div className="mt-20 max-w-5xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-purple-50 via-white to-neutral-100 rounded-2xl h-96 flex items-center justify-center shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <p className="text-neutral-400 text-lg z-10">
              [תמונת Hero / וידאו רקע]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
