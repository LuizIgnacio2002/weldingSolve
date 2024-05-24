import styled from 'styled-components';

export const StyledClientsSection = styled.section` 


.ClientsSection__title {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

    h1 {
        font-size: 2rem;
        color: #2A2A2A;
        font-family: 'Open Sans', sans-serif;
    }

    .underline {
        width: 5rem;
        height: 0.25rem;
        background-color: #ffbb40;
        margin: 0 auto;
        margin-top: 1rem;
    }
}


.carousel .slide img {
    display: inline-block;
    margin: 0 auto;
    max-height: 100px; /* Adjust this value to fit your design */
}

.carousel .slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    height: 100px; /* Adjust this value to fit your design */
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
}

.carousel .control-dots {
    display: none;
}

.slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 0 15px; /* Ajusta este valor para cambiar el espacio entre los logos */
}

.slick-slide img {
    max-height: 100px; /* Ajusta este valor según sea necesario */
    max-width: 100%;
    display: block;
}
 

`;