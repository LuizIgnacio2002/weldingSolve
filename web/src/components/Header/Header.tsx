import * as S from './HeaderStyles';
import logo from '../../assets/logo/logo.png';

const Header = () => {
    return (
        <S.StyledHeader>
            <div className="columnLeft">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#hero-section">Home</a></li>
                    <li><a href="#services-section">Servicios</a></li>
                    <li><a href="#clients-section">Clientes</a></li>
                    <li><a href="#about-us-section">Acerca de nosotros</a></li>
                    <li><a href="#contact-section">Contacto</a></li>
                </ul>
            </nav>
        </S.StyledHeader>
    );
}

export default Header;
