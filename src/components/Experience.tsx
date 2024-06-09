import React from 'react';
import { FaBriefcase, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      role: t("Freelance Developer"),
      company: t("Freelance"),
      duration: "Enero 2024 - Presente",
      description: t("Currently developing custom apps"),
      icon: <FaLaptopCode className="w-10 h-10 text-green-500 font-bold" />
    },
    {
      role: t("Frontend Developer at Codeberry"),
      company: t("Empresa Codeberry"),
      duration: "Septiembre 2023 - Diciembre 2023",
      description: t("Developed web functionalities using Next.js and TypeScript, improving team efficiency and user experience."),
      icon: <FaLaptopCode className="w-10 h-10 text-green-500 font-bold" />
    },
    {
      role: t("Backend Developer at Countigo"),
      company: t("Empresa Countigo"),
      duration: "Septiembre 2022 - Diciembre 2023",
      description: t("Implemented backend solutions with Node.js and Express, and collaborated on frontend projects with React.js."),
      icon: <FaDatabase className="w-10 h-10 text-green-500 font-bold" />
    },
    {
      role: t("Junior Developer at Get"),
      company: t("Empresa Get"),
      duration: "Octubre 2018 - Abril 2020",
      description: t("Worked on web projects using HTML, CSS, and JavaScript, and assisted in creating reusable modules."),
      icon: <FaBriefcase className="w-10 h-10 text-green-500 font-bold" />
    }
  ];

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-extrabold text-center mb-6">{t('Experience')}</h2>
      <ul className="space-y-8">
        {experiences.map((exp, index) => (
          <li key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              {exp.icon}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-extrabold text-gray-500">{exp.company}</h3>
              <p className="text-lg text-gray-500 font-semibold">{exp.role}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
            <div className="text-green-500">
              <p className="bg-gray-200 px-2 py-1 rounded-md">{exp.duration}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
