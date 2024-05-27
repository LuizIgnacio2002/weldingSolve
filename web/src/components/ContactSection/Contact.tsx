import * as S from './ContactStyles';

import fb from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';
import whatsapp from '../../assets/icons/whatsapp.png';

const Contact = () => {
    return (
        <S.StyledContactSection>
            <div className="card">
                <div className="card__title">
                    <h1>Contáctanos</h1>
                    <div className="underline"></div>
                </div>
                <div className='card__icons_section'>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <img src={fb} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                        <img src={whatsapp} alt="whatsapp" />
                    </a>
                </div>
                <div className="card__reference">
                    <p>Teléfono: +51 936 689 719</p>
                    <p>Correo: weldsolveperu@gmail.com</p>
                    <p>Dirección: Mz. E Lt 13 Los Pinos del Naranjal - S.M.P</p>
                </div>
            </div>
        </S.StyledContactSection>
    );
}

export default Contact;