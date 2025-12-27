import { X } from "phosphor-react";
import { useEffect, useState, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function ProjectModal({ project, onClose, initialImageIndex = 0 }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(initialImageIndex);
  const modalRef = useRef(null);

  // Focus trap inside modal when it opens
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  // Prevent body scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
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
      if (e.key === "Escape" && !lightboxOpen) onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose, lightboxOpen]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex="-1"
        className="relative h-full w-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-white md:max-w-4xl md:mx-auto md:my-8 md:rounded-2xl shadow-2xl focus:outline-none"
      >
        {/* Header with close button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-4 py-3 flex items-center justify-between shadow-sm md:rounded-t-2xl">
          <h2 id="modal-title" className="text-xl font-bold text-neutral-900">
            רחוב {project.street}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="סגור חלון"
          >
            <X size={24} weight="bold" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6 pb-8">
          {/* Basic Info */}
          <div className="flex gap-4 text-neutral-600 text-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                🏠
              </span>
              <span>{project.rooms} חדרים</span>
            </div>
            <span aria-hidden="true">•</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">
                📏
              </span>
              <span>{project.squareMeters} מ"ר</span>
            </div>
          </div>

          {/* Description */}
          {project.description && (
            <div className="bg-neutral-50 p-4 rounded-xl">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                על הפרויקט
              </h3>
              <p className="text-neutral-700 leading-relaxed text-base">
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
              <div className="grid grid-cols-3 gap-3">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square w-full focus:outline-none focus:ring-4 focus:ring-purple-500"
                    aria-label={`הגדל תמונה ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center"></div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={project.gallery?.map((src) => ({ src })) || []}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
        styles={{ container: { backgroundColor: "rgba(30, 30, 30, 0.95)" } }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}

export default ProjectModal;
