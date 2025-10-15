import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

function CallToAction() {
  return (
    <div className="text-center py-20">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl blur-2xl opacity-20"></div>

          <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              בואו נהפוך את החלום שלכם למציאות
            </h2>

            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              צרו קשר עוד היום לקבלת ייעוץ מקצועי וללא התחייבות
            </p>

            <NavLink to="/contact">
              <Button className="bg-stone-400 text-purple-600 hover:bg-neutral-50 px-12 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl">
                קבלו הצעת מחיר חינם
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
