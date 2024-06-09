import React from 'react';
import { I18nextProvider } from 'react-i18next';

import ProfileCard from './components/ProfileCard';

import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider } from './components/LanguageContext';
import i18n from './i18n';
import SectionDivider from './components/Divider';
import Technologies from './components/Tecnologies';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-x-hidden">
          <header className="w-full p-4 bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">{i18n.t('Portfolio')}</h1>
            <LanguageSelector />
          </header>
          <main className="flex-1 p-4 w-full max-w-6xl mx-auto">
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
    </I18nextProvider>
  );
};

export default App;
