import * as S from './HeroSectionStyles';

const HeroSection = () => {
    return (
        <S.StyledHeroSection>
            <div className="columnLeft">
                <div className="columnLeftTitle">
                    <h1>Soldadura</h1>
                </div>
                <p>
                    La soldadura es un proceso de fabricación en el que se utilizan altas temperaturas para fundir y unir dos o más piezas de metal. Existen diferentes tipos de soldadura, como la soldadura por arco, la soldadura por gas y la soldadura por resistencia.
                </p>
            </div>
            <div className="columnRight">
                <h2>Nuestros Servicios</h2>
                <p>
                Ofrecemos una amplia gama de servicios, incluyendo la fabricación de estructuras metálicas, soldadura, pintura, construcción (albañilería, enchapado, construcción de cimientos, ampliación y remodelación), diseño de proyectos eléctricos, mecánicos y manuales; además de la fabricación y mantenimiento de maquinarias de consumo, construcción de casas y acabados de alta calidad.
                </p>
            </div>
        </S.StyledHeroSection>
    );
}

export default HeroSection;