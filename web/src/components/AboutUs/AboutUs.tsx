import * as S from './AboutUsStyle';

const AboutUs = () => {
    return (
    <S.StyledAboutUsSection>
        <div className="card">
            <div className="card__title">
                <h1>Acerca de nosotros</h1>
            </div>
            <p>
                La soldadura es un proceso de fabricación en el que se utilizan altas temperaturas para fundir y unir dos o más piezas de metal. Existen diferentes tipos de soldadura, como la soldadura por arco, la soldadura por gas y la soldadura por resistencia.
            </p>
        </div>
    </S.StyledAboutUsSection>
    );
}

export default AboutUs;