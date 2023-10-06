import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src="/images/Component 1.png" alt="Logo" />
                </div>
                <div className="menu-container">
                    <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className={`header-links ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to='/'>PESQUISAR</Link></li>
                            <li><Link to='/cadastrar-paciente'>CADASTRAR PACIENTE</Link></li>
                        </ul>
                        <button className="header-button"><Link to='/cadastrar-prontuario'>+ PRONTUÁRIO</Link></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
