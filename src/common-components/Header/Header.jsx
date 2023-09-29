import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src="/images/Component 1.png" alt="Logo" />
                </div>
                <div className="header-links">
                    <ul>
                        <li><Link to='/'>PESQUISAR</Link></li>
                        <li><Link to='/cadastrar-paciente'>CADASTRAR PACIENTE</Link></li>
                    </ul>
                </div>
                <div>
                    <button className="header-button"><Link to='/cadastrar-prontuario'>+ PRONTUÁRIO</Link></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
