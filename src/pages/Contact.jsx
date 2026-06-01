import Section from "../components/ui/Section";
import ContactForm from "../components/forms/ContactForm";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
  Rocket,
} from "phosphor-react";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            בואו נדבר על ההשקעה הבאה שלכם
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            מלאו את הפרטים ונחזור אליכם בהקדם עם ייעוץ ראשוני חינם
          </p>
        </div>
      </Section>

      {/* Contact Form & Info Section */}
      <Section className="py-8 md:py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
            {/* Contact Info - Desktop: Left, Mobile: Below Form */}
            <div className="order-2 lg:order-2 flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  פרטי התקשרות
                </h2>
                <p className="text-base md:text-lg text-neutral-600">
                  נשמח לענות על כל שאלה ולעזור לכם להתחיל את המסע להשקעה מוצלחת
                </p>
              </div>

              <address className="not-italic flex-1 grid grid-rows-4 gap-4">
                {/* Phone - Both numbers side by side */}
                <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 hover:shadow-2xl transition-all duration-300 border border-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 p-2.5 rounded-lg">
                        <Phone
                          size={20}
                          weight="duotone"
                          className="text-purple-400"
                        />
                      </div>
                      <h3 className="font-bold text-white text-base">
                        התקשרו אלינו
                      </h3>
                    </div>
                    <div className="flex gap-4 mr-11 flex-wrap">
                      <a
                        href="tel:+972527500943"
                        className="text-white/90 hover:text-purple-400 transition-colors text-lg font-semibold"
                        aria-label="התקשר למספר 052-7500-943"
                      >
                        052-7500-943
                      </a>
                      <div className="w-1 h-6 bg-white/20 rounded-full"></div>
                      <a
                        href="tel:+972527500941"
                        className="text-white/90 hover:text-purple-400 transition-colors text-lg font-semibold"
                        aria-label="התקשר למספר 052-7500-941"
                      >
                        052-7500-941
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/972527500943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 hover:shadow-2xl transition-all duration-300 border border-white/10 block"
                  aria-label="שלח הודעת WhatsApp"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 p-2.5 rounded-lg">
                        <WhatsappLogo
                          size={20}
                          weight="duotone"
                          className="text-emerald-400"
                        />
                      </div>
                      <h3 className="font-bold text-white text-base">
                        WhatsApp
                      </h3>
                    </div>
                    <div className="mr-11">
                      <p className="text-white/90 text-base font-medium">
                        שלחו הודעה | תגובה מהירה
                      </p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:enriq.office@gmail.com"
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 hover:shadow-2xl transition-all duration-300 border border-white/10 block"
                  aria-label="שלח אימייל ל-enriq.office@gmail.com"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 p-2.5 rounded-lg">
                        <EnvelopeSimple
                          size={20}
                          weight="duotone"
                          className="text-purple-400"
                        />
                      </div>
                      <h3 className="font-bold text-white text-base">אימייל</h3>
                    </div>
                    <div className="mr-11">
                      <p
                        className="text-white/90 text-base font-medium break-all mb-1"
                        dir="rtl"
                      >
                        enriq.office@gmail.com{" "}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 border border-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 p-2.5 rounded-lg">
                        <MapPin
                          size={20}
                          weight="duotone"
                          className="text-purple-400"
                        />
                      </div>
                      <h3 className="font-bold text-white text-base">מיקום</h3>
                    </div>
                    <div className="mr-11">
                      <p className="text-white/90 text-base font-medium mb-1">
                        חיפה, ישראל
                      </p>
                    </div>
                  </div>
                </div>
              </address>
            </div>

            {/* Contact Form - Mobile: First, Desktop: Right */}
            <div className="order-1 lg:order-1 h-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      {/* <Section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-12 lg:p-16 shadow-2xl border border-white/10">
        
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-purple-700/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-purple-500/20 backdrop-blur-sm rounded-2xl mb-6 border border-purple-400/30">
                <Rocket
                  size={32}
                  weight="duotone"
                  className="text-purple-400 md:w-10 md:h-10"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                מוכנים להתחיל?
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                בואו נפגש ונדבר על איך אנחנו יכולים לעזור לכם להגשים את החלום
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+972527500943"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
                  aria-label="התקשר עכשיו ל-052-7500-943"
                >
                  <Phone size={20} weight="bold" />
                  <span>התקשרו עכשיו</span>
                </a>
                <a
                  href="https://wa.me/972527500943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/30 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transform hover:scale-105 transition-all duration-200"
                  aria-label="שלח הודעת WhatsApp"
                >
                  <WhatsappLogo size={20} weight="bold" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>*/}
    </>
  );
}

export default Contact;
