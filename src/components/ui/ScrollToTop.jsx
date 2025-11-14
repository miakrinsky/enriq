import { useState, useEffect } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // tracking the scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      // button appear after 300px of scrolling
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    //clean event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // smooth scrolling behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-3 left-3 z-50 bg-purple-600/55 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="back to top"
        >
          {/* arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
