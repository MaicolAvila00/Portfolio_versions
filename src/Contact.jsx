import React, { useState } from 'react';


const Contact = () => {
  const linkedInUrl = "https://www.linkedin.com/in/maicol%C3%A1vila-developer-junior/";
  const GitHub = "https://github.com/MaicolAvila00";
<<<<<<< HEAD
  const DownloadCurriculum = "https://vercel.com/Curriculum Maicol Avila.pdf"; 
=======
  const DownloadCurriculum = "/public/pdf/Curriculum Maicol Avila.pdf"; 
>>>>>>> 46f556b001d991d0eb37cc0bfe0eb16740729cda
  const {email} = useState('maicol4vila00@gmail.com'); 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Correo copiado al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar correo:', error);
      });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>

      <form>
        
        <div className="form-group">
          <label htmlFor="message">Email: maicol4vila00@gmail.com</label>
        </div>

        <button type="button" onClick={handleCopyEmail}>Copy Email</button>
      </form>

      <div className="social-links">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={GitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={DownloadCurriculum} download="Curriculum Maicol Avila.pdf" className='btn-download'>
        Download Curriculum
      </a>
      </div>
    </div>
  );
};

export default Contact;
