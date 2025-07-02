import React from 'react';
import { FaTimes, FaStar, FaHeart } from 'react-icons/fa';
import './PricingModal.css';

const PricingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pricingData = [
    {
      category: "SERVICIOS",
      services: [
        { name: "Manicura rusa", price: "$ 12.000,00" },
        { name: "Esmaltado semipermanente", price: "$ 13.500,00" },
        { name: "Kapping Gel", price: "$ 14.500,00" },
        { name: "Extension Soft Gel", price: "$ 19.500,00" },
        { name: "Press On Nails", price: "-" },
      ]
    },
    {
      category: "DISEÑOS",
      services: [
        { name: "Decoración básica por uña (stamping, stickers, polvos, glitters)", price: "$ 300,00" },
        { name: "Decoración básica en las 10 uñas", price: "$ 2.500,00" },
        { name: "Diseño elaborado", price: "$ 600,00" },
        { name: "Francesita", price: "$ 500,00" },
      ]
    },
    {
      category: "EXTRAS",
      services: [
        { name: "Extension de uña con SOFT GEL", price: "$ 2.000,00" },
        { name: "Arreglo de uña", price: "$ 600,00" },
        { name: "Remoción de otro colega", price: "$ 8.000,00" },
        { name: "Visita a domicilio", price: "$ 5.000,00" },
      ]
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">
            <FaHeart className="title-icon" />
            Precios Kitty Nails
            <FaHeart className="title-icon" />
          </h2>
          <p className="modal-subtitle">¡Descubrí nuestros servicios y precios!</p>
        </div>

        <div className="pricing-container">
          {pricingData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="pricing-category">
              <h3 className="category-title">
                <FaStar className="category-icon" />
                {category.category}
              </h3>
              <div className="services-list">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="service-item">
                    <span className="service-name">{service.name}</span>
                    <span className="service-price">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <p className="footer-note">
            💖 Los precios pueden variar según la complejidad del diseño
          </p>
          <p className="footer-note">
            🐱 ¡Consultá por diseños personalizados!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingModal; 