import * as S from './HeroSectionStyles';

const HeroSection = () => {
    return (
        <S.StyledHeroSection>
            <div className="columnLeft">
                <div className="columnLeftTitle">
                    <h1>WELDSOLVE</h1>
                </div>
                <p>
                Empresa especializada en la fabricación personalizada de máquinas industriales y equipos de acero. Además, de servicios de pintura, soldadura, construcción y acabado en general de inmuebles.
                </p>
            </div>
            <div className="columnRight">
                <h1>Nuestros Servicios</h1>
                <p>
                Ofrecemos una amplia gama de servicios, incluyendo la fabricación de estructuras metálicas, soldadura, pintura, construcción (albañilería, enchapado, construcción de cimientos, ampliación y remodelación), diseño de proyectos eléctricos, mecánicos y manuales; además de la fabricación y mantenimiento de maquinarias de consumo, construcción de casas y acabados de alta calidad.
                </p>
            </div>
        </S.StyledHeroSection>
    );
}

export default HeroSection;