import React from 'react';
import { FaDownload, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-4 space-y-2 md:space-y-0 md:flex-row md:space-x-2">
      <a href="mailto:frankkli.personal@gmail.com" className="btn btn-primary flex items-center text-lg border-none text-white bg-gray-600">
        <FaEnvelope className="mr-2" /> frankkli.personal@gmail.com
      </a>
      <a href="/path/to/your/resume.pdf" className="btn flex items-center text-lg bg-green-500 text-white border-none" download>
        <FaFileAlt className="mr-2" /> CV <FaDownload className="ml-2" />
      </a>
      <a href="https://github.com/frankklidev" target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center text-lg bg-black text-white border-none">
        <FaGithub className="mr-2" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/frankklidev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary flex items-center text-lg bg-blue-600 text-white border-none">
        <FaLinkedin className="mr-2" /> LinkedIn
      </a>
    </div>
  );
};

export default Contact;
