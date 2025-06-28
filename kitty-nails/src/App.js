import React from 'react';
import './App.css';
import logo from './images/kitty_nails_logo.png';
import { FaInstagram, FaWhatsapp, FaPinterest, FaYoutube, FaTiktok } from 'react-icons/fa';

function App() {
  const links = [
    {
      title: "¡Agendá tu turno!",
      url: "https://wa.me/1234567890",
      icon: <FaWhatsapp size={22} />
    },
    {
      title: "Instagram",
      url: "https://instagram.com/kittynails",
      icon: <FaInstagram size={22} />
    },
    {
      title: "Nail Inspo",
      url: "https://pinterest.com/kittynails",
      icon: <FaPinterest size={22} />
    },
    {
      title: "Tik Tok",
      url: "https://tiktok.com/@kittynails",
      icon: <FaTiktok size={22} />
    },
    {
      title: "Kitty Nails Playlist",
      url: "https://youtube.com/playlist?list=PLKittyNails",
      icon: <FaYoutube size={22} />
    }
  ];

  return (
    <div className="App">
      <div className="profile-logo-outer">
        <img src={logo} alt="Kitty Nails Logo" className="profile-logo" />
      </div>
      <div className="container">
        
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
