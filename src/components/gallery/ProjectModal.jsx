import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function ProjectModal({ project, onClose, initialImageIndex = 0 }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(initialImageIndex);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calculate scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && !lightboxOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, lightboxOpen]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative h-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-white md:max-w-4xl md:mx-auto md:my-8 md:rounded-2xl">
        {/* Header with close button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-4 py-3 flex items-center justify-between shadow-sm md:rounded-t-2xl">
          <h2 className="text-xl font-bold text-neutral-900">
            רחוב {project.street}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="סגור"
          >
            <X size={24} weight="bold" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6 pb-8">
          {/* Compare Slider */}
          {/* <div className="rounded-xl overflow-hidden shadow-lg">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src={project.before} alt="לפני" />
              }
              itemTwo={
                <ReactCompareSliderImage src={project.after} alt="אחרי" />
              }
              position={50}
              style={{ height: window.innerWidth < 768 ? "320px" : "280px" }}
            />
          </div> */}

          {/* Basic Info */}
          <div className="flex gap-4 text-neutral-600">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span>{project.rooms} חדרים</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📏</span>
              <span>{project.squareMeters} מ"ר</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
              <div className="text-sm text-purple-700 font-semibold mb-1">
                תשואה על השקעה
              </div>
              <div className="text-3xl font-bold text-purple-600">
                {project.roi}
              </div>
            </div>
            <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 rounded-xl border border-neutral-200">
              <div className="text-sm text-neutral-700 font-semibold mb-1">
                זמן ביצוע
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                {project.time}
              </div>
            </div>
          </div>

          {/* Description */}
          {project.description && (
            <div className="bg-neutral-50 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                על הפרויקט
              </h3>
              <p className="text-neutral-700 leading-relaxed">
                {project.description}
              </p>
            </div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                גלריית תמונות
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                  >
                    <img
                      src={image}
                      alt={`תמונה ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox for gallery images */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={project.gallery?.map((src) => ({ src })) || []}
        index={lightboxIndex}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
        styles={{
          container: {
            backgroundColor: "rgba(30, 30, 30, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          },
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
      />
    </div>
  );
}

export default ProjectModal;
