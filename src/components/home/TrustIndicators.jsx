import {
  CheckCircle,
  Buildings,
  ArrowsClockwise,
  TrendUp,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";

function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const indicators = [
    {
      icon: <CheckCircle size={48} weight="duotone" />,
      title: "ניסיון מוכח",
      description: "עשרות דירות שנרכשו ושופצו דרכינו",
      delay: "0ms",
    },
    {
      icon: <Buildings size={48} weight="duotone" />,
      title: 'היכרות אישית עם השקעות נדל"ן בחיפה',
      description: "אנחנו בעלים של מספר רב של נכסים, ביניהם גם בניין שלם",
      delay: "250ms",
    },
    {
      icon: <ArrowsClockwise size={48} weight="duotone" />,
      title: "שירות מקצה לקצה",
      description: "איתור עסקאות, ליווי ברכישה, שיפוץ, השכרה ומכירה עתידית",
      delay: "500ms",
    },
    {
      icon: <TrendUp size={48} weight="duotone" />,
      title: "תשואה מקסימלית",
      description:
        "עבודה מקצועית מביאה לתוצאות טובות בפער משמעותי, אם יודעים מה נכון לעשות. גם בשכירות וגם במכירה עתידית",
      delay: "750ms",
    },
  ];

  return (
    <div ref={sectionRef} className=" py-12 md:py-16 overflow-hidden">
      <h2
        // FIXED: Reduced desktop font size for H2 (md:text-4xl) and adjusted bottom margin
        className={`text-3xl sm:text-4xl md:text-4xl font-bold text-neutral-900 text-center mb-10 md:mb-16 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        למה משקיעים בוחרים בנו?
      </h2>

      {/* Grid structure remains optimized for mobile and scales up */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {indicators.map((item, index) => (
          <div
            key={index}
            className={`group text-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{
              animationDelay: isVisible ? item.delay : "0ms",
              animationFillMode: "forwards",
            }}
          >
            {/* Floating Icon Container */}
            <div className="relative mb-6 flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-75"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-white p-5 md:p-6 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <div className="text-purple-600 transform transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Title with underline effect */}
            <h3 className="text-xl md:text-xl font-bold text-neutral-900 mb-3 md:mb-4 relative inline-block">
              <span className="relative z-10">{item.title}</span>
              <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-purple-600 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"></div>
            </h3>

            {/* FIXED: Ensure text is readable (text-base) on mobile */}
            <p className="text-neutral-600 leading-relaxed text-base md:text-base px-2 group-hover:text-neutral-700 transition-colors duration-300">
              {item.description}
            </p>

            {/* Decorative line */}
            <div className="mt-6 mx-auto w-12 h-1 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

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

        .animate-slide-up {
          animation: slideUp 0.9s ease-out;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default TrustIndicators;
