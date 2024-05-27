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
                    <li><a href="#hero-section">HOME</a></li>
                    <li><a href="#services-section">SERVICIOS</a></li>
                    <li><a href="#clients-section">CLIENTES</a></li>
                    <li><a href="#about-us-section">ACERCA DE NOSOTROS</a></li>
                    <li><a href="#contact-section">CONTÁCTANOS</a></li>
                </ul>
            </nav>
        </S.StyledHeader>
    );
}

export default Header;
