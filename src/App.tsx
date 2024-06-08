import React from 'react';
import ProfileCard from './components/ProfileCard';

import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './components/LanguageContext';
import SectionDivider from './components/Divider';
import Technologies from './components/Tecnologies';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
          <h1 className="text-4xl font-bold">Mi Portafolio</h1>
          <LanguageSelector />
        </header>
        <main className="flex-1 p-4">
          <ProfileCard />
          <SectionDivider />
          <Technologies />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
          <Contact />
        </main>
        <footer className="w-full p-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Franklin Nunez Ramirez. Todos los derechos reservados.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default App;
