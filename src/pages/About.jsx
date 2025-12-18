import Section from "../components/ui/Section";
import article from "../assets/article.png";
import {
  MagnifyingGlass,
  Briefcase,
  Target,
  Trophy,
  Check,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";

function About() {
  const [valuesVisible, setValuesVisible] = useState(false);
  const [whyUsVisible, setWhyUsVisible] = useState(false);
  const valuesRef = useRef(null);
  const whyUsRef = useRef(null);

  useEffect(() => {
    const valuesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const whyUsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhyUsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (valuesRef.current) {
      valuesObserver.observe(valuesRef.current);
    }
    if (whyUsRef.current) {
      whyUsObserver.observe(whyUsRef.current);
    }

    return () => {
      if (valuesRef.current) {
        valuesObserver.unobserve(valuesRef.current);
      }
      if (whyUsRef.current) {
        whyUsObserver.unobserve(whyUsRef.current);
      }
    };
  }, []);

  const values = [
    {
      icon: <MagnifyingGlass size={48} weight="duotone" />,
      title: "שקיפות מלאה",
      description: "תמיד תדעו בדיוק מה קורה עם ההשקעה שלכם",
      delay: "0ms",
    },
    {
      icon: <Briefcase size={48} weight="duotone" />,
      title: "מקצועיות",
      description: "עובדים רק עם בעלי מקצוע מנוסים ואמינים",
      delay: "250ms",
    },
    {
      icon: <Target size={48} weight="duotone" />,
      title: "תוצאות",
      description: "מחויבים לתשואה מקסימלית על כל שקל שמושקע",
      delay: "500ms",
    },
  ];

  const whyWorkWithUs = [
    {
      title: "ניסיון מוכח",
      description: "עשרות פרויקטים מוצלחים בשכונת הדר",
      delay: "0ms",
    },
    {
      title: "רשת קשרים",
      description: "גישה לדירות לפני שהן מגיעות לשוק",
      delay: "150ms",
    },
    {
      title: "ליווי מלא",
      description: "מהעסקה הראשונה ועד ההשכרה",
      delay: "300ms",
    },
    {
      title: "שקיפות מלאה",
      description: "תמיד בתמונה של ההשקעה שלכם",
      delay: "450ms",
    },
  ];

  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6 md:mb-8">
            קצת עלינו
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6 md:mb-8"></div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image Block: Made the height consistent but manageable on mobile */}
            <div>
              <div className="bg-gradient-to-br from-purple-100 to-neutral-200 rounded-xl h-60 md:h-96 flex items-center justify-center shadow-lg">
                <p className="text-neutral-400 text-sm md:text-lg">
                  [תמונה של הצוות / המשרד]
                </p>
              </div>
            </div>

            {/* Text Block: Centered H2 title for mobile */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 md:mb-6 text-center md:text-right">
                מי אנחנו?
              </h2>
              <div className="space-y-3 md:space-y-6 text-base text-neutral-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-purple-600">
                    Enriq Group
                  </span>{" "}
                  הוקמה מתוך הבנה שהשקעה בנדל"ן היא יותר מסתם רכישת דירה - היא
                  אומנות של זיהוי הזדמנויות, ביצוע חכם, וניהול מקצועי.
                </p>
                <p>
                  אנחנו מתמחים בשיפוץ ותיווך דירות השקעה בחיפה, עם דגש על שכונת
                  הדר המתפתחת. כל פרויקט מתוכנן בקפידה כדי למקסם את התשואה על
                  ההשקעה, תוך שמירה על סטנדרטים גבוהים של ביצוע.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION: Press Coverage with Image Preview */}
      <Section bg="gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
              אנחנו עושים את מה שאנחנו אומרים
            </h2>

            {/* Image Link Block */}
            <div className="max-w-xl mx-auto">
              <a
                href="https://www.mako.co.il/living-architecture/local/Article-729cd589a460291026.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] border-4 border-transparent hover:border-purple-600"
                aria-label="קראו את הכתבה על השיפוץ במאקו"
              >
                <img
                  src={article}
                  alt="Preview image for Mako article about apartment renovation in Haifa"
                  className="w-full h-auto object-cover"
                />
              </a>
              {/* Text link wrapping the entire paragraph */}
              <a
                href="https://www.mako.co.il/living-architecture/local/Article-729cd589a460291026.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm sm:text-base text-neutral-600 mt-4 hover:text-purple-600 transition-colors duration-300"
              >
                <span className="font-semibold text-purple-600 hover:underline transition-colors duration-300">
                  לחצו כאן
                </span>{" "}
                כדי לקרוא את הכתבה המלאה במאקו על שיפוץ דירת השקעה בחיפה.
              </a>
            </div>
            {/* End Image Link Block */}
          </div>
        </div>
      </Section>
      {/* END SECTION: Press Coverage with Image Preview */}

      <Section bg="gray">
        <div ref={valuesRef} className="max-w-6xl mx-auto px-4">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-8 md:mb-12 ${
              valuesVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            הערכים שלנו
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group text-center ${
                  valuesVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: valuesVisible ? value.delay : "0ms",
                  animationFillMode: "forwards",
                }}
              >
                {/* Floating Icon Container */}
                <div className="relative mb-4 flex justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-75"></div>
                  <div className="relative bg-gradient-to-br from-purple-50 to-white p-4 md:p-6 rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="text-purple-600 transform transition-transform duration-500 group-hover:scale-110">
                      {value.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 relative inline-block">
                  <span className="relative z-10">{value.title}</span>
                  <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-l from-purple-600 to-purple-400 group-hover:w-full transition-all duration-500 ease-out"></div>
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base px-2 group-hover:text-neutral-700 transition-colors duration-300">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 mx-auto w-10 h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div ref={whyUsRef} className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl md:rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center ${
                  whyUsVisible ? "animate-fade-in" : "opacity-0"
                }`}
              >
                למה לעבוד איתנו?
              </h2>

              {/* FIX: Centering text and stacking elements for mobile. Icons disappear on mobile (hidden) and reappear on md screen. */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 text-base w-full max-w-lg mx-auto">
                {whyWorkWithUs.map((item, index) => (
                  <div
                    key={index}
                    // Default to centralized, stacked structure for mobile
                    className={`flex flex-col items-center text-center ${
                      // Switch to flex-row (horizontal) and right-aligned text on medium screens and up
                      // And show icons only from medium screens
                      "md:flex-row md:items-start md:text-right md:gap-3"
                    } ${whyUsVisible ? "animate-slide-up" : "opacity-0"}`}
                    style={{
                      animationDelay: whyUsVisible ? item.delay : "0ms",
                      animationFillMode: "forwards",
                    }}
                  >
                    <Check
                      size={20}
                      weight="bold"
                      color="#a78bfa"
                      // Hide checkmark on small screens, show on medium screens and up
                      className="hidden md:flex-shrink-0 md:block md:mt-1 md:w-7 md:h-7"
                    />
                    <div className="flex-grow">
                      <h4 className="font-bold mb-1 text-purple-300 text-base sm:text-lg">
                        {item.title}
                      </h4>
                      <p className="text-neutral-300 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="purple">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-500 mb-4">
            מוכנים להצטרף למשפחה?
          </h2>
          <p className="text-base sm:text-lg text-purple-700 mb-8">
            בואו נדבר על איך אנחנו יכולים לעזור לכם להשיג את היעדים שלכם
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 hover:bg-neutral-50 px-8 py-3 rounded-lg font-bold text-base transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            צרו קשר עכשיו
          </a>
        </div>
      </Section>

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
    </>
  );
}

export default About;
