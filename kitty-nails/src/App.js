import React from 'react';
import './App.css';
import { FaInstagram, FaWhatsapp, FaPinterest, FaYoutube, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  const links = [
    {
      title: "Instagram",
      url: "https://instagram.com/kittynails.ar",
      icon: <FaInstagram color="#fff" size={22} />
    },
    {
      title: "¡Agendá tu turno!",
      url: "https://wa.me/1234567890",
      icon: <FaWhatsapp color="#fff" size={22} />
    },
    {
      title: "Nail Inspo",
      url: "#galeria",
      icon: <FaPinterest color="#fff" size={22} />
    },
    {
      title: "Tik Tok",
      url: "#galeria",
      icon: <FaTiktok color="#fff" size={22} />
    },
    {
      title: "Kitty Nails Playlist",
      url: "#ubicacion",
      icon: <FaYoutube color="#fff" size={22} />
    }
  ];

  return (
    <div className="App">
      <div className="container">
        {/* Header */}
        <div className="header">
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
            ¡Vení a afilar esas garritas!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
