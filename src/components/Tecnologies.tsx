import React from 'react';
import { FaReact, FaCss3Alt, FaJs, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs,SiTypescript } from 'react-icons/si';

const Technologies: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-extrabold text-center mb-6">Tecnologías</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 text-6xl" />
          <p className="mt-2 text-gray-700">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-600 text-6xl" />
          <p className="mt-2 text-gray-700">CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="text-yellow-500 text-6xl" />
          <p className="mt-2 text-gray-700">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-500 text-6xl" />
          <p className="mt-2 text-gray-700">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-black text-6xl" />
          <p className="mt-2 text-gray-700">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <FaVuejs className="text-green-600 text-6xl" />
          <p className="mt-2 text-gray-700">Vue.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="text-green-600 text-6xl" />
          <p className="mt-2 text-gray-700">TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
