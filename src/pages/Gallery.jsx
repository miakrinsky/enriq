import Card from "../components/ui/Card";
import ProjectGallery from "../components/gallery/ProjectGallery";
import { projects } from "../data/projects";

function Gallery() {
  return (
    <>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            הפרויקטים שלנו
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            כל פרויקט מספר סיפור של שינוי - מדירה מוזנחת לנכס מניב. גללו למטה
            לראות את התוצאות.
          </p>
        </div>
      </section>
      <section className="py-16">
        {projects.map((project) => (
          <Card
            key={project.id}
            rooms={project.rooms}
            street={project.street}
            squareMeters={project.squareMeters}
            time={project.time}
            roi={project.roi}
            before={project.before}
            after={project.after}
            description={project.description}
            gallery={project.gallery}
          />
        ))}
      </section>
    </>
  );
}

export default Gallery;
