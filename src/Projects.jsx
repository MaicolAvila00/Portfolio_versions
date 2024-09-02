import React from 'react';
//Images or page web
import GameImage from './assets/img/GameImage.png';
import PersonList from './assets/img/PersonList.png';
import TwitterCards from './assets/img/TwitterCards.png';
import PageWeb from './assets/img/PageWeb.png';

//Cards for projects
const Projects = () => {
  const projects = [

    { card:{
      title: "Twitter Users Cards Following - React-JavaScript+Swc", 
      image: TwitterCards, 
      link: 'https://twitter-cards-nine.vercel.app/'
    },
    },

    { card:{
      title: " Game Tic Tac Toe - Reactjs", 
      image: GameImage, 
      link: 'https://game-topaz-gamma.vercel.app/'
    },
    },

    { card: {
      title: " List Person for database- React-TypeScript", 
      image: PersonList,   
      link: 'https://types-tau.vercel.app/'
    },
    },

    {card: {
       title: " This Page 'My Portfolio'", 
      image: PageWeb,   
      link: 'https://github.com/MaicolAvila00/Portofolio_versions'
    },    
    }
   ];

   return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        
        {projects.map((element) => (
            <a href={element.card.link} target="_blank" rel="noopener noreferrer"
            key={element.card} className="project-card">
            <img src={element.card.image} alt={element.card.title} className="project-image" />
            <div className="project-overlay">
              <h2 className="project-title">{element.card.title}</h2>
              
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
export default Projects;
