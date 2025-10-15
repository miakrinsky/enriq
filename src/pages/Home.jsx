import CallToAction from "../components/home/CallToAction";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import TrustIndicators from "../components/home/TrustIndicators";
import Section from "../components/ui/Section";
import FeaturedProjects from "../components/home/FeaturedProjects";

function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>

      <Section bg="gray">
        <TrustIndicators />
      </Section>

      <Section>
        <FeaturedProjects />
      </Section>

      <Section bg="gray">
        <Services />
      </Section>

      <Section bg="purple">
        <CallToAction />
      </Section>
    </>
  );
}

export default Home;
