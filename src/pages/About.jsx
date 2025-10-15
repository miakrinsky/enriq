import Section from "../components/ui/Section";

function About() {
  const values = [
    {
      icon: "🔍",
      title: "שקיפות מלאה",
      description: "תמיד תדעו בדיוק מה קורה עם ההשקעה שלכם",
    },
    {
      icon: "💼",
      title: "מקצועיות",
      description: "עובדים רק עם בעלי מקצוע מנוסים ואמינים",
    },
    {
      icon: "🎯",
      title: "תוצאות",
      description: "מחויבים לתשואה מקסימלית על כל שקל שמושקע",
    },
  ];

  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto text-center py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8">
            קצת עלינו
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-12"></div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-br from-purple-100 to-neutral-200 rounded-2xl h-96 flex items-center justify-center shadow-lg">
                <p className="text-neutral-400 text-lg">
                  [תמונה של הצוות / המשרד]
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                מי אנחנו?
              </h2>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
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

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            החזון שלנו
          </h2>
          <p className="text-2xl text-neutral-600 leading-relaxed">
            להפוך כל השקעה בנדל"ן למניבה, יציבה, ומשתלמת - תוך ליווי צמוד
            ומקצועי של המשקיע בכל שלב
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-purple-100 rounded-3xl blur-2xl opacity-30"></div>
          <div className="relative bg-gradient-to-br from-purple-50 to-white p-12 rounded-3xl shadow-xl border border-purple-100">
            <div className="text-6xl text-center mb-6">🏆</div>
            <p className="text-xl text-neutral-700 text-center leading-relaxed">
              אנחנו לא רק מוכרים דירות או משפצים אותן - אנחנו בונים עתיד כלכלי
              יציב עבור המשקיעים שלנו
            </p>
          </div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-16">
            הערכים שלנו
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {value.title}
                </h3>

                <p className="text-neutral-600 leading-relaxed text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                למה לעבוד איתנו?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2 text-purple-300">
                      ניסיון מוכח
                    </h4>
                    <p className="text-neutral-300">
                      עשרות פרויקטים מוצלחים בשכונת הדר
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2 text-purple-300">
                      רשת קשרים
                    </h4>
                    <p className="text-neutral-300">
                      גישה לדירות לפני שהן מגיעות לשוק
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2 text-purple-300">
                      ליווי מלא
                    </h4>
                    <p className="text-neutral-300">
                      מהעסקה הראשונה ועד ההשכרה
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">✓</div>
                  <div>
                    <h4 className="font-bold mb-2 text-purple-300">
                      שקיפות מלאה
                    </h4>
                    <p className="text-neutral-300">
                      תמיד בתמונה של ההשקעה שלכם
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="purple">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-500 mb-6">
            מוכנים להצטרף למשפחה?
          </h2>
          <p className="text-xl text-purple-400 mb-10">
            בואו נדבר על איך אנחנו יכולים לעזור לכם להשיג את היעדים שלכם
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-100 text-purple-600 hover:bg-neutral-500/50 px-12 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            צרו קשר עכשיו
          </a>
        </div>
      </Section>
    </>
  );
}

export default About;
