export const navLinkStyles = ({ isActive }) =>
  ` transition-colors duration-200 ${
    isActive
      ? "text-purple-600 font-semibold"
      : "text-neutral-700 hover:text-purple-600"
  }`;
