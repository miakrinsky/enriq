// Section.jsx
function Section({ children }) {
  return (
    <section>
      {/* Current: px-0 md:px-6 lg:px-8 */}
      <div className="container mx-auto px-0 md:px-6 lg:px-8 py-4">
        {children}
      </div>
    </section>
  );
}
export default Section;
