import * as S from './AboutUsStyle';

const AboutUs = () => {
    return (
        <S.StyledAboutUsSection>
            <div className="card">
                <div className="card__title">
                    <h1>ACERCA DE NOSOTROS</h1>
                </div>
                <p style={{
                    textAlign: 'center',
                    maxWidth: '1300px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    En Weldsolve transformamos ideas en soluciones sólidas, somos una empresa peruana especializada en estructuras metálicas, mantenimiento industrial y servicios generales, comprometida con la eficiencia, la seguridad y la excelencia operativa.
                    Con un equipo técnico altamente calificado y procesos adaptables a cada necesidad, ofrecemos soluciones personalizadas que optimizan los recursos de nuestros clientes y aseguran resultados sostenibles.
                    Desde nuestro primer año de operaciones, hemos demostrado que la responsabilidad, el cumplimiento y la mejora continua no son una promesa, sino una práctica diaria.
                    Tenemos como visión ser aliados estratégicos para industrias que exigen calidad, rapidez y confianza.
                </p>
            </div>
        </S.StyledAboutUsSection>
    );
}

export default AboutUs;
