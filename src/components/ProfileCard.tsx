import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt, FaDownload } from 'react-icons/fa';
import ProgrammerAvatar from './ProgrammerAvatar';

const ProfileCard: React.FC = () => {
  return (
    <div className="flex p-6 bg-white shadow-lg rounded-lg">
      <div className="flex-shrink-0">
        <ProgrammerAvatar />
      </div>
      <div className="ml-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold">Franklin Núñez Ramírez</h2>
          <p className="text-gray-700 text-lg">Ingeniero de Software</p>
          <p className="text-gray-500 text-lg">
            Soy un ingeniero de software dedicado a resolver problemas complejos a través de
            soluciones tecnológicas innovadoras y eficientes.
          </p>
          <p className="text-gray-500 text-lg">
            Con una pasión por crear experiencias de usuario excepcionales y un enfoque en la mejora continua,
          </p>
          <p className="text-gray-500 text-lg">
            busco nuevas oportunidades para aplicar mis habilidades y contribuir al éxito de proyectos dinámicos y visionarios.
          </p>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="btn btn-primary flex items-center text-lg">
            <FaEnvelope className="mr-2" /> frankkli.personal@gmail.com
          </button>
          <button className="btn flex items-center text-lg bg-green-500 text-white">
            <FaFileAlt className="mr-2" /> CV <FaDownload className="ml-2" />
          </button>
          <button className="btn btn-primary flex items-center text-lg bg-black text-white">
            <FaGithub className="mr-2" /> GitHub
          </button>
          <button className="btn btn-primary flex items-center text-lg bg-blue-600 text-white">
            <FaLinkedin className="mr-2" /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
