import { LanguageProvider } from './context/LanguageContext';
import Background from './components/Background';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Background />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </LanguageProvider>
  );
}

export default App;
