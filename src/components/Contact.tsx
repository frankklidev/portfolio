import React from 'react';
import { FaDownload, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-4 space-y-2 md:space-y-0 md:flex-row md:space-x-2">
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
  );
};

export default Contact;
