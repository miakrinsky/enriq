import Button from "../ui/Button";

function ContactForm() {
  return (
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
  );
}

export default ContactForm;
