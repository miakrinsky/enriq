import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function ProjectCard({ project }) {
  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={project.before} alt="לפני" />}
          itemTwo={<ReactCompareSliderImage src={project.after} alt="אחרי" />}
          position={50}
          style={{ height: "320px" }}
          className="rounded-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/70 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p>{project.street}</p>
          <p>
            {project.rooms} חדרים • {project.squareMeters} מ"ר
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
