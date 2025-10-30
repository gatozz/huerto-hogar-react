import React, { useState, useCallback } from 'react';
import { PRODUCT_DATA } from '../../data/productData';

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = PRODUCT_DATA.length;

  const changePosition = useCallback((add) => {
    setCurrentIndex(prevIndex => {
      let newValue = prevIndex + add;

      if (newValue > totalSlides) {
        newValue = 1;
      } else if (newValue === 0) {
        newValue = totalSlides;
      }
      return newValue;
    });
  }, [totalSlides]);

  return (

    <section id="testimonios" className="product-highlight section-padding">
      <div className="product-highlight__container container">

        <img
          src="/images/flechaIzquierdaVerde.png"
          alt="anterior"
          className="product-highlight__arrow"
          onClick={() => changePosition(-1)}
        />

        {PRODUCT_DATA.map((product) => {
          const slideId = product.id;
          const isShowClass = slideId === currentIndex ? 'product-highlight__item--show' : '';

          return (
            <section
              key={product.id}
              className={`product-highlight__item ${isShowClass}`}
              data-id={slideId}
            >
              <div className="product-highlight__texts">
                <h2 className="subtitle">
                  {product.name}
                  <span className="product-highlight__price">{product.price}</span>
                </h2>
                <p className="testimony__review">{product.description}</p>
              </div>

              <figure className="product-highlight__picture">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-highlight__img"
                />
              </figure>
            </section>
          );
        })}

        <img
          src="/images/flechaDrechaVerde.png"
          alt="siguiente"
          className="product-highlight__arrow"
          onClick={() => changePosition(1)}
        />

      </div>
    </section>
  );
};

export default ProductSlider;