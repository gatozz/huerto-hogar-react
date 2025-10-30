const StoresSection = () => {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d888.7857817510906!2d-72.94045275407368!3d-41.4716044732042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183b652a64c3ef%3A0x76a99b10f83e4d6f!2sDiamond%20Club!5e0!3m2!1ses-419!2scl!4v1757886433905!5m2!1ses-419!2scl";

    return (
        // Usamos el ID y las clases de tu HTML original
        <section id="nosotros" className="about">
            <div className="container">
                
                <h2 className="subtitle">Nuestras nuevas tiendas</h2>

                {/* Div del mapa */}

                <p className="subtitle">Puerto Montt</p>
                
                {/* 🚨 Iframe para el mapa 🚨 */}
                <iframe 
                    src={mapSrc} 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} // Estilos inline en JSX
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de tienda en Puerto Montt" // Recomendado por accesibilidad
                ></iframe>
                
            </div>
        </section>
    );
};

export default StoresSection;