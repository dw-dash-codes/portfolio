import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Work />
        <About />
        <Stack />
        <Education />
        <Contact />
      </main>
    </>
  );
}
