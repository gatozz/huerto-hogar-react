// src/components/Layout/Footer.jsx

import React from 'react';


const Footer = ( { navigateTo }) => {
    return (
        <footer className="footer">
            <section className="footer__container container">
                <nav className="nav nav--footer">
                    <h2 className="footer__title">HUERTO HOGAR</h2>
                    <ul className="nav__link nav__link--footer">
                        <li className="nav__items">
                            <a href="/" target="_blank" rel="noopener noreferrer" className="nav__links">Inicio</a> 
                        </li>
                        <li className="nav__items">
                            <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="nav__links">Contacto</a> 
                        </li>
                        <li className="nav__items">
                            <a href="https://blogs.uoc.edu/cienciasdelasalud/es/que-es-alimentacion-sostenible/?utm_source" target="_blank" rel="noopener noreferrer" className="nav__links">Blog</a> 
                        </li>
                    </ul>
                </nav>

                {/* Formulario de Newsletter (simplificado, sin lógica de submit) */}
                <form className="footer__form">
                    <h2 className="footer__newsletter">NO TE PIERDAS NADA</h2>
                    <div className="footer__inputs">
                        <button onClick={() => navigateTo('login')} className="cta">Registrate</button>
                    </div>
                </form>
            </section>

            {/* Derechos de autor y Redes Sociales */}
            <section className="footer__copy container">
                <div className="footer__social">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__icons"><img src="./images/instagram.png" alt="Instagram" className="footer__img" /></a>
                    <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="footer__icons"><img src="./images/facebook.png" alt="Facebook" className="footer__img" /></a>
                    <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" className="footer__icons"><img src="./images/twitter.png" alt="Twitter/X" className="footer__img" /></a>
                </div>

                <p className="footer__copyright">© 2025 HuertoHogar - Todos los derechos reservados</p>
            </section>
        </footer>
    );
};

export default Footer;