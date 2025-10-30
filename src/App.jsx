// src/App.jsx - Lógica Central de Ruteo, Auth y Carrito

import React, { useState, useEffect, useMemo } from 'react';

// -----------------------------------------------------------------
// 💡 TUS IMPORTACIONES DE PÁGINAS REALES
// -----------------------------------------------------------------
import HomePage from './pages/HomePage.jsx'; 
import AuthPage from './pages/AuthPage.jsx';
import CartPage from './pages/CartPage.jsx'; // La página de carrito migrada

// =================================================================
// CONFIGURACIÓN GLOBAL
// =================================================================
const PAGE_STORAGE_KEY = 'huertohogar_last_page'; 

// =================================================================
// COMPONENTE PRINCIPAL (App.jsx)
// =================================================================

function App() {
    // ------------------------------------
    // 1. Lógica de Persistencia y Ruteo
    // ------------------------------------
    const [currentPage, setCurrentPage] = useState(() => {
        try {
            const storedPage = localStorage.getItem(PAGE_STORAGE_KEY);
            return storedPage || 'login'; 
        } catch (error) {
            return 'login'; 
        }
    });
    
    useEffect(() => {
        try {
            localStorage.setItem(PAGE_STORAGE_KEY, currentPage);
        } catch (error) {
        }
    }, [currentPage]); 

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    // ------------------------------------
    // 2. Lógica de Autenticación
    // ------------------------------------
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleAuthSuccess = () => {
        setIsLoggedIn(true);
        navigateTo('home');
    };

    // ------------------------------------
    // 💡 HOOK PARA CSS SCOPING (Clase en el body)
    // ------------------------------------
    useEffect(() => {
        const bodyClass = `page--${currentPage}`;
        
        document.body.className = ''; 
        
        document.body.classList.add(bodyClass);
        
    }, [currentPage]); 

    // ------------------------------------
    // 3. Lógica del Carrito (Centralizada)
    // ------------------------------------
    const [cartItems, setCartItems] = useState([]); 

    // Calcular el total del carrito (usando useMemo para optimización)
    const total = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    }, [cartItems]);

    const addToCart = (productToAdd) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === productToAdd.id);

            if (existingItem) {
                if (existingItem.cantidad >= 5) {
                    // Usar console.warn en lugar de alert()
                    console.warn("⚠️ No puedes agregar más de 5 unidades de este producto.");
                    return prevItems;
                }
                return prevItems.map(item =>
                    item.id === productToAdd.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                // Agregar producto nuevo con cantidad: 1
                return [...prevItems, { ...productToAdd, cantidad: 1 }];
            }
        });
    };
    
    // Función: Actualizar la cantidad de un producto (usado por CartItem)
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity <= 0) {
            removeProduct(id);
            return;
        }

        // Regla de tu JS original: Máximo 5 unidades
        if (newQuantity > 5) {
             // Usar console.warn en lugar de alert()
             console.warn("⚠️ Máximo 5 unidades por producto.");
             return;
        }

        setCartItems(prevItems => prevItems.map(item =>
            item.id === id ? { ...item, cantidad: newQuantity } : item
        ));
    };

    // Función: Eliminar Producto (usado por CartItem y Vaciar Carrito)
    const removeProduct = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // ------------------------------------
    // 4. Renderizado Condicional de Páginas
    // ------------------------------------
    const renderPage = () => {
        const cartProps = { cartItems, addToCart, updateQuantity, removeProduct, total };
    
        const navProps = { navigateTo, isLoggedIn };

        switch (currentPage) {
            case 'home':
                return <HomePage {...navProps} addToCart={addToCart} />; 
            case 'login':
                return <AuthPage navigateTo={navigateTo} onAuthSuccess={handleAuthSuccess} />;
            case 'cart':
                return <CartPage {...navProps} {...cartProps} />;
            default:
                return <HomePage {...navProps} addToCart={addToCart} />;
        }
    };

    return (
        <>
            {renderPage()}
        </>
    );
}

export default App;
