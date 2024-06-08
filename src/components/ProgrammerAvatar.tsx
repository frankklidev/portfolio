import React from 'react';
import avatar from '../assets/avatar.jpg'; // Asegúrate de que la ruta sea correcta

const ProgrammerAvatar: React.FC = () => {
  return (
    <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
      <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default ProgrammerAvatar;
