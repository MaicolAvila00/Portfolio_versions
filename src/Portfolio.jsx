import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import './index.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Portfolio Michael Avila</h1>
        <nav>
          <ul>
            <li><a href="#about">AboutMe</a></li>
            <li><a href="#projects">Proyects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Portfoil. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};




export default Portfolio;