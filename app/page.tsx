import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import TechStack from "@/components/TechStack";
import { Section, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Section id="projects">
        <SectionHeading
          title="Portfolio"
          highlight="Showcase"
          subtitle="A selection of products I've worked on, plus the education behind them. Each one is live, so take a look."
        />
        <Showcase />
      </Section>
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
}
