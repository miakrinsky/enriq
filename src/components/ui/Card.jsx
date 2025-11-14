import ProjectGallery from "../gallery/ProjectGallery";
import { MapPin, Ruler, Clock, TrendUp } from "phosphor-react";

function Card({
  id,
  rooms,
  street,
  squareMeters,
  time,
  roi,
  description,
  gallery,
}) {
  return (
    <>
      <div className="mb-8 md:mb-20 flex items-center justify-center px-4">
        <div className="bg-neutral-100/40 backdrop-blur-lg rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-lg border border-neutral-200/50 w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-4 md:mb-6">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 md:mb-4">
                מיקום: רחוב {street} הדר, חיפה
              </h2>
              <div className="space-y-2 md:space-y-3 text-sm md:text-base text-neutral-700">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={18}
                    weight="duotone"
                    color="#9333ea"
                    className="flex-shrink-0"
                  />
                  <span>דירת {rooms} חדרים בהדר</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ruler
                    size={18}
                    weight="duotone"
                    color="#9333ea"
                    className="flex-shrink-0"
                  />
                  <span>שטח: {squareMeters} מ"ר</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock
                    size={18}
                    weight="duotone"
                    color="#9333ea"
                    className="flex-shrink-0"
                  />
                  <span>משך שיפוץ: {time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendUp
                    size={18}
                    weight="duotone"
                    color="#9333ea"
                    className="flex-shrink-0"
                  />
                  <span>תשואה: {roi}%</span>
                </div>
              </div>
            </div>

            <div>
              <ProjectGallery projectId={id} gallery={gallery} />
            </div>
          </div>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
