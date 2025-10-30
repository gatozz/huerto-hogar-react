import React from 'react';

const CartItem = ({ item, updateQuantity, removeProduct }) => {
  const subtotal = item.precio * item.cantidad;
  const formatCurrency = (amount) => `$${amount.toLocaleString("es-CL")}`;

  return (
    <div className="item-carrito">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>{item.nombre}</strong>
          <p className="mb-0">$ {item.precio.toLocaleString("es-CL")} c/u</p>
        </div>
        <div className="d-flex align-items-center">
          <button
            className="btn-cantidad"
            onClick={() => updateQuantity(item.id, item.cantidad - 1)}
          >
            −
          </button>
          <span className="mx-2 fw-bold">{item.cantidad}</span>
          {/* Botón Aumentar */}
          <button
            className="btn-cantidad"
            onClick={() => updateQuantity(item.id, item.cantidad + 1)}
          >
            +
          </button>
        </div>
      </div>
      <p className="text-end mb-0">Subtotal: {formatCurrency(subtotal)}</p>
    </div>
  );
};

export default CartItem;