import React from 'react';
import './App.css';
import { FaInstagram, FaWhatsapp, FaCalendarAlt, FaImages, FaGem, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  const links = [
    {
      title: "Instagram",
      url: "https://instagram.com/kittynails",
      icon: <FaInstagram color="#fff" size={22} />
    },
    {
      title: "WhatsApp",
      url: "https://wa.me/1234567890",
      icon: <FaWhatsapp color="#fff" size={22} />
    },
    {
      title: "Reservar Turno",
      url: "#turnos",
      icon: <FaCalendarAlt color="#fff" size={22} />
    },
    {
      title: "Ver Trabajos",
      url: "#galeria",
      icon: <FaImages color="#fff" size={22} />
    },
    {
      title: "Precios",
      url: "#precios",
      icon: <FaGem color="#fff" size={22} />
    },
    {
      title: "Ubicación",
      url: "#ubicacion",
      icon: <FaMapMarkerAlt color="#fff" size={22} />
    }
  ];

  return (
    <div className="App">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="profile-section">
            <div className="profile-image">
              <span className="profile-icon">🐱</span>
            </div>
            <h1 className="brand-name">Kitty Nails</h1>
            <p className="tagline">✨ Belleza en tus manos ✨</p>
            <p className="description">
              Diseños únicos y profesionales para que tus uñas sean la envidia de todas
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="links-container">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-icon">{link.icon}</span>
              <span className="link-title">{link.title}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="footer">
          <p className="footer-text">
            💖 Hecho con amor para Kitty Nails 💖
          </p>
          <div className="social-icons">
            <span className="social-icon">💅</span>
            <span className="social-icon">✨</span>
            <span className="social-icon">💎</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
