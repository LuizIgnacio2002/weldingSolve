import * as S from './ServicesStyles';
import maquinasLLenadoras from '../../assets/images/maquinasLlenadoras.jpg';
import estructuraMetalica from '../../assets/images/estructuraMetalica.jpg';
import pintura from '../../assets/images/pintura.jpg';
import construccion from '../../assets/images/construccion.jpg';
import soldadura from '../../assets/images/soldadura.jpg';
import escaleras from '../../assets/images/escaleras.jpg';

const ServicesSection = () => {
    return (
        <S.StyledServicesSection>


            <div className="ServicesSection__title">
                <h1>Nuestros Servicios</h1>
                <div className="underline"></div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={maquinasLLenadoras} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Fabricación de máquinas llenadoras de líquidos</h4>
                    <p>
                    Estas máquinas pueden operar automatizadamente, semiautomática o de manera manual.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={estructuraMetalica} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Fabricación de estructuras metálicas</h4>
                    <p>
                    Nos especializamos en la fabricación de diversas estructuras metálicas como barandas, pasamanos, techos metálicos, andamios, coberturas metálicas, entre otros. Brindamos soluciones duraderas y de alta calidad para tus proyectos de construcción e infraestructura..
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={pintura} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Pintura en general</h4>
                    <p>
                    Realizamos trabajos de pintura en general, tanto para interiores como exteriores, en casas, edificios, oficinas, locales comerciales, entre otros. Utilizamos pinturas de alta calidad y durabilidad para garantizar un acabado perfecto y duradero.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={construccion} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Construcción en general</h4>
                    <p>
                        Ofrecemos servicios de construcción en general, incluyendo albañilería, enchapado, construcción de cimientos, ampliación y remodelación de casas, edificios, locales comerciales, entre otros. Contamos con un equipo de profesionales altamente calificados y con amplia experiencia en el sector de la construcción.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={soldadura} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Soldadura en general</h4>
                    <p>
                        Ofrecemos servicios de soldadura en general, incluyendo soldadura TIG, soldadura MIG. Nuestros soldadores son altamente calificados y cuentan con amplia experiencia en el sector de la soldadura.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={escaleras} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Diseño de proyectos eléctricos, mecánicos y manuales</h4>
                    <p>
                    Nuestro equipo de expertos en ingeniería se especializa en el diseño y la implementación de proyectos que abarcan desde sistemas eléctricos hasta soluciones mecánicas. Nos esforzamos por ofrecer soluciones innovadoras y eficientes que se adapten a las necesidades de nuestros clientes.
                    </p>
                </div>
            </div>
        </S.StyledServicesSection>
    );
}

export default ServicesSection;