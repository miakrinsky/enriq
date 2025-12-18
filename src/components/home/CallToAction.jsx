import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function CallToAction() {
  return (
    <div className="px-4 text-center py-10 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>

          {/* FIXED: Reduced padding for better desktop scaling */}
          <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-10 md:p-14 shadow-2xl">
            {/* FIXED: Reduced font size for H2 on desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-6">
              בואו נהפוך את החלום שלכם למציאות
            </h2>

            {/* FIXED: Reduced font size for subtitle on desktop */}
            <p className="text-lg md:text-xl text-purple-100 mb-8 md:mb-10 max-w-2xl mx-auto">
              צרו קשר עוד היום לקבלת ייעוץ מקצועי וללא התחייבות
            </p>

            <NavLink to="/contact">
              <Button className="bg-stone-400 text-purple-600 hover:bg-neutral-50 px-10 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl">
                מוכנים להתחיל?
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
