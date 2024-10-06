import About from "./sections/About";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
}
