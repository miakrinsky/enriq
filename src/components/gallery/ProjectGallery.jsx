import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProjectGallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (!gallery || gallery.length === 0) {
    return <div className="text-neutral-500">לא נמצאו תמונות</div>;
  }

  return (
    <>
      {/* Preview */}
      <div className="w-full">
        <img
          src={gallery[selectedImage]}
          alt={`תמונה ${selectedImage + 1}`}
          className="w-full h-96 object-cover rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setIsOpen(true)}
        />

        {/* Thumbnails */}
        <div className="thumbnails-scroll flex gap-2 mt-3 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth">
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`תמונה ממוזערת ${index + 1}`}
              className={`
                w-20 h-20 flex-shrink-0 object-cover rounded-lg cursor-pointer 
                transition-all hover:opacity-80 snap-center
                ${
                  index === selectedImage
                    ? "ring-2 ring-purple-500/50 scale-105"
                    : "ring-1 ring-neutral-300"
                }
              `}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={gallery.map((src) => ({ src }))}
        index={selectedImage}
        on={{
          view: ({ index }) => setSelectedImage(index),
        }}
      />

      {/* Scrollbar Styling */}
      <style>{`
        /* Firefox */
        .thumbnails-scroll {
          scrollbar-width: thin;
          scrollbar-color: #a78bfa #e5e5e5;
        }

        /* Chrome, Safari, Edge */
        .thumbnails-scroll::-webkit-scrollbar {
          height: 6px;
        }

        .thumbnails-scroll::-webkit-scrollbar-track {
          background: #e5e5e5;
          border-radius: 10px;
          margin: 0 10px;
        }

        .thumbnails-scroll::-webkit-scrollbar-thumb {
          background: #a78bfa;
          border-radius: 10px;
          transition: background 0.3s ease;
        }

        .thumbnails-scroll::-webkit-scrollbar-thumb:hover {
          background: #9333ea;
        }
      `}</style>
    </>
  );
}

export default ProjectGallery;
