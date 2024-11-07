import React from "react"; 
import '../styles/Foorter.css';
 
const Footer=({cartItems}) => {
    return (
        <div className="container">  
        <div className="content"> 
        <div className="footer">
             <div className="footer-section">
                <h3>Redes sociales</h3>
                <ul>
                    <li><i className='bx bxl-facebook-square' ></i> Facebook</li>
                    <li><i className='bx bxl-instagram' ></i> Instagram</li>
                    <li><i className='bx bxl-youtube' ></i> Youtube</li> 
                </ul>
            </div>
            <div className="footer-section">
                <h3>Tienda</h3>
                <ul>
                    <li>Ropa de Moda Urbana</li>
                    <li>Ropa masculina</li>
                    <li>100% buena calidad</li> 
                </ul>
            </div>

            <div className="footer-section">
                <h3>Política de la tienda</h3>
                <ul>
                    <li>Envío y devoluciones</li>
                    <li>Métodos de pago Tarjeta debito / Tarjeta C</li>
                    <li>Pago contra Entrega</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3>Horarios de atencion</h3>
                <ul>
                    <li>Horario laboral & atencion</li>
                    <li>Lun - Vie : 7:00 - 22:00</li>
                    <li>Sábado : 7:00 - 20:00</li> 
                </ul>
            </div>

            <div className="footer-section">
                <h3>Contacto</h3>
                <ul>
                   
                    <li>info@misitio.com</li>
                    <li>Tel: / +52-945-380-397</li>
                    <li>Tiempo respuesta 24h</li> 
                </ul>
            </div>
            
        </div>
        </div>
    </div>
    );
};

export default Footer;