import { LocaleProvider } from "@/context/LocaleContext";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <LocaleProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
