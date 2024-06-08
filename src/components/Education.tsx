import React from 'react';
import { FaSchool, FaGraduationCap } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const education = [
  {
    school: "Universidad Tecnológica de La Habana (CUJAE)",
    degree: "Ingeniería de Software",
    description: "Me gradué en Ingeniería de Software, adquiriendo habilidades avanzadas en desarrollo y gestión de software.",
    status: "Graduado",
    icon: <FaGraduationCap className="w-10 h-10 text-green-500" />,
    statusIcon: <MdVerified className="w-6 h-6 text-green-500" />
  },
  {
    school: "Preuniversitario",
    degree: "Bachillerato en Ciencias",
    description: "Estudios generales con enfoque en ciencias y matemáticas.",
    status: "Graduado",
    icon: <FaSchool className="w-10 h-10 text-green-500" />,
    statusIcon: <MdVerified className="w-6 h-6 text-green-500" />
  }
];

const Education: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Formación</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0 p-4">
              {edu.icon}
            </div>
            <div className="flex flex-col justify-between p-4 flex-grow">
              <h3 className="text-xl font-bold">{edu.school}</h3>
              <p className="text-gray-700">{edu.degree}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
            <div className="flex items-center space-x-2 p-4 text-green-500">
              <span className="bg-gray-800 text-white px-2 py-1 rounded-md">{edu.status}</span>
              {edu.statusIcon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
