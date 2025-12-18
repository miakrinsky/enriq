import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { MapPin, Ruler, Door, CalendarBlank, TrendUp } from "phosphor-react";

function ProjectCard({ project, compact = false, onOpenModal }) {
  if (compact) {
    // Mobile compact version - Modern glassmorphism style
    return (
      <div className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-3xl">
        <div className="relative">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={project.after} alt="אחרי" />}
            itemTwo={
              <ReactCompareSliderImage src={project.before} alt="לפני" />
            }
            position={50}
            // Retaining the reduced height for better mobile fit
            style={{ height: "300px" }}
            className="rounded-t-2xl"
          />

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-t-2xl pointer-events-none"></div>

          {/* Badge */}
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            לפני/אחרי
          </div>
        </div>

        {/* Glassmorphism card bottom */}
        <div className="relative bg-gradient-to-br from-neutral-900/95 to-neutral-800/95 backdrop-blur-xl p-4 border-t border-white/10">
          {/* FIXED: Combined H3 and info line into a single flex container for maximum space saving */}
          <div className="flex items-center justify-between gap-2 mb-3">
            {/* H3 for Street Name */}
            <h3
              className="text-xl font-bold text-white tracking-tight flex-shrink-0"
              style={{ fontFamily: "'Heebo', sans-serif" }}
            >
              רחוב {project.street}
            </h3>

            {/* Compact Info Badges - Forced small font and flex-wrap prevention */}
            <div className="flex items-center gap-1.5 text-xs text-white/80 flex-shrink overflow-hidden">
              <div className="flex items-center gap-1 whitespace-nowrap">
                <Door
                  size={12}
                  weight="duotone"
                  className="text-purple-400 flex-shrink-0"
                />
                <span>{project.rooms} חדרים</span>
              </div>

              <div className="w-0.5 h-3 bg-white/40 rounded-full flex-shrink-0"></div>

              <div className="flex items-center gap-1 whitespace-nowrap">
                <Ruler
                  size={12}
                  weight="duotone"
                  className="text-purple-400 flex-shrink-0"
                />
                <span>{project.squareMeters} מ"ר</span>
              </div>
            </div>
          </div>
          {/* END FIXED SECTION */}

          <div className="flex items-center justify-center gap-2 text-purple-300 text-sm font-semibold group-hover:gap-3 transition-all bg-purple-600/20 py-2 rounded-lg border border-purple-400/30">
            <span> מידע נוסף על הפרויקט</span>
            <span className="text-base">←</span>
          </div>
        </div>
      </div>
    );
  }

  // Desktop full version with modern glassmorphism
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 items-center">
        {/* Left: Compare Slider */}
        <div className="relative">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={project.after} alt="אחרי" />}
            itemTwo={
              <ReactCompareSliderImage src={project.before} alt="לפני" />
            }
            position={50}
            style={{ height: "450px" }}
            className="rounded-2xl"
          />

          {/* Floating badge */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
            לפני/אחרי
          </div>
        </div>
        {/* Right: Details with glassmorphism */}
        <div className="space-y-5">
          <div>
            <h3
              className="text-2xl font-bold text-white mb-1 tracking-tight"
              style={{ fontFamily: "'Heebo', sans-serif" }}
            >
              רחוב {project.street}
            </h3>
            <div className="flex items-center gap-2 text-purple-400">
              <MapPin size={16} weight="duotone" />
              <span className="text-xs text-white/70">הדר, חיפה</span>
            </div>
          </div>

          {/* Info badges */}
          <div className="flex gap-2 flex-wrap">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-lg">
              <Door size={16} weight="duotone" className="text-purple-400" />
              <span className="text-white text-sm font-semibold">
                {project.rooms} חדרים
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-lg">
              <Ruler size={16} weight="duotone" className="text-purple-400" />
              <span className="text-white font-semibold">
                {project.squareMeters} מ"ר
              </span>
            </div>
          </div>

          {/* Stats - glassmorphism cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 p-5 hover:border-purple-400/50 transition-all">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 text-purple-300 text-sm font-semibold mb-2">
                  <TrendUp size={18} weight="duotone" />
                  <span>תשואה</span>
                </div>
                <div className="text-3xl font-bold text-white">
                  {project.roi}
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 p-5 hover:border-emerald-400/50 transition-all">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl"></div>
              <div className="relative">
                <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold mb-2">
                  <CalendarBlank size={18} weight="duotone" />
                  <span>זמן ביצוע</span>
                </div>
                <div className="text-2xl font-bold text-white">
                  {project.time}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl">
            <p
              className="text-white/80 leading-relaxed"
              style={{ fontFamily: "'Heebo', sans-serif" }}
            >
              {project.description}
            </p>
          </div>

          {/* Thumbnail Gallery - Single Row */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-2">
              <h4
                className="text-lg font-bold text-white mb-3 flex items-center gap-2"
                style={{ fontFamily: "'Heebo', sans-serif" }}
              >
                <span>גלריית תמונות</span>
                <span className="text-sm text-purple-400 font-normal">
                  ({project.gallery.length})
                </span>
              </h4>
              <div className="flex gap-2 overflow-x-auto pb-2 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-white/5">
                {project.gallery.slice(0, 7).map((image, index) => (
                  <div
                    key={index}
                    onClick={() => onOpenModal && onOpenModal(project, index)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl flex-shrink-0 w-24 h-24 border-2 border-white/10 hover:border-purple-400/50 transition-all"
                  >
                    <img
                      src={image}
                      alt={`תמונה ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-2xl">🔍</span>
                    </div>
                  </div>
                ))}
                {project.gallery.length > 7 && (
                  <div
                    onClick={() => onOpenModal && onOpenModal(project, 0)}
                    className="relative group cursor-pointer overflow-hidden rounded-xl flex-shrink-0 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-sm border-2 border-purple-400/40 flex flex-col items-center justify-center hover:from-purple-500/40 hover:to-purple-600/40 hover:border-purple-400/60 transition-all"
                  >
                    <span className="text-white font-bold text-xl">
                      +{project.gallery.length - 7}
                    </span>
                    <span className="text-purple-200 text-xs font-semibold mt-1">
                      תמונות
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Add Heebo font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&display=swap');
        
        /* Custom scrollbar for gallery */
        .scrollbar-thin::-webkit-scrollbar {
          height: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
}

export default ProjectCard;
