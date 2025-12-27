import { NavLink } from "react-router-dom";
import { navLinkStyles } from "../../utils/styles";
import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import Button from "../ui/Button";
import logo from "../../assets/logonobg.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // סגירת תפריט בלחיצה על ESC (נגישות)
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMenuOpen]);

  return (
    <header
      className="sticky top-0 z-50 bg-neutral-300/30 backdrop-blur-md border-b border-neutral-300"
      role="banner"
    >
      <div className="text-2xl max-w-full mx-auto px-4 h-16 md:h-20 flex md:flex-row-reverse justify-between items-center">
        {/* Mobile Menu Button & CTA */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="relative w-9 h-9">
              <List
                size={36}
                weight="bold"
                aria-hidden="true"
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-90 opacity-0 scale-50"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              />
              <X
                size={36}
                weight="bold"
                aria-hidden="true"
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-90 opacity-0 scale-50"
                }`}
              />
            </div>
          </button>

          <div className="hidden md:block">
            <NavLink to="/contact" tabIndex="-1">
              <Button>דברו איתנו</Button>
            </NavLink>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex md:gap-12 flex-1 justify-center"
          aria-label="תפריט ראשי"
        >
          <NavLink to="/" className={navLinkStyles}>
            בית
          </NavLink>
          <NavLink to="/about" className={navLinkStyles}>
            אודות
          </NavLink>
          <NavLink to="/gallery" className={navLinkStyles}>
            גלריה
          </NavLink>
          <NavLink to="/contact" className={navLinkStyles}>
            צור קשר
          </NavLink>
        </nav>

        {/* Logo */}
        <NavLink
          to="/"
          className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg"
        >
          <img
            className="h-32 md:h-56 mt-2 md:mt-3"
            src={logo}
            alt="Enriq Group - דף הבית"
          />
        </NavLink>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobile-menu"
        className={`
          md:hidden 
          bg-white 
          shadow-lg 
          border-b border-neutral-200 
          absolute top-full left-0 right-0 
          z-50
          transform transition-all duration-300 ease-in-out
          ${
            isMenuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-4 opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="flex flex-col" aria-label="תפריט מובייל">
          {["/", "/about", "/gallery", "/contact"].map((path) => {
            const labels = {
              "/": "בית",
              "/about": "אודות",
              "/gallery": "גלריה",
              "/contact": "צור קשר",
            };
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full px-6 py-4 text-lg text-center border-b border-neutral-100 transition-colors duration-200 focus:outline-none focus:bg-purple-50 focus:text-purple-700 ${
                    isActive
                      ? "text-purple-600 font-semibold bg-purple-50"
                      : "text-neutral-700 active:bg-neutral-100"
                  }`
                }
              >
                {labels[path]}
              </NavLink>
            );
          })}

          <div className="px-6 pt-4 pb-6">
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              tabIndex="-1"
            >
              <Button className="w-full py-4 text-lg">דברו איתנו</Button>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
