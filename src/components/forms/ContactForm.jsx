import { useState } from "react";
import emailjs from "@emailjs/browser";
import { WarningCircle, CheckCircle, Spinner, XCircle } from "phosphor-react";
import Button from "../ui/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    mobile: false,
    email: false,
  });

  // ולידציה לנייד - 10 ספרות או +972 ועוד 9 ספרות
  const validateMobile = (mobile) => {
    const trimmed = mobile.trim();
    if (trimmed === "") {
      return "נא להזין מספר נייד";
    }

    const digitsOnly = trimmed.replace(/\D/g, "");

    if (trimmed.startsWith("+972")) {
      if (digitsOnly.length !== 12) {
        return "מספר עם +972 צריך להכיל 9 ספרות נוספות";
      }
      return "";
    }

    if (digitsOnly.length !== 10) {
      return "מספר נייד צריך להכיל 10 ספרות";
    }

    if (!digitsOnly.startsWith("05")) {
      return "מספר נייד צריך להתחיל ב-05";
    }

    return "";
  };

  // ולידציה לאימייל
  const validateEmail = (email) => {
    const trimmed = email.trim();
    if (trimmed === "") {
      return "";
    }

    const allowedCharsRegex = /^[a-zA-Z0-9@._-]*$/;
    if (!allowedCharsRegex.test(trimmed)) {
      return "כתובת אימייל צריכה להיות באנגלית בלבד";
    }

    if (
      trimmed.includes("..") ||
      trimmed.includes("@@") ||
      trimmed.includes("--") ||
      trimmed.includes("__")
    ) {
      return "כתובת אימייל לא יכולה להכיל תווים כפולים";
    }

    if (/^[._-]/.test(trimmed) || /[._-]$/.test(trimmed)) {
      return "כתובת אימייל לא יכולה להתחיל או להסתיים בתווים מיוחדים";
    }

    const emailRegex =
      /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9][a-zA-Z0-9.-]*\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return "כתובת האימייל אינה תקינה";
    }

    const [localPart, domain] = trimmed.split("@");
    if (localPart.length < 2) {
      return "החלק שלפני ה-@ קצר מדי";
    }

    const validTLDs = [
      "com",
      "co.il",
      "org",
      "net",
      "gov",
      "edu",
      "il",
      "io",
      "ai",
      "tech",
      "app",
      "dev",
      "me",
      "info",
      "biz",
      "org.il",
      "gov.il",
    ];

    const domainParts = domain.split(".");
    const tld = domainParts.slice(-2).join(".");
    const lastPart = domainParts[domainParts.length - 1];

    if (!validTLDs.includes(tld) && !validTLDs.includes(lastPart)) {
      return "סיומת הדומיין אינה מוכרת";
    }

    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === "mobile") {
      processedValue = value.replace(/[^\d\s\-+()]/g, "");
    } else if (name === "email") {
      processedValue = value.replace(/[^a-zA-Z0-9@._-]/g, "");
    }

    setFormData({
      ...formData,
      [name]: processedValue,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({ ...touched, [name]: true });

    if (name === "mobile") {
      setErrors({ ...errors, mobile: validateMobile(value) });
    } else if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    if (touched[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const isFormValid = () => {
    const mobileError = validateMobile(formData.mobile);
    const emailError = validateEmail(formData.email);

    return !mobileError && !emailError && formData.name.trim() !== "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const mobileError = validateMobile(formData.mobile);
    const emailError = validateEmail(formData.email);

    if (mobileError || emailError) {
      setTouched({ mobile: true, email: true });
      setErrors({
        mobile: mobileError,
        email: emailError,
      });
      return;
    }

    setStatus({ loading: true, success: false, error: false });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.mobile,
          email: formData.email || "לא צוין",
          message: formData.message || "לא צוינה הודעה",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({ loading: false, success: true, error: false });

      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });

      setErrors({ mobile: "", email: "" });
      setTouched({ mobile: false, email: false });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ loading: false, success: false, error: true });

      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false });
      }, 5000);
    }
  };

  return (
    // FIXED: Reduced overall padding on the container from p-6 to p-4 (mobile)
    <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 md:p-6 shadow-2xl border border-white/10">
      <div className="absolute  right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative">
        <h2 className="text-2xl font-bold text-white mb-5">שלחו לנו הודעה</h2>

        {/* Status messages adjusted */}
        {status.success && (
          <div className="mb-5 p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-emerald-300 animate-[slideDown_0.3s_ease-out]">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} weight="fill" className="flex-shrink-0" />
              <span className="font-semibold text-sm">
                {" "}
                {/* Reduced text size */}
                ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם
              </span>
            </div>
          </div>
        )}

        {status.error && (
          <div className="mb-5 p-3 bg-red-500/20 border border-red-400/30 rounded-xl text-red-300 animate-[slideDown_0.3s_ease-out]">
            <div className="flex items-center gap-3">
              <XCircle size={24} weight="fill" className="flex-shrink-0" />
              <span className="font-semibold text-sm">
                {" "}
                {/* Reduced text size */}
                אופס! משהו השתבש. אנא נסו שוב
              </span>
            </div>
          </div>
        )}

        {/* Reduced gap between form elements from space-y-6 to space-y-4 */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* שם מלא */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white/90 mb-2" // Reduced mb-3 to mb-2
            >
              שם מלא *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status.loading}
              // FIXED: Reduced vertical padding from py-3 to py-2.5 (mobile)
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none disabled:bg-white/5 disabled:cursor-not-allowed text-white placeholder:text-white/40"
              placeholder="שם מלא"
            />
          </div>

          {/* נייד */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-semibold text-white/90 mb-2"
            >
              נייד *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              required
              disabled={status.loading}
              // FIXED: Reduced vertical padding from py-3 to py-2.5 (mobile)
              className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg focus:ring-2 transition-all duration-200 outline-none disabled:bg-white/5 disabled:cursor-not-allowed text-white placeholder:text-white/40 ${
                errors.mobile && touched.mobile
                  ? "border-red-400/50 focus:ring-red-500"
                  : "border-white/10 focus:ring-purple-500 focus:border-transparent"
              }`}
              placeholder="050-1234567"
              inputMode="numeric"
            />
            {errors.mobile && touched.mobile && (
              <div className="mt-1 text-sm text-red-300 flex items-center gap-2 animate-[slideDown_0.2s_ease-out]">
                <WarningCircle
                  size={16}
                  weight="fill"
                  className="flex-shrink-0"
                />
                <span>{errors.mobile}</span>
              </div>
            )}
          </div>

          {/* אימייל */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white/90 mb-2"
            >
              אימייל
              <span className="text-xs text-white/50 font-normal mr-2">
                (אופציונלי)
              </span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              disabled={status.loading}
              // FIXED: Reduced vertical padding from py-3 to py-2.5 (mobile)
              className={`w-full px-4 py-2.5 bg-white/5 border rounded-lg focus:ring-2 transition-all duration-200 outline-none disabled:bg-white/5 disabled:cursor-not-allowed text-white placeholder:text-white/40 ${
                errors.email && touched.email
                  ? "border-red-400/50 focus:ring-red-500"
                  : "border-white/10 focus:ring-purple-500 focus:border-transparent"
              }`}
              placeholder="example@email.com"
              autoComplete="email"
              dir="ltr"
            />
            {errors.email && touched.email && (
              <div className="mt-1 text-sm text-red-300 flex items-center gap-2 animate-[slideDown_0.2s_ease-out]">
                <WarningCircle
                  size={16}
                  weight="fill"
                  className="flex-shrink-0"
                />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* הודעה */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white/90 mb-2"
            >
              ספרו לנו על ההשקעה שלכם
              <span className="text-xs text-white/50 font-normal mr-2">
                (אופציונלי)
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4" // Reduced default rows from 5 to 4
              disabled={status.loading}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 outline-none resize-none disabled:bg-white/5 disabled:cursor-not-allowed text-white placeholder:text-white/40"
              placeholder="ספרו לנו מה מעניין אתכם..."
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white border-none" // Reduced vertical padding from py-4 to py-3
            disabled={status.loading || !isFormValid()}
          >
            {status.loading ? (
              <span className="flex items-center justify-center gap-2">
                <Spinner size={20} className="animate-spin" />
                <span>שולח...</span>
              </span>
            ) : (
              "שלחו הודעה"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
