function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props} // מאפשר להעביר props נוספים כמו disabled, type, onClick
      className={`
        bg-purple-600 hover:bg-purple-700 
        text-white 
        px-6 py-2 
        rounded-lg 
        transition-all duration-200
        font-medium
        focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-white
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
