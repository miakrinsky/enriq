function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-b from-neutral-400 to-neutral-700 text-neutral-200">
      <div className="w-full flex items-center flex-col px-4">
        <div className="border-t border-neutral-700/60 py-4 text-center w-full">
          <p className="text-sm text-neutral-200">
            © {year} Enriq Group | כל הזכויות שמורות
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
