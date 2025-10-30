// src/components/Layout/Header.jsx

import React, { useState, useCallback } from 'react';

// Definición de enlaces para mantener el código limpio
const NAV_LINKS = [
  // isPage: true indica que el link debe usar navigateTo para cambiar la vista de la aplicación.
  { name: "Inicio", href: "home", isExternal: false, isPage: true }, // Ir a la vista 'home'
  { name: "Acerca de", href: "#quienes", isExternal: false, isPage: false }, // Enlace interno (scroll)
  { name: "Inicia Sesión", href: "login", isExternal: false, isLogin: true, isPage: true }, // Ir a la vista 'login'
  { name: "Blog", href: "https://blogs.uoc.edu/cienciasdelasalud/es/que-es-alimentacion-sostenible/?utm_source", isExternal: true, isPage: false }, // URL externa
  { name: "Carrito", href: "cart", isExternal: false, isCart: true, isPage: true }, // Ir a la vista 'cart'
];

const Header = ({ navigateTo }) => {
  // Estado para controlar si el menú móvil está abierto (true) o cerrado (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  // Función para cerrar el menú (al hacer clic en un link)
  const closeMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  // Manejador de clic universal para los enlaces
  const handleLinkClick = (e, link) => {
    closeMenu(); // Siempre cerrar el menú móvil al hacer clic

    if (link.isPage) {
      // 1. Es una página interna (home, login, cart). Prevenimos el comportamiento por defecto del <a>
      e.preventDefault();
      navigateTo(link.href); 
    }

  };

  const menuShowClass = isMenuOpen ? 'nav__link--show' : '';

  return (
    <header className="hero">
      <nav className="nav container">

        {/* 🚨 LISTA DE ENLACES (El Menú Principal / Móvil) 🚨 */}
        <ul className={`nav__link nav__link--menu ${menuShowClass}`}>

          {NAV_LINKS.map((link) => (
            <li key={link.name} className="nav__items">
              <a
                // Usamos href para enlaces externos o internos de la misma página (#)
                href={link.href}
                className="nav__links"
                target={link.isExternal ? "_blank" : "_self"}
                // 💡 CORRECCIÓN: Usamos el manejador que activa navigateTo si es una página interna
                onClick={(e) => handleLinkClick(e, link)}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
              >
                {/* Contenido del link: Imagen para Carrito, o Texto para el resto */}
                {link.isCart ? (
                  // Asumo que tienes la imagen en esta ruta
                  <img src="/images/carrito.png" alt="Carrito de compras" className="about__icon" />
                ) : (
                  link.name
                )}
              </a>
            </li>
          ))}

          <img
            src="/images/fondoFrutas.jpg"
            className="nav__close"
            alt="Cerrar menú"
            onClick={closeMenu}
          />
        </ul>

        <div className="nav__menu" onClick={toggleMenu}>
          <img src="/images/fondoFrutas.jpg" className="nav__img" alt="Abrir menú" />
        </div>

      </nav>

      {/* Hero Section - Mantener la estructura original para los estilos */}
      <section className="hero_container container">
        <h1 className="hero__title">Huerto Hogar</h1>
        <p className="hero__paragraph">¡Únete a nosotros y disfruta de productos frescos y saludables, directo a tu hogar!</p>
        <a href="#testimonios" className="cta">Explorar productos</a>
      </section>
    </header>
  );
};

export default Header;