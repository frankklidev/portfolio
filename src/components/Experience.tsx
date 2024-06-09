import React from 'react';
import { FaBriefcase, FaLaptopCode, FaDatabase } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Desarrollador Freelance",
      company: "Freelance",
      duration: "Enero 2024 - Presente",
      description: "Actualmente estoy inmerso en el desarrollo de apps a la medida",
      icon: <FaLaptopCode className="w-10 h-10 text-green-500 font-bold" />
    },
    {
      role: "Desarrollador Frontend",
      company: "Empresa Codeberry",
      duration: "Septiembre 2023 - Diciembre 2023",
      description: "Desarrollé funcionalidades web utilizando Next.js y TypeScript, mejorando la eficiencia del equipo y la experiencia del usuario.",
      icon: <FaLaptopCode className="w-10 h-10 text-green-500 font-bold" />
    },
    {
      role: "Desarrollador Backend",
      company: "Empresa Countigo",
      duration: "Septiembre 2022 - Diciembre 2023",
      description: "Implementé soluciones backend con Node.js y Express, y colaboré en proyectos de frontend con React.js.",
      icon: <FaDatabase className="w-10 h-10 text-green-500 font-bold" />
    },
    {
      role: "Desarrollador Junior",
      company: "Empresa Get",
      duration: "Octubre 2018 - Abril 2020",
      description: "Trabajé en proyectos web utilizando HTML, CSS y JavaScript, y asistí en la creación de módulos reutilizables.",
      icon: <FaBriefcase className="w-10 h-10 text-green-500 font-bold" />
    }
  ];

  return (
    <div className="p-6 rounded-lg">
      <h2 className="text-2xl font-extrabold text-center mb-6">Experiencia</h2>
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
