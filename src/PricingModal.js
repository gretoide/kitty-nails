import React from 'react';
import { FaTimes, FaStar, FaHeart } from 'react-icons/fa';
import './PricingModal.css';

const PricingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pricingData = [
    {
      category: "Manicura Básica",
      services: [
        { name: "Manicura Simple", price: "$2.500" },
        { name: "Manicura con Esmaltado", price: "$3.500" },
        { name: "Manicura con Esmaltado Semi", price: "$4.500" }
      ]
    },
    {
      category: "Uñas Esculpidas",
      services: [
        { name: "Esculpidas en Gel", price: "$8.500" },
        { name: "Esculpidas en Acrílico", price: "$9.500" },
        { name: "Esculpidas con Diseño", price: "$12.000" }
      ]
    },
    {
      category: "Diseños Especiales",
      services: [
        { name: "Diseño Simple", price: "$1.500" },
        { name: "Diseño Complejo", price: "$2.500" },
        { name: "Diseño con Piedras", price: "$3.000" },
        { name: "Diseño con Foil", price: "$2.000" }
      ]
    },
    {
      category: "Tratamientos",
      services: [
        { name: "Tratamiento de Cutículas", price: "$1.500" },
        { name: "Hidratación Profunda", price: "$2.000" },
        { name: "Reparación de Uña", price: "$1.000" }
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