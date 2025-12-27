import { useState, useEffect } from "react";
import { Person, X, TextAa, CircleHalf, Link } from "phosphor-react";

function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 0, // 0 = normal, 1 = large, 2 = extra large
    contrast: false, // false = normal, true = high contrast
    underlineLinks: false,
  });

  // החלת השינויים על ה-HTML/Body
  useEffect(() => {
    const root = document.documentElement;

    // Font Size Logic
    root.style.fontSize =
      settings.fontSize === 0
        ? "16px"
        : settings.fontSize === 1
        ? "18px"
        : "20px";

    // Contrast Logic
    if (settings.contrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Underline Links Logic
    if (settings.underlineLinks) {
      root.classList.add("underline-links");
    } else {
      root.classList.remove("underline-links");
    }
  }, [settings]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const resetSettings = () => {
    setSettings({ fontSize: 0, contrast: false, underlineLinks: false });
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] font-sans">
      {/* Toggle Button */}
      <button
        onClick={toggleOpen}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-blue-300"
        aria-label="פתח תפריט נגישות"
        title="תפריט נגישות"
      >
        {isOpen ? <X size={28} /> : <Person size={28} />}
      </button>

      {/* Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-2xl border border-neutral-200 overflow-hidden animate-fade-in-up">
          <div className="bg-neutral-100 p-4 border-b border-neutral-200 flex justify-between items-center">
            <h3 className="font-bold text-neutral-800">כלי נגישות</h3>
            <button
              onClick={resetSettings}
              className="text-xs text-red-600 hover:underline"
            >
              איפוס הגדרות
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* Font Size Control */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-700 flex items-center gap-2">
                <TextAa size={20} /> גודל טקסט
              </span>
              <div className="flex bg-neutral-100 rounded-lg p-1">
                {[0, 1, 2].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSettings({ ...settings, fontSize: size })}
                    className={`px-3 py-1 rounded-md text-sm transition-colors ${
                      settings.fontSize === size
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {size === 0 ? "A" : size === 1 ? "A+" : "A++"}
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast Toggle */}
            <button
              onClick={() =>
                setSettings({ ...settings, contrast: !settings.contrast })
              }
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                settings.contrast
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <CircleHalf size={20} /> ניגודיות גבוהה
              </span>
              <div
                className={`w-4 h-4 rounded-full border ${
                  settings.contrast
                    ? "bg-white border-transparent"
                    : "border-neutral-400"
                }`}
              ></div>
            </button>

            {/* Underline Links Toggle */}
            <button
              onClick={() =>
                setSettings({
                  ...settings,
                  underlineLinks: !settings.underlineLinks,
                })
              }
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                settings.underlineLinks
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-50 hover:bg-neutral-100 text-neutral-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <Link size={20} /> הדגשת קישורים
              </span>
              <div
                className={`w-4 h-4 rounded-full border ${
                  settings.underlineLinks
                    ? "bg-white border-transparent"
                    : "border-neutral-400"
                }`}
              ></div>
            </button>
          </div>

          <div className="bg-neutral-50 p-2 text-center text-xs text-neutral-500 border-t border-neutral-200">
            Enriq Group Accessibility
          </div>
        </div>
      )}
    </div>
  );
}

export default AccessibilityWidget;
