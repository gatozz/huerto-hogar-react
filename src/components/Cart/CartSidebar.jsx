import CartItem from './CartItem.jsx';

const CartSidebar = ({ cartItems, updateQuantity, removeProduct, total, isCartFixed }) => {

    const formatCurrency = (amount) => `$${amount.toLocaleString("es-CL")}`;

    const handleLimpiarCarrito = () => {
        if (cartItems.length > 0) {
            if (window.confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
                cartItems.forEach(item => removeProduct(item.id));
            }
        }
    };

    const containerClass = `carrito-container ${isCartFixed ? 'carrito-fijo' : ''}`;

    return (
        <div className="col-lg-4">
            {isCartFixed && <div style={{ height: '500px' }} />}

            <div className={containerClass} style={isCartFixed ? { top: '20px' } : {}}>
                <h2><i className="fas fa-shopping-basket me-2"></i>Carrito</h2>

                <div id="carrito">
                    {cartItems.length === 0 ? (
                        <div className="vacío">
                            <i className="fas fa-shopping-basket"></i>
                            <p>Tu carrito está vacío</p>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeProduct={removeProduct}
                            />
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <>
                        <p id="total">Total: {formatCurrency(total)}</p>
                        <button id="btnLimpiar" onClick={handleLimpiarCarrito}>
                            <i className="fas fa-trash me-2"></i>Vaciar Carrito
                        </button>
                        <button className="btn-agregar mt-3 w-100">
                            Proceder al Pago
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;