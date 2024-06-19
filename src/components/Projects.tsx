import React from 'react';
import { FaLink, FaGithub, FaReact } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: "ProjectTitle",
    subtitle: "ProjectSubtitle",
    description: "ProjectDescription",
    tech: ["React.js", "Supabase"],
    links: {
      demo: "https://barber-turn.vercel.app/",
      github: "https://github.com/frankklidev/barber-turn"
    },
    image: "https://images.unsplash.com/photo-1621607505833-616916c46a25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
    icon: <FaReact className="w-10 h-10 text-green-500" />
  },
  {
    title: "JewerlySite",
    subtitle: "JewerlyCatalog",
    description: "JewerlyDescription",
    tech: ["DaisyUI", "React.js"],
    links: {
      demo: "https://joyeria-nine.vercel.app/",
      github: "https://github.com/frankklidev/joyeria"
    },
    image: "https://images.unsplash.com/photo-1626122509259-ea8e0a136ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZXJseXxlbnwwfHwwfHx8MA%3D%3D",
    icon: <FaReact className="w-10 h-10 text-green-500" />
  }
];

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">{t('Projects')}</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex-shrink-0 p-4">
              {project.icon}
            </div>
            <div className="flex flex-col justify-between p-4">
              <h3 className="text-xl font-bold">{t(project.title)}</h3>
              <p className="text-gray-700">{t(project.subtitle)}</p>
              <p className="text-gray-600">{t(project.description)}</p>
              <div className="flex space-x-2 my-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{tech}</span>
                ))}
              </div>
              <div className="flex space-x-4 mt-2">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-green-500"><FaLink className="w-6 h-6" /></a>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-green-500"><FaGithub className="w-6 h-6" /></a>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="w-full md:w-1/3 object-cover md:max-h-80" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
