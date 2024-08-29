import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <p>Hi, my name is Michael, I'm a junior developer looking to learn more for my professional work life and I'm not a robot at all. </p>
      <p>I am currently a recent graduate with a degree as a Network and Computer Operations Technician at the University of Colombia.</p>
	  <p>My objectives as a professional include acquiring more knowledge in this great field, being competent and standing out for my great work in different projects with my team.</p>
		<p>I stand out for:</p>

      <div className="skills-section">
        <h3>Lenguaje Programing</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Frontend</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3 / Sass</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Bases de Datos</h4>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="additional-skills">
        <h3>Otras Habilidades</h3>
        <ul>
          <li>Git / Control de versiones</li>
          <li>Metodologías Ágiles (Scrum)</li>
          <li>Diseño Responsivo</li>
          <li>Optimización de rendimiento web</li>
          <li>Accesibilidad web</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;