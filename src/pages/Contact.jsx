import Section from "../components/ui/Section";
import Button from "../components/ui/Button";

function Contact() {
  return (
    <>
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-8">
            בואו נדבר על ההשקעה הבאה שלכם
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-600 leading-relaxed">
            מלאו את הפרטים ונחזור אליכם בהקדם עם ייעוץ ראשוני חינם
          </p>
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                  פרטי התקשרות
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  נשמח לענות על כל שאלה ולעזור לכם להתחיל את המסע להשקעה מוצלחת
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 mb-2">טלפון</h3>
                    <a
                      href="tel:0527500943"
                      className="text-neutral-600 hover:text-purple-600 transition-colors duration-200 block text-lg"
                    >
                      052-7500-943
                    </a>
                    <p className="text-sm text-neutral-500 mt-2">
                      א'-ה' 9:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 mb-2">אימייל</h3>
                    <a
                      href="mailto:info@enriq.co.il"
                      className="text-neutral-600 hover:text-purple-600 transition-colors duration-200 block break-all text-lg"
                    >
                      info@enriq.co.il
                    </a>
                    <p className="text-sm text-neutral-500 mt-2">
                      נענה תוך 24 שעות
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 mb-2">מיקום</h3>
                    <p className="text-neutral-600 text-lg">חיפה, ישראל</p>
                    <p className="text-sm text-neutral-500 mt-2">
                      מתמחים בשכונת הדר
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-purple-100 p-4 rounded-xl group-hover:bg-purple-200 transition-colors duration-300 flex-shrink-0">
                    <span className="text-3xl">💬</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-neutral-900 mb-2">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/972527500943"
                      className="text-neutral-600 hover:text-purple-600 transition-colors duration-200 block text-lg"
                    >
                      שלחו הודעה
                    </a>
                    <p className="text-sm text-neutral-500 mt-2">תגובה מהירה</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                שלחו לנו הודעה
              </h2>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-neutral-700 mb-3"
                  >
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="איך קוראים לכם?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-neutral-700 mb-3"
                  >
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="050-XXX-XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-neutral-700 mb-3"
                  >
                    אימייל *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-neutral-700 mb-3"
                  >
                    ספרו לנו על ההשקעה שלכם
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
                    placeholder="מה אתם מחפשים? איזה תקציב? יש כבר דירה בראש?"
                  ></textarea>
                </div>

                <Button className="w-full py-4 text-lg">שלחו הודעה</Button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-4xl font-bold mb-6">מוכנים להתחיל?</h2>
              <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                בואו נפגש ונדבר על איך אנחנו יכולים לעזור לכם להגשים את החלום
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:0527500943"
                  className="inline-block bg-white text-purple-600 hover:bg-neutral-50 px-8 py-4 rounded-lg font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  התקשרו עכשיו
                </a>
                <a
                  href="https://wa.me/972527500943"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Contact;
