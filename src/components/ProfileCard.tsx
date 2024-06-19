import React from 'react';
import { useTranslation } from 'react-i18next';
import ProgrammerAvatar from './ProgrammerAvatar';
import { FaDownload, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileCard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row p-6 bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <ProgrammerAvatar />
      </div>
      <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold text-center md:text-left">Franklin Núñez Ramírez</h2>
          <p className="text-gray-700 text-center md:text-left">{t('Software Engineer')}</p>
          <p className="text-gray-500 text-center md:text-left">
            {t('Description')}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2 w-full">
          <a href="mailto:frankkli.personal@gmail.com" className="btn flex items-center text-lg bg-gray-600 text-white border-none">
            <FaEnvelope className="mr-2" /> frankkli.personal@gmail.com
          </a>
          <a href="/path/to/your/resume.pdf" className="btn flex items-center text-lg bg-green-500 text-white border-none" download>
            <FaFileAlt className="mr-2" /> {t('Resume')} <FaDownload className="ml-2" />
          </a>
          <a href="https://github.com/frankklidev" className="btn btn-primary flex items-center text-lg bg-black text-white border-none">
            <FaGithub className="mr-2" /> {t('GitHub')}
          </a>
          <a href="https://www.linkedin.com/in/frankklidev/" className="btn btn-primary flex items-center text-lg bg-blue-600 text-white border-none">
            <FaLinkedin className="mr-2" /> {t('LinkedIn')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
