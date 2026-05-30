import React from 'react';

function Accessibility() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 text-neutral-800 bg-white" dir="rtl">
            {/* כותרת ראשית */}
            <h1 className="text-4xl font-bold text-neutral-900 mb-8 border-b pb-4">
                הצהרת נגישות
            </h1>

            {/* מבוא */}
            <div className="space-y-4 text-base leading-relaxed mb-8">
                <p>
                    enriq group, אחראית על הקמת והפעלת אתר : <a href="https://enriqgroup.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://enriqgroup.com</a>. אנו רואים חשיבות רבה במתן
                    שירות שוויוני לכלל האזרחים ובשיפור השירות הניתן לאזרחים עם מוגבלות.
                </p>
                <p>
                    אנו משקיעים משאבים רבים בהנגשת האתר והנכסים הדיגיטליים שלנו על מנת להפוך את שירותי
                    החברה לזמינים יותר עבור אנשים עם מוגבלות.
                </p>
                <p>
                    במדינת ישראל כ-20 אחוזים מקרב האוכלוסייה הינם אנשים עם מוגבלות הזקוקים לנגישות דיגיטלית,
                    על מנת לצרוך מידע ושירותים כללים.
                </p>
                <p>
                    הנגשת האתר של enriq group, נועדה להפוך אותו לזמין, ידידותי ונוח יותר לשימוש עבור אוכלוסיות עם
                    צרכים מיוחדים, הנובעים בין היתר ממוגבלויות מוטוריות שונות,
                    לקויות קוגניטיביות, קוצר רואי, עיוורון או עיוורון צבעים, לקויות שמיעה וכן אוכלוסייה הנמנית על בני
                    הגיל השלישי.
                </p>
                <p>
                    הנגשת אתר זה בוצעה על ידי חברת הנגשת האתרים &quot;Vee הנגשת אתרים&quot;.
                </p>
                <p className="font-semibold text-neutral-950">
                    רמת הנגישות באתר - AA
                </p>
                <p>
                    חברת &quot;Vee&quot;, התאימה את נגישות האתר לדפדפנים הנפוצים ולשימוש בטלפון הסלולרי ככל
                    הניתן, והשתמשה בבדיקותיה בקוראי מסך מסוג Jaws ו- NVDA.
                </p>
                <p>
                    מקפידה על עמידה בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות 5568 התשע&quot;ג 2013 ברמת AA.
                </p>
                <p>
                    וכן, מיישמת את המלצות מסמך WCAG2.2 מאת ארגון W3C.
                </p>
                <p>
                    הנגשת האתר בוצעה בהתאם להנחיות רשות התקשוב להנגשת יישומים בדפדפני אינטרנט.
                </p>
            </div>

            {/* כיצד עוברים למצב נגיש */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    כיצד עוברים למצב נגיש?
                </h2>
                <div className="space-y-4 text-base leading-relaxed">
                    <p>
                        באתר מוצב אייקון נגישות (בד&quot;כ בדפנות האתר). לחיצה על האייקון מאפשרת פתיחת של תפריט
                        הנגישות. לאחר בחירת הפונקציה המתאימה בתפריט יש להמתין לטעינת הדף ולשינוי הרצוי בתצוגה
                        (במידת הצורך).
                    </p>
                    <p>
                        במידה ומעוניינים לבטל את הפעולה, יש ללחוץ על הפונקציה בתפריט פעם שניה. בכל מצב, ניתן לאפס
                        הגדרות נגישות.
                    </p>
                    <p>
                        התוכנה פועלת בדפדפנים הפופולריים: Chrome, Firefox, Safari, Opera בכפוף (תנאי יצרן) הגלישה
                        במצב נגישות מומלצת בדפדפן כרום.
                    </p>
                    <p>
                        האתר מספק מבנה סמנטי עבור טכנולוגיות מסייעות ותמיכה בדפוס השימוש המקובל להפעלה עם
                        מקלדת בעזרת מקשי החיצים, Enter ו- Esc ליציאה מתפריטים וחלונות.
                    </p>
                    <p>
                        לצורך קבלת חווית גלישה מיטבית עם תוכנת הקראת מסך, אנו ממליצים לשימוש בתוכנת NVDA
                        העדכנית ביותר.
                    </p>
                </div>
            </div>

            {/* תיקונים והתאמות שבוצעו באתר */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    תיקונים והתאמות שבוצעו באתר:
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base pl-0">
                    <li>התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA , JAWS</li>
                    <li>אמצעי הניווט באתר פשוטים וברורים.</li>
                    <li>תכני האתר כתובים באופן ברור, מסודר והיררכי.</li>
                    <li>האתר מותאם לצפייה בדפדפנים מודרניים.</li>
                    <li>התאמת האתר לתצוגה תואמת מגוון מסכים ורזולוציות.</li>
                    <li>כל הדפים באתר בעלי מבנה קבוע (1H/2H/3H וכו&#39;).</li>
                    <li>לכל התמונות באתר יש הסבר טקסטואלי חלופי (alt).</li>
                </ul>
            </div>

            {/* פונקציונליות תוכנת נגישות */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    פונקציונליות תוכנת נגישות:
                </h2>
                <ul className="list-disc list-inside space-y-2 text-base pl-0">
                    <li>התאמה לקורא מסך - התאמת האתר עבור טכנולוגיות מסייעות כגון NVDA , JAWS</li>
                    <li>עצירת הבהובים - עצירת אלמנטים נעים וחסימת אנימציות</li>
                    <li>דילוג ישיר לתוכן - דילוג על התפריט הראשי ישירות אל התוכן.</li>
                    <li>התאמה לניווט מקלדת.</li>
                    <li>הגדלה / הקטנה של טקסט.</li>
                    <li>ריווח בין אותיות / מילים / שורות.</li>
                    <li>ניגודיות וצבע - גבוהה, הפוכה, שחור לבן.</li>
                    <li>גופן קריא.</li>
                    <li>הדגשת קישורים.</li>
                    <li>מדריך קריאה.</li>
                    <li>שינוי אייקון סמן עכבר.</li>
                    <li>תיאור לתמונות.</li>
                </ul>
            </div>

            {/* החרגות */}
            <div className="mb-8 bg-neutral-50 p-4 border-r-4 border-neutral-400">
                <h2 className="text-xl font-bold text-neutral-900 mb-2">
                    החרגות
                </h2>
                <p className="text-base leading-relaxed">
                    חשוב לציין, כי למרות מאמצינו להנגיש את כלל הדפים והאלמנטים באתר, ייתכן שיתגלו חלקים או
                    יכולות שלא הונגשו כראוי או שטרם הונגשו.
                </p>
                <p className="text-base leading-relaxed mt-2">
                    אנו פועלים לשפר את נגישות האתר שלנו כל העת, כחלק ממחויבותנו לאפשר לכלל האוכלוסייה
                    להשתמש בו, כולל אנשים עם מוגבלות.
                </p>
            </div>

            {/* יצירת קשר בנושא נגישות */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    יצירת קשר בנושא נגישות
                </h2>
                <p className="text-base mb-4">
                    במידה ונתקלתם בבעיה בנושא נגישות באתר, נשמח לקבל הערות ובקשות באמצעות פנייה לרכז
                    הנגישות שלנו:
                </p>
                <p className="text-base mb-2 font-semibold">
                    על מנת שנוכל לטפל בבעיה בדרך הטובה ביותר, אנו ממליצים מאוד לצרף פרטים מלאים ככל שניתן:
                </p>
                <ul className="list-disc list-inside space-y-1 text-base mb-4 pl-0">
                    <li>• תיאור הבעיה.</li>
                    <li>• מהי הפעולה שניסיתם לבצע.</li>
                    <li>• קישור לדף שבו גלשתם.</li>
                    <li>• סוג הדפדפן וגרסתו.</li>
                    <li>• מערכת הפעלה.</li>
                    <li>• סוג הטכנולוגיה המסייעת (במידה והשתמשתם).</li>
                </ul>
                <p className="text-base mb-6">
                    enriq group תעשה ככל יכולה על מנת להנגיש את האתר בצורה המיטבית ולענות לפניות בצורה
                    המקצועית והמהירה ביותר.
                </p>

                {/* פרטי רכז נגישות */}
                <div className="border border-neutral-200 rounded-lg p-6 bg-neutral-50 max-w-md">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">
                        רכז נגישות:
                    </h3>
                    <ul className="space-y-2 text-base">
                        <li><span className="font-medium text-neutral-600">שם:</span> shon krinsky</li>
                        <li><span className="font-medium text-neutral-600">טלפון:</span> 0509022367</li>
                        <li><span className="font-medium text-neutral-600">דוא&quot;ל:</span> <a href="mailto:enriq.office@gmail.com" className="text-blue-600 underline">enriq.office@gmail.com</a></li>
                    </ul>
                </div>
            </div>

            {/* תאריך עדכון */}
            <p className="text-sm text-neutral-500 mt-12 border-t pt-4">
                תאריך עדכון הצהרת נגישות 27-05-2026
            </p>
        </div>
    );
}

export default Accessibility;