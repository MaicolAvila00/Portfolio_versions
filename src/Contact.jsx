import React from 'react';

const Contact = () => {
    const linkedInUrl = "https://www.linkedin.com/in/maicol%C3%A1vila-developer-junior/";
    const DownloadCurriculum = "Curriculum Maicol Avila_compressed.pdf";
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={DownloadCurriculum} target="_blank" rel="noopener noreferrer">Download Curriculum</a>
      </div>
    </div>
  );
};

export default Contact;