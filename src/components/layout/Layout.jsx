import Header from "./Header";
import Footer from "./Footer";
import InteractiveGrid from "./InteractiveGrid";
import { useEffect, useState } from "react";
import SkipToContent from "../ui/SkipToContent"; // Import 2

function Layout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <SkipToContent /> {/* Add Skip Link here */}
      {/* Background Effects... */}
      <div
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background:
            "radial-gradient(circle, rgba(203, 148, 255, 0.411) 0%, rgba(255, 255, 255, 0.63) 30%, transparent 70%)",
        }}
        className="pointer-events-none fixed w-96 h-96 rounded-full blur-3xl opacity-50 transition-transform duration-150 will-change-transform ease-out z-50 -translate-x-1/2 -translate-y-1/2"
      ></div>
      <InteractiveGrid mousePosition={mousePosition} />
      <div className="relative min-h-screen">
        {/* Background blobs code... */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* ... existing background divs ... */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,_white_40%,_transparent),radial-gradient(ellipse_80%_50%_at_80%_10%,_#f3e8ff_40%,_transparent),radial-gradient(ellipse_80%_50%_at_20%_90%,_#e9d5ff_40%,_transparent)] bg-white"></div>
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-200/40 to-pink-200/30 rounded-full filter blur-[150px]"></div>
          <div className="absolute top-1/4 -left-48 w-[800px] h-[800px] bg-gradient-to-br from-purple-100/30 to-blue-100/20 rounded-full filter blur-[160px] animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-full filter blur-[140px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative flex flex-col min-h-screen">
          <Header />
          {/* Add ID for Skip Link */}
          <main id="main-content" className="flex-grow" tabIndex="-1">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
