function Section({ children }) {
  return (
    <section className={`py-16 md:py-20`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export default Section;
