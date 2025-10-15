import { NavLink } from "react-router-dom";
import { navLinkStyles } from "../../utils/styles";
import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import Button from "../ui/Button";
import logo from "../../assets/logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    console.log("menu toggled");
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-300">
      <div className="text-2xl max-w-full mx-auto px-4 h-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="md:hidden" onClick={toggleMenu}>
            <div className="relative w-9 h-9">
              <RxHamburgerMenu
                className={`absolute inset-0 h-9 w-9 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-90 opacity-0 scale-50"
                    : "rotate-0 opacity-100 scale-100"
                }`}
              />
              <RxCross1
                className={`absolute inset-0 h-9 w-9 transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "rotate-0 opacity-100 scale-100"
                    : "-rotate-90 opacity-0 scale-50"
                }`}
              />
            </div>
          </button>

          <NavLink to="/" className="flex-shrink-0">
            <img className="h-20" src={logo} alt="Enriq Group logo" />
          </NavLink>
        </div>

        <nav className="hidden md:flex md:gap-12 flex-1 justify-center">
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

        <NavLink to="/contact" className="hidden md:block">
          <Button>דברו איתנו</Button>
        </NavLink>
      </div>

      <div
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
        <nav className="flex flex-col">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full px-6 py-4 text-lg text-center border-b border-neutral-100 transition-colors duration-200 ${
                isActive
                  ? "text-purple-600 font-semibold bg-purple-50"
                  : "text-neutral-700 active:bg-neutral-100"
              }`
            }
          >
            בית
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full px-6 py-4 text-lg text-center border-b border-neutral-100 transition-colors duration-200 ${
                isActive
                  ? "text-purple-600 font-semibold bg-purple-50"
                  : "text-neutral-700 active:bg-neutral-100"
              }`
            }
          >
            אודות
          </NavLink>

          <NavLink
            to="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full px-6 py-4 text-lg text-center border-b border-neutral-100 transition-colors duration-200 ${
                isActive
                  ? "text-purple-600 font-semibold bg-purple-50"
                  : "text-neutral-700 active:bg-neutral-100"
              }`
            }
          >
            גלריה
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `w-full px-6 py-4 text-lg text-center transition-colors duration-200 ${
                isActive
                  ? "text-purple-600 font-semibold bg-purple-50"
                  : "text-neutral-700 active:bg-neutral-100"
              }`
            }
          >
            צור קשר
          </NavLink>

          <div className="px-6 pt-4 pb-6">
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full py-4 text-lg">דברו איתנו</Button>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
