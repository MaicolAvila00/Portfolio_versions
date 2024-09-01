import React from 'react';
import LinkProyecto from './utils/LinkProyect'

  const projects = [
    { title: "Twitter Users Cards Following - React-JavaScript+Swc", 
      image: "https://placehold.co/300x200" 
      links: [
         {
          url: 'https://game-topaz-gamma.vercel.app/'
         } 
      ],
    },
    { title: "Game Tic Tac Toe", 
      image: "https://placehold.co/300x200" 
      links: [
        {
          url: 'https://game-topaz-gamma.vercel.app/'

        }
      ],

    },
    { title: "Awesome Profile Cards - ReactJS", 
      image: "https://placehold.co/300x200" 

    },
   ];

   const Projects = () => {
   return (
    <div className="projects">
      <h2>Mis Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, index) => (
          <button 
            key={index} className="relative overflow-hidden rounded-lg shadow-lg project-card">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-lg font-bold text-center px-2">{project.title}</h2>
              <LinkProyecto links={proyect.links} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;