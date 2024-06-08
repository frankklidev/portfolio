import React from 'react';
import { useLanguage } from './LanguageContext';
import { FaFlagUsa, FaFlag } from 'react-icons/fa';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => handleChange('es')} className={`p-2 rounded-md ${language === 'es' ? 'bg-green-500' : 'bg-gray-800'}`}>
        <FaFlag className="w-6 h-6 text-white" title="Español" />
      </button>
      <button onClick={() => handleChange('en')} className={`p-2 rounded-md ${language === 'en' ? 'bg-green-500' : 'bg-gray-800'}`}>
        <FaFlagUsa className="w-6 h-6 text-white" title="English" />
      </button>
    </div>
  );
};

export default LanguageSelector;
