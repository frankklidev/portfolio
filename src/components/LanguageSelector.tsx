import React from 'react';
import { useLanguage } from './LanguageContext';
import CubaFlag from '../assets/cuba.svg';
import UsaFlag from '../assets/usa.avif';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => handleChange('es')} className={`p-2 rounded-md ${language === 'es' ? 'bg-green-500' : 'bg-gray-800'}`}>
        <img src={CubaFlag} alt="Español" className="w-6 h-6" title="Español" />
      </button>
      <button onClick={() => handleChange('en')} className={`p-2 rounded-md ${language === 'en' ? 'bg-green-500' : 'bg-gray-800'}`}>
        <img src={UsaFlag} alt="English" className="w-6 h-6" title="English" />
      </button>
    </div>
  );
};

export default LanguageSelector;
