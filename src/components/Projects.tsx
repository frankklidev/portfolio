import React from 'react';
import { FaLink, FaGithub, FaReact } from 'react-icons/fa';

const project = {
  title: "Reserva tu turno",
  subtitle: "Aplicación de reservas",
  description: "Aplicación para gestionar reservas de turnos en diferentes negocios, utilizando React.js y Supabase. La aplicación permite a los usuarios seleccionar el servicio deseado, elegir una fecha y hora disponibles, y recibir confirmaciones en tiempo real. Además, los administradores pueden gestionar las reservas, ver informes y analizar datos para optimizar el uso del tiempo y los recursos.",
  tech: ["React.js", "Supabase"],
  links: {
    demo: "https://barber-turn.vercel.app/",
    github: "https://github.com/frankklidev/barber-turn"
  },
  image: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmJlcnNob3B8ZW58MHx8MHx8fDA%3D",
  icon: <FaReact className="w-10 h-10 text-green-500" />
};

const Projects: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Proyectos</h2>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex-shrink-0 p-4">
            {project.icon}
          </div>
          <div className="flex flex-col justify-between p-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-gray-700">{project.subtitle}</p>
            <p className="text-gray-600">{project.description}</p>
            <div className="flex space-x-2 my-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{tech}</span>
              ))}
            </div>
            <div className="flex space-x-4 mt-2">
              <a href={project.links.demo} className="text-green-500"><FaLink className="w-6 h-6" /></a>
              <a href={project.links.github} className="text-green-500"><FaGithub className="w-6 h-6" /></a>
            </div>
          </div>
          <img src={project.image} alt={project.title} className="w-full md:w-1/3 object-cover md:max-h-80" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
