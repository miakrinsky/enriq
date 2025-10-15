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
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-20">
            <div className="bg-neutral-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    פרויקט 1 - דירת 3 חדרים בהדר
                  </h2>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📍</span>
                      <span>מיקום: הדר, חיפה</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📏</span>
                      <span>שטח: 65 מ"ר</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">⏱️</span>
                      <span>משך שיפוץ: 3 חודשים</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">💰</span>
                      <span>תשואה: 6.5%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-neutral-200 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-neutral-400">
                    [BeforeAfterSlider component]
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                דירה שהייתה במצב מוזנח עברה שיפוץ מקיף ומדויק. החלפנו את כל
                המערכות, שיפצנו את הקירות והרצפות, והוספנו פרטים מודרניים
                שהגדילו את ערך הנכס.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-neutral-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    פרויקט 2 - דירת 4 חדרים בהדר
                  </h2>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📍</span>
                      <span>מיקום: הדר, חיפה</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📏</span>
                      <span>שטח: 80 מ"ר</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">⏱️</span>
                      <span>משך שיפוץ: 4 חודשים</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">💰</span>
                      <span>תשואה: 7%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-neutral-200 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-neutral-400">
                    [BeforeAfterSlider component]
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                נכס עם פוטנציאל גבוה שעבר טרנספורמציה מלאה. שיפרנו את החלוקה
                הפנימית, הוספנו חדר רחצה נוסף, ויצרנו דירה מודרנית ומבוקשת.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-neutral-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    פרויקט 3 - דירת סטודיו בהדר
                  </h2>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📍</span>
                      <span>מיקום: הדר, חיפה</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📏</span>
                      <span>שטח: 35 מ"ר</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">⏱️</span>
                      <span>משך שיפוץ: 2 חודשים</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">💰</span>
                      <span>תשואה: 8%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-neutral-200 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-neutral-400">
                    [BeforeAfterSlider component]
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                סטודיו קומפקטי שהפכנו למושלם לסטודנטים וצעירים. מקסמום ניצול
                שטח, עיצוב חכם, ופתרונות אחסון יצירתיים.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-neutral-100 rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    פרויקט 4 - דירת 2 חדרים בהדר
                  </h2>
                  <div className="space-y-3 text-neutral-700">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📍</span>
                      <span>מיקום: הדר, חיפה</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">📏</span>
                      <span>שטח: 50 מ"ר</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">⏱️</span>
                      <span>משך שיפוץ: 2.5 חודשים</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">💰</span>
                      <span>תשואה: 6.8%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-neutral-200 rounded-2xl h-64 flex items-center justify-center">
                  <p className="text-neutral-400">
                    [BeforeAfterSlider component]
                  </p>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                דירה במיקום מעולה שקיבלה מראה חדש לגמרי. שיפוץ קומפלט עם דגש על
                איכות הגימור והפרטים הקטנים שעושים את ההבדל.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            הפרויקט הבא יכול להיות שלכם
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            בואו נדבר על איך אנחנו יכולים להפוך את הדירה שלכם למניבה
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-purple-600 hover:bg-neutral-50 px-12 py-4 rounded-lg font-bold text-lg transform hover:scale-105 transition-all duration-200 shadow-xl"
          >
            דברו איתנו עכשיו
          </a>
        </div>
      </section>
    </>
  );
}

export default Gallery;
