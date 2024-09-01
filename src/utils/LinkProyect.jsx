// Componente LinkProyecto.js
import React from 'react';
//Nuevo componente oara los links
const LinkProyecto = ({ links }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-bold text-center px-2 mx-2"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinkProyecto;