import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import hero from "../../assets/hero.svg";

function Hero() {
  return (
    <div className="text-center px-4">
      <div className="relative max-w-5xl mx-auto animate-fade-in shadow-xl rounded-2xl overflow-hidden">
        <div className="relative group">
          <div className="relative rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              // FIXED: Reduced static height for better desktop scaling
              src={hero}
              className="w-full h-[450px] md:h-[450px] lg:h-[480px] object-cover"
              alt="Hero Background"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-between items-center p-4 bg-black/30">
          <div className="flex flex-col items-center justify-center flex-grow">
            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-md">
              להיות בעלים של הדירה הכי יפה ברחוב, שמכניסה הכי הרבה,
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                ולהנות מהדרך זה קל!
              </span>
            </h1>
          </div>

          <NavLink to="/contact" className="mb-4">
            <Button
              className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg 
                         bg-white/20 backdrop-blur-xs text-neutral-800 
                         shadow-lg rounded-xl
                         hover:bg-white/30 hover:text-neutral-900 hover:shadow-xl 
                         transform hover:scale-105 transition-all duration-300"
            >
              קבלו הצעת מחיר חינם
            </Button>
          </NavLink>
        </div>
      </div>

      <p className="text-lg sm:text-xl md:text-xl text-neutral-600 mt-8 md:mt-10 max-w-3xl mx-auto leading-relaxed px-2">
        אנחנו מתמחים בדירות להשקעה, שיפוצים מיוחדים ומדוייקים וליווי מלא לאורך
        כל הדרך!
      </p>
    </div>
  );
}

export default Hero;
