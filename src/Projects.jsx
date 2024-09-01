import React from 'react';
//Images or page web
import GameImage from './assets/img/GameImage.png';
import PersonList from './assets/img/PersonList.png';
import TwitterCards from './assets/img/TwitterCards.png';
import PageWeb from './assets/img/PageWeb.png';


//Cards for projects
const Projects = () => {
  const projects = [
    { title: "Twitter Users Cards Following - React-JavaScript+Swc", 
      image: TwitterCards, 
      link: 'https://twitter-cards-nine.vercel.app/'
    },

    { title: " Game Tic Tac Toe - Reactjs", 
      image: GameImage, 
      link: 'https://game-topaz-gamma.vercel.app/'
    },

    { title: " List Person for database- React-TypeScript", 
      image: PersonList,   
      link: 'https://types-tau.vercel.app/'    
    },

    { title: " This Page 'My Portofolio'", 
      image: PageWeb,   
      link: 'https://types-tau.vercel.app/'    
    },
   ];

   return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
            key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h2 className="project-title">{project.title}</h2>
              
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;