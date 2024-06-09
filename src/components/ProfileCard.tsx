import React from 'react';
import ProgrammerAvatar from './ProgrammerAvatar';
import { FaDownload, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <ProgrammerAvatar />
      </div>
      <div className="ml-0 md:ml-6 mt-4 md:mt-0 flex flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-extrabold text-center md:text-left">Franklin Núñez Ramírez</h2>
          <p className="text-gray-700 text-center md:text-left">Ingeniero de Software</p>
          <p className="text-gray-500 text-center md:text-left">
            Soy un ingeniero de software dedicado a resolver problemas complejos a través de soluciones tecnológicas innovadoras y eficientes.
          </p>
          <p className="text-gray-500 text-center md:text-left">
            Con una pasión por crear experiencias de usuario excepcionales y un enfoque en la mejora continua,
          </p>
          <p className="text-gray-500 text-center md:text-left">
            busco nuevas oportunidades para aplicar mis habilidades y contribuir al éxito de proyectos dinámicos y visionarios.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2 w-full">
          <button className="btn btn-primary flex items-center text-lg text-white border-none bg-gray-600">
            <FaEnvelope className="mr-2" /> frankkli.personal@gmail.com
          </button>
          <button className="btn flex items-center text-lg bg-green-500 text-white border-none">
            <FaFileAlt className="mr-2" /> CV <FaDownload className="ml-2" />
          </button>
          <button className="btn btn-primary flex items-center text-lg bg-black text-white border-none">
            <FaGithub className="mr-2" /> GitHub
          </button>
          <button className="btn btn-primary flex items-center text-lg bg-blue-600 text-white border-none">
            <FaLinkedin className="mr-2" /> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
