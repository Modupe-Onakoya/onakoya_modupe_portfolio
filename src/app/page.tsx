import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import NewContact from "@/components/sections/NewContact";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import CustomCursor from "@/components/ui/CustomCursor";
import RevealProvider from "@/components/ui/RevealProvider";

export default function Home() {
  return (
    <RevealProvider>
      <div className="overflow-hidden">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          {/* <Testimonials /> */}
          {/* <Contact /> */}
          <NewContact />
        </main>
        <Footer />
      </div>
    </RevealProvider>
  );
}
