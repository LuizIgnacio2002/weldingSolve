import * as S from './ClientsStyle';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BASICO from '../../assets/companiesColored/BASICO.png';
import DestileriaAndina from '../../assets/companiesColored/DestileriaAndina.png';
import Disforvet from '../../assets/companiesColored/Disforvet.png';
import BINSWANGER from '../../assets/companiesColored/BINSWANGER.png';
import Alata from '../../assets/companiesColored/Alata.png';

import startplus_sac from '../../assets/companiesColored/start_plus_logo.png'
import tech from '../../assets/companiesColored/tech_logo.jpg'
import rumi from '../../assets/companiesColored/rumi_import_logo.jpg'
import gate_gourmet from '../../assets/companiesColored/gate_gourment_logo.png'
import pil from '../../assets/companiesColored/pil_logo.webp'
import minera_luisa from '../../assets/companiesColored/minera_luisa_logo.png'
import comacsa from '../../assets/companiesColored/comacsa_logo.png'
import holsin from '../../assets/companiesColored/holcim_logo.jpg'



const Clients = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1700,
        pauseOnHover: true,
        arrows: false
    };

    return (
        <S.StyledClientsSection>
            <div className="ClientsSection__title">
                <h1>CLIENTES</h1>
                <div className="underline"></div>
            </div>
            <Slider {...settings}>
                <div>
                    <img src={startplus_sac} alt="startplus_sac" />
                </div>
                <div>
                    <img src={tech} alt="tech" />
                </div>
                <div>
                    <img src={rumi} alt="rumi" />
                </div>
                <div>
                    <img src={gate_gourmet} alt="gate_gourmet" />
                </div>
                <div>
                    <img src={pil} alt="pil" />
                </div>
                                <div>
                    <img src={minera_luisa} alt="minera_luisa" />
                </div>
                                <div>
                    <img src={comacsa} alt="comacsa" />
                </div>
                <div>
                    <img src={holsin} alt="holsin" />
                </div>
                



                
            </Slider>

            <div className='space_botton'></div>
        </S.StyledClientsSection>
    );
}

export default Clients;
