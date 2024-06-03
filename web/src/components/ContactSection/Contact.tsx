import * as S from './ContactStyles';

import fb from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import whatsapp from '../../assets/icons/whatsapp.png';

const Contact = () => {
    return (
        <S.StyledContactSection>
            <div className="card">
                <div className="card__title">
                    <h1>CONTÁCTANOS</h1>
                    <div className="underline"></div>
                </div>
                <div className='card__icons_section'>
                    <a href="https://www.facebook.com/people/Weldsolve-Per%C3%BA-SAC/61559417790210/?mibextid=LQQJ4d&rdid=djohvWl2lgJ08owm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fjdb4AtkMVRGudtnh%2F%3Fmibextid%3DLQQJ4d" target="_blank" rel="noreferrer">
                        <img src={fb} alt="facebook" />
                    </a>
                    <a href="https://www.instagram.com/weldsolve_peru/?utm_source=qr" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="https://wa.me/51936689719" target="_blank" rel="noreferrer">
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