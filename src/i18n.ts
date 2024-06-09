import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Portfolio": "My Portfolio",
      "Projects": "Projects",
      "Contact": "Contact",
      "Software Engineer": "Software Engineer",
      "Description": "I am a software engineer dedicated to solving complex problems through innovative and efficient technological solutions. With a passion for creating exceptional user experiences and a focus on continuous improvement, I seek new opportunities to apply my skills and contribute to the success of dynamic and visionary projects.",
      "Email": "Email",
      "Resume": "Resume",
      "GitHub": "GitHub",
      "LinkedIn": "LinkedIn",
      "ProjectDescription": "Application to manage appointment reservations in various businesses, using React.js and Supabase. The application allows users to select the desired service, choose an available date and time, and receive real-time confirmations. Additionally, administrators can manage reservations, view reports, and analyze data to optimize time and resource usage.",
      "Technologies": "Technologies",
      "Experience": "Experience",
      "Freelance Developer": "Freelance Developer",
      "Currently developing custom apps": "Currently developing custom apps",
      "Frontend Developer at Codeberry": "Frontend Developer at Codeberry",
      "Developed web functionalities using Next.js and TypeScript, improving team efficiency and user experience.": "Developed web functionalities using Next.js and TypeScript, improving team efficiency and user experience.",
      "Backend Developer at Countigo": "Backend Developer at Countigo",
      "Implemented backend solutions with Node.js and Express, and collaborated on frontend projects with React.js.": "Implemented backend solutions with Node.js and Express, and collaborated on frontend projects with React.js.",
      "Junior Developer at Get": "Junior Developer at Get",
      "Worked on web projects using HTML, CSS, and JavaScript, and assisted in creating reusable modules.": "Worked on web projects using HTML, CSS, and JavaScript, and assisted in creating reusable modules.",
      "ProjectTitle": "Book Your Appointment",
      "ProjectSubtitle": "Reservation Application",
      "Education": "Education",
      "Software Engineering Degree": "Software Engineering Degree",
      "Graduated in Software Engineering, acquiring advanced skills in software development and management.": "Graduated in Software Engineering, acquiring advanced skills in software development and management.",
      "Graduated": "Graduated",
      "Pre-University": "Pre-University",
      "Science Baccalaureate": "Science Baccalaureate",
      "General studies with a focus on science and mathematics.": "General studies with a focus on science and mathematics."
    }
  },
  es: {
    translation: {
      "Portfolio": "Mi Portafolio",
      "Projects": "Proyectos",
      "Contact": "Contacto",
      "Software Engineer": "Ingeniero de Software",
      "Description": "Soy un ingeniero de software dedicado a resolver problemas complejos a través de soluciones tecnológicas innovadoras y eficientes. Con una pasión por crear experiencias de usuario excepcionales y un enfoque en la mejora continua, busco nuevas oportunidades para aplicar mis habilidades y contribuir al éxito de proyectos dinámicos y visionarios.",
      "Email": "Correo Electrónico",
      "Resume": "CV",
      "GitHub": "GitHub",
      "LinkedIn": "LinkedIn",
      "ProjectDescription": "Aplicación para gestionar reservas de turnos en diferentes negocios, utilizando React.js y Supabase. La aplicación permite a los usuarios seleccionar el servicio deseado, elegir una fecha y hora disponibles, y recibir confirmaciones en tiempo real. Además, los administradores pueden gestionar las reservas, ver informes y analizar datos para optimizar el uso del tiempo y los recursos.",
      "Technologies": "Tecnologías",
      "Experience": "Experiencia",
      "Freelance Developer": "Desarrollador Freelance",
      "Currently developing custom apps": "Actualmente estoy inmerso en el desarrollo de apps a la medida",
      "Frontend Developer at Codeberry": "Desarrollador Frontend en Codeberry",
      "Developed web functionalities using Next.js and TypeScript, improving team efficiency and user experience.": "Desarrollé funcionalidades web utilizando Next.js y TypeScript, mejorando la eficiencia del equipo y la experiencia del usuario.",
      "Backend Developer at Countigo": "Desarrollador Backend en Countigo",
      "Implemented backend solutions with Node.js and Express, and collaborated on frontend projects with React.js.": "Implementé soluciones backend con Node.js y Express, y colaboré en proyectos de frontend con React.js.",
      "Junior Developer at Get": "Desarrollador Junior en Get",
      "Worked on web projects using HTML, CSS, and JavaScript, and assisted in creating reusable modules.": "Trabajé en proyectos web utilizando HTML, CSS y JavaScript, y asistí en la creación de módulos reutilizables.",
      "ProjectTitle": "Reserva tu turno",
      "ProjectSubtitle": "Aplicación de reservas",
      "Education": "Formación",
      "Software Engineering Degree": "Ingeniería de Software",
      "Graduated in Software Engineering, acquiring advanced skills in software development and management.": "Me gradué en Ingeniería de Software, adquiriendo habilidades avanzadas en desarrollo y gestión de software.",
      "Graduated": "Graduado",
      "Pre-University": "Preuniversitario",
      "Science Baccalaureate": "Bachillerato en Ciencias",
      "General studies with a focus on science and mathematics.": "Estudios generales con enfoque en ciencias y matemáticas."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
