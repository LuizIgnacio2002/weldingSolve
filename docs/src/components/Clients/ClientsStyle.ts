import styled from 'styled-components';

export const StyledClientsSection = styled.section` 
    .ClientsSection__title {
        width: 100%;
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1rem;

        h1 {
            
            color: #2A2A2A;
            
            font-size: 30px;
            font-weight: 300;
            font-family: 'Inter', sans-serif;
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
        padding: 0 15px; /* Adjust this value to change the space between logos */
    }

    .slick-slide img {
        max-height: 100px; /* Adjust this value as needed */
        max-width: 100%;
        display: block;
    }

    .space_botton {
        margin-bottom: 3rem;
    }

    /* Media query for mobile devices */
    @media (max-width: 768px) {
        .ClientsSection__title {
            margin-top: 1rem;
            margin-bottom: 1rem;

            h1 {
                font-size: 1.5rem;
            }

            .underline {
                width: 3rem;
                height: 0.2rem;
                margin-top: 0.5rem;
            }
        }

        .carousel .slide {
            height: 80px; /* Adjust this value for mobile view */
            margin: 0.5rem;
            padding: 0.5rem;
        }

        .slick-slide {
            padding: 0 10px; /* Adjust this value for mobile view */
        }

        .slick-slide img {
            max-height: 80px; /* Adjust this value for mobile view */
        }

        .space_botton {
            margin-bottom: 2rem;
        }
    }
`;
