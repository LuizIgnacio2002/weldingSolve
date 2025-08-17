import * as S from './ServicesStyles';

// Limpieza
import limpieza1 from '../../assets/images/Limpieza/limpieza1.png'
import limpieza2 from '../../assets/images/Limpieza/limpieza2.png'

// EstructurasMetalicas
import anaquel from '../../assets/images/estructurasMetalicas/anaqueles.jpg';
import andamio from '../../assets/images/estructurasMetalicas/andamio.jpg';
import barandaDeAcero from '../../assets/images/estructurasMetalicas/barandaDeAcero.jpg';
import estructuraParaTanques from '../../assets/images/estructurasMetalicas/estructuraParaTanques.jpg';

// maquinasLLenadoras
import maquinaLLenadora1 from '../../assets/images/maquinasLLenadoras/maquinaLLenadora1.jpg';
import maquinaLLenadora2 from '../../assets/images/maquinasLLenadoras/maquinaLLenadora2.jpg';
import maquinaLLenadora3 from '../../assets/images/maquinasLLenadoras/maquinaLLenadora3.jpg';
import maquinaLLenadora4 from '../../assets/images/maquinasLLenadoras/maquinaLLenadora4.jpg';

// pinturaEnGeneral
import pinturaEnGeneral1 from '../../assets/images/pinturaEnGeneral/pinturaEnGeneral1.jpg';
import pinturaEnGeneral2 from '../../assets/images/pinturaEnGeneral/pinturaEnGeneral2.jpg';
import pinturaEnGeneral3 from '../../assets/images/pinturaEnGeneral/pinturaEnGeneral3.jpg';
import pinturaEnGeneral4 from '../../assets/images/pinturaEnGeneral/pinturaEnGeneral4.jpeg';

// ConstruccionEnGeneral
import construccion1 from '../../assets/images/ConstruccionEnGeneral/construccion1.jpg';
import construccion2 from '../../assets/images/ConstruccionEnGeneral/construccion2.jpg';
import construccion3 from '../../assets/images/ConstruccionEnGeneral/construccion3.jpg';
import construccion4 from '../../assets/images/ConstruccionEnGeneral/construccion4.jpg';

// SoldaduraEnGeneral
import soldadura1 from '../../assets/images/SoldaduraEnGeneral/soldadura1.jpg';
import soldadura2 from '../../assets/images/SoldaduraEnGeneral/soldadura2.jpg';
import soldadura3 from '../../assets/images/SoldaduraEnGeneral/soldadura3.jpg';
import soldadura4 from '../../assets/images/SoldaduraEnGeneral/soldadura4.jpg';

// disenoEnGeneral
import diseno1 from '../../assets/images/disenoEnGeneral/diseno1.jpg';
import diseno2 from '../../assets/images/disenoEnGeneral/diseno2.jpg';
import diseno3 from '../../assets/images/disenoEnGeneral/diseno3.jpg';
import diseno4 from '../../assets/images/disenoEnGeneral/diseno4.png';


import { useEffect, useState } from 'react';

const ServicesSection = () => {

    const limpiezas = [limpieza1, limpieza2];
    const imagesEstructuraMetalica = [anaquel, andamio, barandaDeAcero, estructuraParaTanques];
    const maquinasLLenadoras = [maquinaLLenadora1, maquinaLLenadora2, maquinaLLenadora3, maquinaLLenadora4];
    const pinturaEnGeneral = [pinturaEnGeneral1, pinturaEnGeneral2, pinturaEnGeneral3, pinturaEnGeneral4];
    const construccionEnGeneral = [construccion1, construccion2, construccion3, construccion4];
    const soldaduraEnGeneral = [soldadura1, soldadura2, soldadura3, soldadura4];
    const disenoEnGeneral = [diseno1, diseno2, diseno3, diseno4];


    const [currentLimpieza, setCurrentImagen] = useState(limpiezas[0]);
    const [currentImage, setCurrentImage] = useState(imagesEstructuraMetalica[0]);
    const [currentMaquinaLLenadora, setCurrentMaquinaLLenadora] = useState(maquinasLLenadoras[0]);
    const [currentPinturaEnGeneral, setCurrentPinturaEnGeneral] = useState(pinturaEnGeneral[0]);
    const [currentConstruccionEnGeneral, setCurrentConstruccionEnGeneral] = useState(construccionEnGeneral[0]);
    const [currentSoldaduraEnGeneral, setCurrentSoldaduraEnGeneral] = useState(soldaduraEnGeneral[0]);
    const [currentDisenoEnGeneral, setCurrentDisenoEnGeneral] = useState(disenoEnGeneral[0]);


    const [opacity, setOpacity] = useState(1); // Initial opacity

    useEffect(() => { // Change image every 4 seconds
        const timer = setInterval(() => {
            setOpacity(0); // Fade out image
            setTimeout(() => {
                setCurrentImagen(limpiezas[(limpiezas.indexOf(currentLimpieza) + 1) % limpiezas.length]); // Next image
                setCurrentImage(imagesEstructuraMetalica[(imagesEstructuraMetalica.indexOf(currentImage) + 1) % imagesEstructuraMetalica.length]); // Next image
                setCurrentMaquinaLLenadora(maquinasLLenadoras[(maquinasLLenadoras.indexOf(currentMaquinaLLenadora) + 1) % maquinasLLenadoras.length]); // Next image
                setCurrentPinturaEnGeneral(pinturaEnGeneral[(pinturaEnGeneral.indexOf(currentPinturaEnGeneral) + 1) % pinturaEnGeneral.length]); // Next image
                setCurrentConstruccionEnGeneral(construccionEnGeneral[(construccionEnGeneral.indexOf(currentConstruccionEnGeneral) + 1) % construccionEnGeneral.length]); // Next image
                setCurrentSoldaduraEnGeneral(soldaduraEnGeneral[(soldaduraEnGeneral.indexOf(currentSoldaduraEnGeneral) + 1) % soldaduraEnGeneral.length]); // Next image
                setCurrentDisenoEnGeneral(disenoEnGeneral[(disenoEnGeneral.indexOf(currentDisenoEnGeneral) + 1) % disenoEnGeneral.length]); // Next image


                setOpacity(1); // Reset opacity this makes the image fade in again
            }, 500); // Wait for the image to fade out
        } , 4000); // Change image every 4 seconds
        return () => clearInterval(timer); // this makes sure the timer is cleared when the component is unmounted
    }, [currentImage]);

    return (
        <S.StyledServicesSection>


            <div className="ServicesSection__title">
                <h1>NUESTROS SERVICIOS</h1>
                <div className="underline"></div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img style={{opacity: opacity, transition: 'opacity 0.5s ease-in-out'}} src={currentLimpieza} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Servicios de limpieza</h4>
                    <p>
                    Ofrecemos servicios de limpieza para empresas, industrias y particulares. Nuestro equipo está capacitado para realizar limpieza profunda de fábricas, locales comerciales y más. Utilizamos productos de alta calidad y técnicas efectivas para garantizar un ambiente limpio y saludable.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                <img style={{opacity: opacity, transition: 'opacity 0.5s ease-in-out'}} src={currentImage} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Fabricación de estructuras metálicas</h4>
                    <p>
                    Ofrecemos fabricación de estructuras metálicas como barandas, pasamanos, techos, andamios y coberturas, garantizando calidad, seguridad y cumplimiento de las especificaciones técnicas requeridas por su proyecto.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img style={{opacity: opacity, transition: 'opacity 0.5s ease-in-out'}} src={currentPinturaEnGeneral} alt="Card Image" />
                </div>
                <div className="card-description">
                    <h4>Servicios de pintura</h4>
                    <p>
                    Realizamos trabajos de pintura en general, tanto para interiores como exteriores, en casas, edificios, oficinas, locales comerciales, entre otros. Utilizamos pinturas de alta calidad y durabilidad para garantizar un acabado perfecto y duradero.
                    </p>
                </div>
            </div>

            <div className="card">
                <div className="card-image">
                    <img style={{opacity: opacity, transition: 'opacity 0.5s ease-in-out'}} src={currentConstruccionEnGeneral} alt="Card Image" />
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
                    <img style={{opacity: opacity, transition: 'opacity 0.5s ease-in-out'}} src={currentSoldaduraEnGeneral} alt="Card Image" />
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
                    <img style={{opacity: opacity, transition: 'opacity 0.5s ease-in-out'}} src={currentDisenoEnGeneral} alt="Card Image" />
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