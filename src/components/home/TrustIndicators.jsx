function TrustIndicators() {
  const indicators = [
    {
      icon: "✅",
      title: "ניסיון מוכח",
      description: "עשרות דירות שנרכשו ושופצו דרכינו",
    },
    {
      icon: "🏢",
      title: 'היכרות אישית עם השקעות נדל"ן בחיפה',
      description: "אנחנו בעלים של מספר רב של נכסים, ביניהם גם בניין שלם",
    },
    {
      icon: "🔄",
      title: "שירות מקצה לקצה",
      description: "איתור עסקאות, ליווי ברכישה, שיפוץ, השכרה ומכירה עתידית",
    },
    {
      icon: "📈",
      title: "תשואה מקסימלית",
      description:
        "עבודה מקצועית מביאה לתוצאות טובות בפער משמעותי, אם יודעים מה נכון לעשות. גם בשכירות וגם במכירה עתידית",
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-20">
        למה משקיעים בוחרים בנו?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {indicators.map((item, index) => (
          <div
            key={index}
            className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2"
          >
            <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
              {item.title}
            </h3>

            <p className="text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustIndicators;
