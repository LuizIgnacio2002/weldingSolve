import * as S from './ClientsStyle';



import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BASICO from '../../assets/companies/BASICO.png';
import DestileriaAndina from '../../assets/companies/DestileriaAndina.png';
import Disforvet from '../../assets/companies/Disforvet.png';

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
            </Slider>
        </S.StyledClientsSection>
    );
}

export default Clients;
