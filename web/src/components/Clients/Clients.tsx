import * as S from './ClientsStyle';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BASICO from '../../assets/companiesColored/BASICO.png';
import DestileriaAndina from '../../assets/companiesColored/DestileriaAndina.png';
import Disforvet from '../../assets/companiesColored/Disforvet.png';
import BINSWANGER from '../../assets/companiesColored/BINSWANGER.png';
import Alata from '../../assets/companiesColored/Alata.png';

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
                <h1>Clientes</h1>
                <div className="underline"></div>
            </div>
            <Slider {...settings}>
                <div>
                    <img src={BASICO} alt="BASICO" />
                </div>
                <div>
                    <img src={DestileriaAndina} alt="DestileriaAndina" />
                </div>
                <div>
                    <img src={Disforvet} alt="Disforvet" />
                </div>
                <div>
                    <img src={BINSWANGER} alt="BINSWANGER" />
                </div>
                <div>
                    <img src={Alata} alt="Alata" />
                </div>

                
            </Slider>

            <div className='space_botton'></div>
        </S.StyledClientsSection>
    );
}

export default Clients;
