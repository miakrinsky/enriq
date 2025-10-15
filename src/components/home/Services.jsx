import Button from "../ui/Button";
import { NavLink } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: "🏘️",
      title: 'תיווך נדל"ן להשקעה',
      description:
        "מוצאים עבורכם את הדירות עם הפוטנציאל הגבוה ביותר. מתמחים בזיהוי הזדמנות טרום השוק.",
    },
    {
      icon: "🔨",
      title: "שיפוצים חכמים",
      description:
        "שיפוצים ממוקדי תשואה - משקיעים רק במה שמגדיל את שווי הנכס. עבודה מקצועית, בזמן ובתקציב.",
    },
    {
      icon: "🤝",
      title: "ליווי משקיעים",
      description:
        "מהרכישה ועד ההשכרה - מלווים אתכם בכל התהליך. ייעוץ, תכנון, וניהול פרויקט מלא.",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-20">
        השירותים שלנו
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-white to-neutral-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200 hover:border-purple-200"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-purple-400 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
              {service.title}
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center bg-gradient-to-r from-purple-50 to-neutral-50 p-12 rounded-2xl">
        <h3 className="text-3xl font-bold text-neutral-900 mb-4">
          מוכנים להתחיל את ההשקעה הבאה שלכם?
        </h3>
        <p className="text-neutral-600 mb-8 text-lg">
          נשמח לשמוע על הפרויקט שלכם ולעזור להפוך אותו למציאות
        </p>
        <NavLink to="/contact">
          <Button className="px-10 py-4 text-lg transform hover:scale-105 transition-transform duration-200 shadow-lg">
            דברו איתנו עכשיו
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default Services;
