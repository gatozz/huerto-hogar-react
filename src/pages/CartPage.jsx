// src/pages/CartPage.jsx

import React, { useState, useEffect, useRef } from 'react';
import ProductList from '../components/Cart/ProductList.jsx'; 
import CartSidebar from '../components/Cart/CartSidebar.jsx'; 

import '../css/estilo_carrito.css';

const CartPage = ({ navigateTo, addToCart, cartItems, updateQuantity, removeProduct, total }) => { 
    // Estado para controlar si el carrito debe ser fijo
    const [isCartFixed, setIsCartFixed] = useState(false);
    
    // Referencia al encabezado para calcular cuándo debe comenzar el efecto fijo
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                // Obtenemos la parte inferior del encabezado
                const headerBottom = headerRef.current.getBoundingClientRect().bottom;
                
                // Si la parte inferior del header ya ha pasado la parte superior de la ventana (0), 
                // entonces fijamos el carrito. Sumamos 20 para el padding superior.
                if (headerBottom < 20) {
                    setIsCartFixed(true);
                } else {
                    setIsCartFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Limpiamos el event listener al desmontar el componente
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Se ejecuta solo una vez al montar

    return (
        // 💡 USAMOS UN FRAGMENTO (<>...</>) para retornar múltiples elementos
        <> 
            {/* 1. HEADER (FUERA DEL .container, ocupando ancho completo) */}
            <div className="header text-center" ref={headerRef}> 
                <a href="#" onClick={() => navigateTo('home')} className="text-white text-decoration-none">
                    <h1><i className="fas fa-leaf me-2"></i>Huerto Hogar</h1>
                </a>
                <p>Productos frescos y orgánicos directamente a tu hogar</p>
            </div>

            {/* 2. CONTENIDO PRINCIPAL (DENTRO DEL .container, centrado) */}
            <div className="container">
                {/* ESTRUCTURA PRINCIPAL DE DOBLE COLUMNA */}
                <div className="row">
                    
                    <ProductList addToCart={addToCart} navigateTo={navigateTo} />

                
                        <CartSidebar 
                            cartItems={cartItems} 
                            updateQuantity={updateQuantity}
                            removeProduct={removeProduct}
                            total={total}
                            isCartFixed={isCartFixed} 
                        />
        
                    
                </div>
            </div>
        </>
    );
};

export default CartPage;