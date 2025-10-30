import React, { useState, useCallback } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const paddingClass = isOpen
    ? 'questions__padding questions__padding--add'
    : 'questions__padding';

  const arrowClass = isOpen
    ? 'questions__arrow'
    : 'questions__arrow questions__arrow--rotate';

  return (
    <article className={paddingClass}>
      <div className="questions__answer">

        <h3 className="questions__title" onClick={toggleOpen}>
          {title}
          <span className={arrowClass}>
            <img src="/images/flechaArriba.png" alt="Toggle" className="questions__img" />
          </span>
        </h3>
        <div
          className="questions__show"
          style={{ maxHeight: isOpen ? '500px' : '0' }}
        >
          <p>{content}</p>
        </div>
      </div>
    </article>
  );
};

export default AccordionItem;