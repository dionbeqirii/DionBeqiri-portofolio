import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen bg-[#0a0f1e] overflow-hidden">
        {/* Global ambient blobs */}
        <div className="blob w-96 h-96 bg-emerald-500 top-[-8rem] left-[-6rem]" />
        <div className="blob w-80 h-80 bg-cyan-500 top-[40%] right-[-4rem]" />
        <div className="blob w-64 h-64 bg-emerald-400 bottom-[20%] left-[20%]" />

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
