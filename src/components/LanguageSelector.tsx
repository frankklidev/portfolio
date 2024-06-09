import React from 'react';
import { useTranslation } from 'react-i18next';
import CubaFlag from '../assets/cuba.svg';
import UsaFlag from '../assets/usa.avif';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => handleChange('es')} className={`p-2 rounded-md ${i18n.language === 'es' ? 'bg-green-500' : 'bg-gray-800'}`}>
        <img src={CubaFlag} alt="Español" className="w-6 h-6" title="Español" />
      </button>
      <button onClick={() => handleChange('en')} className={`p-2 rounded-md ${i18n.language === 'en' ? 'bg-green-500' : 'bg-gray-800'}`}>
        <img src={UsaFlag} alt="English" className="w-6 h-6" title="English" />
      </button>
    </div>
  );
};

export default LanguageSelector;
