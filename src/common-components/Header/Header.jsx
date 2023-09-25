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
                        <li><a href="#">PESQUISAR</a></li>
                        <li><a href="#">CADASTRAR PACIENTE</a></li>
                    </ul>
                </div>
                <div>
                    <button className="header-button">+ PRONTUÁRIO</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
