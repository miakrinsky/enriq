import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function FeaturedProjectCard({ project }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={project.after} alt="אחרי" />}
        itemTwo={<ReactCompareSliderImage src={project.before} alt="לפני" />}
        position={50}
        style={{ height: "320px" }}
        className="rounded-2xl"
      />

      {/* Badge - לפני/אחרי */}
      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
        לפני/אחרי
      </div>

      {/* Info - Visible on mobile, hover on desktop */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:transform md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white font-bold text-lg mb-1">
          רחוב {project.street}
        </p>
        <p className="text-white/90 text-sm">
          {project.rooms} חדרים • {project.squareMeters} מ"ר
        </p>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
