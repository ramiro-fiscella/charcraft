import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      {/* Sección de información de la aplicación */}
      <div className="app-info">
        <h2 className="app-info-title">Sobre la Aplicación</h2>
        <p className="app-info-description">
          ¡Bienvenido a nuestra aplicación! Aquí puedes encontrar información
          sobre nuestra plataforma de juegos de fantasía. Explora mundos
          mágicos, crea personajes épicos y embarcarte en aventuras
          inolvidables.
        </p>
        <img
          src="/images/hero_image.jpg"
          alt="Hero Image"
          className="app-info-hero-image"
        />
      </div>

      {/* Sección de información personal */}
      <div className="personal-info">
        <h2 className="personal-info-title">Sobre Mí</h2>
        <img
          src="/images/profile_picture.jpg"
          alt="Profile Picture"
          className="personal-info-profile-picture"
        />
        <p className="personal-info-description">
          Soy un desarrollador web freelance apasionado por la creación de
          aplicaciones web increíbles. Si estás buscando un desarrollador
          motivado y comprometido para tu próximo proyecto, ¡no dudes en
          contactarme!
        </p>
        {/* Iconos de redes sociales */}
        <div className="social-links">
          <a href="https://github.com/tuusuario" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tuusuario" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/tuusuario" className="social-link">
            <FaTwitter />
          </a>
        </div>
        {/* Llamado a la acción */}
        <button className="cta-button">¡Contáctame!</button>
      </div>
    </div>
  );
};

export default About;
