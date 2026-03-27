import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import GitHubStats from './sections/GitHubStats';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      {/* Global overlays */}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <GitHubStats />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
