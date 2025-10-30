import React, { useState, useMemo } from 'react';
import { productos, categorias } from '../../data/products';

const ProductList = ({ addToCart, navigateTo }) => {
    const [filtro, setFiltro] = useState('Todos');

    const productosFiltrados = useMemo(() => {
        if (filtro === 'Todos') {
            return productos;
        }
        return productos.filter(p => p.categoria === filtro);
    }, [filtro]);

    const handleAddToCart = (product, event) => {
        addToCart(product);
        const btn = event.currentTarget;
        const originalIcon = '<i class="fas fa-cart-plus me-1"></i>';

        btn.innerHTML = '<i class="fas fa-check me-1"></i> Agregado';
        btn.style.backgroundColor = '#4CAF50';

        setTimeout(() => {
            btn.innerHTML = originalIcon + ' Agregar';
            btn.style.backgroundColor = '';
        }, 1000);
    };

    return (
        <div className="col-lg-8">

            <div className="filtro-container d-flex align-items-center">

                <button
                    className="btn btn-link me-3 icon-back-to-home"
                    onClick={() => navigateTo('home')}
                    title="Volver a la Tienda Principal"
                    style={{ color: 'var(--primary-color)' }}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>

                <label htmlFor="filtroCategoria" className="fw-bold mb-0 me-2">Filtrar por categoría:</label> {/* Añadí mb-0 y me-2 */}
                <select
                    id="filtroCategoria"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    {categorias.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <h2 className="mb-4">Nuestros Productos</h2>

            <div id="listaProductos">
                {productosFiltrados.length === 0 ? (
                    <div className="vacío">
                        <i className="fas fa-search"></i>
                        <p>No hay productos en esta categoría</p>
                    </div>
                ) : (
                    productosFiltrados.map(p => (
                        <div key={p.id} className="producto">
                            <span className="categoria">{p.categoria}</span>
                            <h3>{p.nombre}</h3>
                            <p className="precio">$ {p.precio.toLocaleString("es-CL")}</p>
                            <button
                                className="btn-agregar"
                                onClick={(e) => handleAddToCart(p, e)}
                            >
                                <i className="fas fa-cart-plus me-1"></i> Agregar
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
