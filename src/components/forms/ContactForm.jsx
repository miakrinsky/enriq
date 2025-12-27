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
    name: "",
    mobile: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    mobile: false,
    email: false,
  });

  // --- Validations ---

  const validateName = (name) => {
    if (!name.trim()) return "נא להזין שם מלא";
    if (name.trim().length < 2) return "שם חייב להכיל לפחות 2 תווים";
    // Regex allows Hebrew, English, spaces, dashes and apostrophes
    const nameRegex = /^[a-zA-Z\u0590-\u05FF\s'-]+$/;
    if (!nameRegex.test(name)) return "שם יכול להכיל אותיות בלבד";
    return "";
  };

  const validateMobile = (mobile) => {
    if (!mobile.trim()) return "נא להזין מספר נייד";

    // Remove all non-digits
    const digitsOnly = mobile.replace(/\D/g, "");

    if (mobile.includes("+972")) {
      if (digitsOnly.length !== 12) return "מספר לא תקין (אורך שגוי)";
    } else {
      if (digitsOnly.length !== 10) return "מספר נייד צריך להכיל 10 ספרות";
      if (!digitsOnly.startsWith("05")) return "מספר נייד חייב להתחיל ב-05";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return ""; // Email is optional

    // Robust Email Regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) return "כתובת האימייל אינה תקינה";
    return "";
  };

  // --- Handlers ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Input masking/sanitization
    if (name === "mobile") {
      // Allow only digits, spaces, dashes, plus, and parentheses
      processedValue = value.replace(/[^\d\s\-+()]/g, "");
    }

    setFormData((prev) => ({ ...prev, [name]: processedValue }));

    // Real-time validation if already touched
    if (touched[name]) {
      let error = "";
      if (name === "name") error = validateName(processedValue);
      if (name === "mobile") error = validateMobile(processedValue);
      if (name === "email") error = validateEmail(processedValue);

      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    let error = "";
    if (name === "name") error = validateName(value);
    if (name === "mobile") error = validateMobile(value);
    if (name === "email") error = validateEmail(value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields on submit
    const nameError = validateName(formData.name);
    const mobileError = validateMobile(formData.mobile);
    const emailError = validateEmail(formData.email);

    setTouched({ name: true, mobile: true, email: true });
    setErrors({ name: nameError, mobile: mobileError, email: emailError });

    if (nameError || mobileError || emailError) return;

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
      setFormData({ name: "", mobile: "", email: "", message: "" });
      setTouched({ name: false, mobile: false, email: false });
      setErrors({ name: "", mobile: "", email: "" });

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

  // Base classes for inputs to ensure consistency and accessibility
  const inputBaseClasses =
    "w-full px-4 py-2.5 bg-white/5 border rounded-lg transition-all duration-200 " +
    "text-white placeholder:text-white/40 " +
    "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-800 " +
    "disabled:bg-white/5 disabled:cursor-not-allowed";

  return (
    <div className="h-full relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 md:p-6 shadow-2xl border border-white/10">
      <div className="absolute right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative">
        <h2 className="text-2xl font-bold text-white mb-5">שלחו לנו הודעה</h2>

        {/* Status Messages */}
        {status.success && (
          <div className="mb-5 p-3 bg-emerald-500/20 border border-emerald-400/30 rounded-xl text-emerald-300 animate-[slideDown_0.3s_ease-out]">
            <div className="flex items-center gap-3">
              <CheckCircle size={24} weight="fill" className="flex-shrink-0" />
              <span className="font-semibold text-sm">
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
                אופס! משהו השתבש. אנא נסו שוב
              </span>
            </div>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white/90 mb-2"
            >
              שם מלא *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status.loading}
              className={`${inputBaseClasses} ${
                errors.name && touched.name
                  ? "border-red-400/50 focus:ring-red-500"
                  : "border-white/10"
              }`}
              placeholder="ישראל ישראלי"
            />
            {errors.name && touched.name && (
              <div className="mt-1 text-sm text-red-300 flex items-center gap-2 animate-[slideDown_0.2s_ease-out]">
                <WarningCircle
                  size={16}
                  weight="fill"
                  className="flex-shrink-0"
                />
                <span>{errors.name}</span>
              </div>
            )}
          </div>

          {/* Mobile Field */}
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
              disabled={status.loading}
              dir="ltr"
              className={`${inputBaseClasses} text-right ${
                errors.mobile && touched.mobile
                  ? "border-red-400/50 focus:ring-red-500"
                  : "border-white/10"
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

          {/* Email Field */}
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
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={status.loading}
              dir="ltr"
              className={`${inputBaseClasses} text-right ${
                errors.email && touched.email
                  ? "border-red-400/50 focus:ring-red-500"
                  : "border-white/10"
              }`}
              placeholder="example@email.com"
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

          {/* Message Field */}
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
              rows="4"
              disabled={status.loading}
              className={`${inputBaseClasses} resize-none`}
              placeholder="ספרו לנו מה מעניין אתכם..."
            ></textarea>
          </div>

          <Button
            type="submit"
            className="w-full py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white border-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-800"
            disabled={status.loading}
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
