import React, { useState } from 'react';
import './App.css';
import logo from './images/kitty_nails_logo.png';
import { FaInstagram, FaWhatsapp, FaPinterest, FaYoutube, FaTiktok, FaDollarSign } from 'react-icons/fa';
import Particles from './Particles';
import PricingModal from './PricingModal';

function App() {
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);

  const links = [
    {
      title: "¡Agendá tu turno!",
      url: "https://wa.me/542213144468",
      icon: <FaWhatsapp size={22} />
    },
    {
      title: "Instagram",
      url: "https://instagram.com/kittynails.ar",
      icon: <FaInstagram size={22} />
    },
    {
      title: "Nail Inspo",
      url: "https://ar.pinterest.com/grepiacentini/nail-inspo-kitty-nails/",
      icon: <FaPinterest size={22} />
    },
    {
      title: "Tik Tok",
      url: "https://www.tiktok.com/@kittynails.ar?is_from_webapp=1&sender_device=pc",
      icon: <FaTiktok size={22} />
    },
    {
      title: "Kitty Nails Playlist",
      url: "https://youtube.com/playlist?list=PLJxCP24SOr4x-K_SNN27y8jLHsO0qcDKA&si=HaIUZQERGUIa2Ae5",
      icon: <FaYoutube size={22} />
    }
  ];

  return (
    <div className="App">
      <Particles />
      <div className="container">
        <img
          src={logo}
          alt="Kitty Nails Logo"
          className="profile-logo"
          style={{ cursor: 'pointer' }}
        />
        {/* Links */}
        <div className="links-container">
          {/* Pricing Button */}
          <button
            className="link-card pricing-button"
            type="button"
            onClick={() => setIsPricingModalOpen(true)}
            tabIndex={0}
          >
            <span className="link-icon">
              <FaDollarSign size={22} />
            </span>
            <span className="link-title">Ver Precios</span>
          </button>
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
      
      {/* Pricing Modal */}
      <PricingModal 
        isOpen={isPricingModalOpen} 
        onClose={() => setIsPricingModalOpen(false)} 
      />
    </div>
  );
}

export default App;
