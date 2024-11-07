import React, { useState } from "react";
import { Link } from "react-router-dom";  

import '../styles/header.css';
import 'boxicons/css/boxicons.min.css'; 

const Header = ({ cartItems, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value); 
    }; 

    return (
        <header className="header"> 
            <div className="oferta">
                Por compras de s/399 a más, envío gratis. <i className='bx bx-comment-dots'></i>
            </div>

            <div className="Logo-menu">
                <div className="logo"><Link to="/">VÁRON</Link></div>
                
                <div className="menu-1">
                    <ul> 
                        <li><Link to="*">Tienda</Link></li>
                        <li><Link to="*">Acerca De</Link></li>
                        <li><Link to="*">Políticas</Link></li>
                        <li><Link to="*">Contacto</Link></li>
                        <li>
                            <i className='bx bx-search-alt-2'></i>
                            <input 
                                type="text" 
                                placeholder="Buscar prenda ..." 
                                value={searchTerm}
                                onChange={handleSearchChange} 
                            />
                        </li>
                    </ul>
                </div>

                <div className="menu-2">
                    <Link to="/cart">
                        <span className="badge">
                            <span className="badge-content">
                                {cartItems.length ? (
                                    <>
                                        <i className='bx bxs-cart-alt'></i>{cartItems.length}
                                    </>
                                ) : (
                                    <>
                                        <i className='bx bxs-cart-alt'></i> 0           
                                    </>
                                )}
                            </span>
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
