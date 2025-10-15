function Button({ children, className = "" }) {
  return (
    <button
      className={`
        bg-purple-600 hover:bg-purple-700 
        text-white 
        px-6 py-2 
        rounded-lg 
        transition-colors duration-200
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
