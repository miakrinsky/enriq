import Button from "../ui/Button";
import { NavLink } from "react-router-dom";
import { Buildings, Wrench, Handshake } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Buildings size={48} weight="duotone" />,
      title: 'תיווך נדל"ן להשקעה',
      description:
        "מוצאים עבורכם את הדירות עם הפוטנציאל הגבוה ביותר. מתמחים בזיהוי הזדמנות טרום השוק.",
      mobileDelay: "0ms",
    },
    {
      icon: <Wrench size={48} weight="duotone" />,
      title: "שיפוצים חכמים",
      description:
        "שיפוצים ממוקדי תשואה - משקיעים רק במה שמגדיל את שווי הנכס. עבודה מקצועית, בזמן ובתקציב.",
      mobileDelay: "250ms",
    },
    {
      icon: <Handshake size={48} weight="duotone" />,
      title: "ליווי משקיעים",
      description:
        "מהרכישה ועד ההשכרה - מלווים אתכם בכל התהליך. ייעוץ, תכנון, וניהול פרויקט מלא.",
      mobileDelay: "500ms",
    },
  ];

  return (
    <div ref={sectionRef} className="py-12 md:py-16 overflow-hidden">
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-12 md:mb-20 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        השירותים שלנו
      </h2>

      {/* Desktop: Row, Mobile: Stack */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-20 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{
              animationDelay:
                isVisible && isMobile ? service.mobileDelay : "0ms",
              animationFillMode: "forwards",
            }}
          >
            {/* Floating Icon Container */}
            <div className="relative mb-6 flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-75"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-white p-5 md:p-6 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <div className="text-purple-600 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Title with underline effect */}
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 md:mb-4 relative inline-block">
              <span className="relative z-10">{service.title}</span>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-purple-600 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"></div>
            </h3>

            {/* Description */}
            <p className="text-neutral-600 leading-relaxed text-lg md:text-base px-2 group-hover:text-neutral-700 transition-colors duration-300 max-w-2xl mx-auto">
              {service.description}
            </p>

            {/* Decorative line */}
            <div className="mt-6 mx-auto w-12 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      {/* <div
        className={`text-center bg-gradient-to-r from-purple-50 to-neutral-50 p-8 md:p-12 rounded-2xl mx-4 ${
          isVisible ? "animate-fade-in-delayed" : "opacity-0"
        }`}
        style={{
          animationDelay: isVisible && isMobile ? "750ms" : "0ms",
          animationFillMode: "forwards",
        }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 md:mb-4 px-4">
          מוכנים להתחיל את ההשקעה הבאה שלכם?
        </h3>
        <p className="text-neutral-600 mb-6 md:mb-8 text-base md:text-lg px-4">
          נשמח לשמוע על הפרויקט שלכם ולעזור להפוך אותו למציאות
        </p>
        <NavLink to="/contact">
          <Button className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg transform hover:scale-105 transition-transform duration-200 shadow-lg">
            דברו איתנו עכשיו
          </Button>
        </NavLink>
      </div> */}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.9s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeInDelayed 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Services;
