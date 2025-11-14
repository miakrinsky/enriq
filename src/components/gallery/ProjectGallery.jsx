import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProjectGallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!gallery || gallery.length === 0) {
    return <div className="text-neutral-500 text-sm">לא נמצאו תמונות</div>;
  }

  return (
    <>
      <div className="w-full">
        <img
          src={gallery[selectedImage]}
          alt={`תמונה ${selectedImage + 1}`}
          className="w-full h-44 sm:h-52 md:h-64 lg:h-80 object-cover rounded-lg md:rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsOpen(true)}
        />

        <div className="thumbnails-scroll flex gap-1 sm:gap-1.5 md:gap-2 mt-2 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth">
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`תמונה ממוזערת ${index + 1}`}
              className={`
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20
                flex-shrink-0 object-cover rounded cursor-pointer 
                transition-all hover:opacity-80 snap-center
                ${
                  index === selectedImage
                    ? "ring-2 ring-purple-500/60 scale-105"
                    : "ring-1 ring-neutral-300/50"
                }
              `}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={gallery.map((src) => ({ src }))}
        index={selectedImage}
        on={{
          view: ({ index }) => setSelectedImage(index),
        }}
        styles={{
          container: {
            backgroundColor: "rgba(30, 30, 30, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          },
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
      />

      <style>{`
        /* Custom scrollbar */
        .thumbnails-scroll {
          scrollbar-width: thin;
          scrollbar-color: #a78bfa #e5e5e5;
        }

        .thumbnails-scroll::-webkit-scrollbar {
          height: 3px;
        }

        .thumbnails-scroll::-webkit-scrollbar-track {
          background: #e5e5e5;
          border-radius: 10px;
        }

        .thumbnails-scroll::-webkit-scrollbar-thumb {
          background: #a78bfa;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .thumbnails-scroll::-webkit-scrollbar-thumb:hover {
          background: #9333ea;
        }

        /* Lightbox glassmorphism customization */
        .yarl__root {
          --yarl__color_backdrop: rgba(30, 30, 30, 0.75) !important;
        }

        /* Better mobile navigation buttons */
        @media (max-width: 640px) {
          .yarl__button {
            width: 44px !important;
            height: 44px !important;
          }
          
          .yarl__navigation_prev,
          .yarl__navigation_next {
            padding: 8px !important;
          }
        }
      `}</style>
    </>
  );
}

export default ProjectGallery;
