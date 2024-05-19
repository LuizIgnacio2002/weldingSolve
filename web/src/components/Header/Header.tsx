import * as S from './HeaderStyles';

const Header = () => {
    return (
        <S.StyledHeader>
            <h1>WeldingSolve</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">Servicios</a></li>
                    <li><a href="/about">Clientes</a></li>
                    <li><a href="/about">Contacto</a></li>
                    <li><a href="/about">Acerca de nosotros</a></li>
                </ul>
            </nav>
        </S.StyledHeader>
    );
}

export default Header;