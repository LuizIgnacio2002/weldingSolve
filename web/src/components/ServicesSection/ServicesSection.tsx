import * as S from './ServicesStyles';
import maquinasLLenadoras from '../../assets/images-googled/maquinasLlenadoras.jpg';
import estructuraMetalica from '../../assets/images-googled/estructuraMetalica.jpg';
import pintura from '../../assets/images-googled/pintura.jpg';
import construccion from '../../assets/images-googled/construccion.jpeg';
import soldadura from '../../assets/images-googled/soldadura.jpg';
import escaleras from '../../assets/images-googled/escaleras.jpg';

const ServicesSection = () => {
    return (
        <S.StyledServicesSection>


            <div className="ServicesSection__title">
                <h1>NUESTROS SERVICIOS</h1>
                <div className="underline"></div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img src={maquinasLLenadoras} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Fabricación de máquinas llenadoras de líquidos</h4>
                    <p>
                    Nos especializamos en fabricar estructuras metálicas como barandas, pasamanos, techos, andamios y coberturas. Ofrecemos soluciones duraderas y de alta calidad para proyectos de construcción e infraestructura, garantizando satisfacción y seguridad.
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
                    Proveemos servicios de construcción, como albañilería, enchapado, cimientos, ampliación y remodelación de casas, edificios y locales comerciales. Nuestro equipo de profesionales es altamente calificado y cuenta con extensa experiencia en el sector.
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
                    Ofrecemos servicios de soldadura, incluyendo TIG y MIG. Nuestros soldadores son altamente calificados y tienen vasta experiencia, asegurando calidad y profesionalismo en cada proyecto de soldadura que realizamos.
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
                    Nuestros ingenieros expertos se especializan en diseñar e implementar proyectos de sistemas eléctricos y mecánicos. Nos dedicamos a ofrecer soluciones innovadoras y eficientes, adaptadas a las necesidades de nuestros clientes.
                    </p>
                </div>
            </div>
        </S.StyledServicesSection>
    );
}

export default ServicesSection;