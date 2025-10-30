import React from 'react';

import Header from '../components/Layout/Header'
import ProductSlider from '../components/Product/ProductSlider'
import AccordionItem from '../components/Utils/AccordionItem';
import { ACCORDION_DATA } from '../data/accordionData';
import StoresSection from '../components/Content/StoresSection';
import Footer from '../components/Layout/Footer.jsx'

import '../css/normalize.css';
import '../css/estilos.css'; 

const HomePage = ({ navigateTo }) => {
  return (

    <div className="main-content-wrapper">
      <Header navigateTo={navigateTo} />
      <main>
        <section class="container about">
          <h2 class="subtitle">Sobre nuestros productos</h2>
          <p class="about__paragraph">Sabias que...</p>

          <div class="about__main">
            <article class="about__icons">
              <img src="./images/manzana.png" alt="" class="about__icon"></img>
              <h3 class="about__title"> Frutas frescas</h3>
              <p class="about__paragraph">Nuestra selección de frutas frescas ofrece una experiencia directa del campo a
                tu hogar. Estas frutas se cultivan y cosechan en el punto óptimo de madurez para asegurar
                su sabor y frescura. Disfruta de una variedad de frutas de temporada que aportan vitaminas
                y nutrientes esenciales a tu dieta diaria. Perfectas para consumir solas, en ensaladas o como
                ingrediente principal en postres y smoothies.</p>
            </article>

            <article class="about__icons">
              <img src="./images/zanahoria.webp" alt="" class="about__icon"></img>
              <h3 class="about__title"> Verduras organicas</h3>
              <p class="about__paragraph">Descubre nuestra gama de verduras orgánicas, cultivadas sin el uso de
                pesticidas ni químicos, garantizando un sabor auténtico y natural. Cada verdura es
                seleccionada por su calidad y valor nutricional, ofreciendo una excelente fuente de
                vitaminas, minerales y fibra. Ideales para ensaladas, guisos y platos saludables, nuestras
                verduras orgánicas promueven una alimentación consciente y sostenible.</p>
            </article>

            <article class="about__icons">
              <img src="./images/azada.png" alt="" class="about__icon"></img>
              <h3 class="about__title">Productos organicos</h3>
              <p class="about__paragraph">Nuestros productos orgánicos están elaborados con ingredientes naturales y
                procesados de manera responsable para mantener sus beneficios saludables. Desde aceites
                y miel hasta granos y semillas, ofrecemos una selección que apoya un estilo de vida
                saludable y respetuoso con el medio ambiente. Estos productos son perfectos para quienes
                buscan opciones alimenticias que aporten bienestar sin comprometer el sabor ni la calidad.</p>
            </article>

            <article class="about__icons">
              <img src="./images/leche.webp" alt="" class="about__icon"></img>
              <h3 class="about__title">Productos lacteos</h3>
              <p class="about__paragraph"> Los productos lácteos de HuertoHogar provienen de granjas locales que se
                dedican a la producción responsable y de calidad. Ofrecemos una gama de leches, yogures
                y otros derivados que conservan su frescura y sabor auténtico. Ricos en calcio y nutrientes
                esenciales, nuestros lácteos son perfectos para complementar una dieta equilibrada,
                proporcionando el mejor sabor y nutrición para toda la familia</p>
            </article>
          </div>
        </section>
        <section class="knowledge">
          <div class="knowledge__container container">
            <div class="knowledege__texts">
              <h2 class="subtitle">BIENVENIDO A HUERTO HOGAR</h2>
              <p class="knowledge__paragraph">En nuestra tienda encontrarás lo mejor de la naturaleza directo a tu mesa. Te invitamos a disfrutar de productos frescos, orgánicos y llenos de sabor: una amplia variedad de frutas, verduras y miel natural de la más alta calidad.
                Porque creemos en una vida más sana y consciente, cultivamos con amor y respeto por la tierra. ¡Ven y descubre el placer de alimentarte de manera saludable con Huerto Hogar!</p>
              <button onClick={() => navigateTo('cart')} className="cta">IR A COMPRAR</button>
            </div>
            <figure class="knowledge__picture">
              <img src="./images/agricultor.gif" alt="" class="knowledge__img"></img>
            </figure>
          </div>
        </section>
        <ProductSlider />
        <section id="quienes" className="questions container">
          <h2 className="subtitle">Quienes somos ?</h2>
          <p className="questions__paragraph">Conocenos mejor!</p>

          <section className="questions__container">
            {/* Iteramos sobre los datos y creamos un AccordionItem por cada elemento. */}
            {ACCORDION_DATA.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </section>

          <section className="questions__offer">
            <h2 className="subtitle">Cambiemos juntos</h2>
            <p className="questions__copy">En Huerto Hogar creemos que cada elección en la mesa es una semilla que siembra salud y bienestar. Al elegir productos frescos y orgánicos, no solo te cuidas a ti y a tu familia, también apoyas una forma de vida más consciente y respetuosa con la naturaleza. ✨ Da el paso hacia una alimentación sana, natural y llena de vida. Tu cuerpo y el planeta te lo agradecerán.</p>
            <button onClick={() => navigateTo('login')} className="cta">CAMBIAR</button>
          </section>
        </section>
        <StoresSection />
      </main>

      <Footer navigateTo={navigateTo} />
    </div>

  );
};

export default HomePage;