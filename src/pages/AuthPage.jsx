
import React, { useState, useCallback } from 'react';

import '../css/estilo_login.css';

const AuthPage = ({ navigateTo }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log('Enviando LOGIN:', formData.email, formData.password);
    } else {
      console.log('Enviando REGISTRO:', formData);
    }
  }, [isLoginView, formData]);

  const toggleView = useCallback(() => {
    setIsLoginView(prev => !prev);
    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
  }, []);

  // Función auxiliar para Placeholders (si quieres cambiarlos dinámicamente)
  const getPlaceholder = (name) => {
    switch (name) {
      case 'email':
        return 'tu@email.com';
      case 'password':
        return isLoginView ? 'Ingresa tu contraseña' : 'Crea una contraseña segura';
      case 'name':
        return 'Tu nombre completo';
      case 'confirmPassword':
        return 'Repite tu contraseña';
      default:
        return '';
    }
  };

  return (
    <section className="login-container">

      <div className="logo">

        <h1>Huerto Hogar</h1>
        <p>Productos orgánicos frescos directamente a tu hogar</p>
      </div>

      <form onSubmit={handleSubmit}>

        {!isLoginView && (
          <div className="input-group">
            <label htmlFor="name">Nombre completo</label> 
            <input
              type="text"
              id="name"
              name="name"
              placeholder={getPlaceholder('name')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Input de Correo */}
        <div className="input-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={getPlaceholder('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input de Contraseña */}
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={getPlaceholder('password')}
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {!isLoginView && (
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label> 
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder={getPlaceholder('confirmPassword')}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="btn"
        >
          {isLoginView ? 'Iniciar Sesión' : 'Registrarse'}
        </button>
      </form>

      {isLoginView && (
        <>
          <div className="separator">
            <span className="line"></span>
            <p>o</p>
            <span className="line"></span>
          </div>

          <div className="social-login">
            <div className="social-btn facebook">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social-btn google">
              <i className="fab fa-google"></i>
            </div>
          </div>

          <div className="footer-links">
            <a href="#!" onClick={(e) => e.preventDefault()}>¿Olvidaste tu contraseña?</a>
          </div>
        </>
      )}

      {/* Botón/Enlace de Alternancia */}
      <div className="footer-links" style={{ marginTop: '20px' }}>
        {isLoginView ? (
          // VISTA LOGIN: Muestra el botón NARANJA "Crear Cuenta"
          <button
            onClick={toggleView}
            className="btn btn-register" // Usa la clase naranja
          >
            Crear Cuenta
          </button>

        ) : (
          // VISTA REGISTRO: Muestra el enlace simple "Volver a Iniciar Sesión"
          <a href="#!" onClick={(e) => { e.preventDefault(); toggleView(); }} className="back-to-login">
            Volver a Iniciar Sesión
          </a>
        )}
      </div>
      <div className="footer-links">
        <a
          href="#!"
          onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
        >
          Volver al Inicio
        </a>
      </div>
    </section>
  );
};

export default AuthPage;