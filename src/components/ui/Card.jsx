import ProjectGallery from "../gallery/ProjectGallery";

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
      <div className="mb-20 flex items-center justify-center">
        <div className="bg-neutral-300/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-lg border border-neutral-200/50 w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                מיקום: רחוב {street} הדר, חיפה
              </h2>
              <div className="space-y-3 text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">📍</span>
                  <span> דירת {rooms} חדרים בהדר</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">📏</span>
                  <span>שטח: {squareMeters} מ"ר</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">⏱️</span>
                  <span>משך שיפוץ: {time} </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600 font-bold">💰</span>
                  <span>תשואה: {roi}%</span>
                </div>
              </div>
            </div>

            <div>
              <ProjectGallery projectId={id} gallery={gallery} />
            </div>
          </div>
          <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
