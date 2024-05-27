import * as S from './HeaderStyles';
import leftBlackContainer from '../../assets/leftBlackContainer.png';
import logo from '../../assets/logo/logo.png';


const Header = () => {
    return (
        <S.StyledHeader>
            
            <div className="columnLeft">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Servicios</a></li>
                    <li><a href="/about">Clientes</a></li>
                    <li><a href="/about">Acerca de nosotros</a></li>
                    <li><a href="/about">Contacto</a></li>
                </ul>
            </nav>
        </S.StyledHeader>
    );
}

export default Header;