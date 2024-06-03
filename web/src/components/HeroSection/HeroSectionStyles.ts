import styled from 'styled-components';
import leftBlackContainer from '../../assets/leftBlackContainer.png';

export const StyledHeroSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    box-sizing: border-box;

    .columnLeft {
        flex: 1 1 60%;
        background-image: url(${leftBlackContainer});
        background-size: cover;
        background-position: center;
        min-height: 47vh;
        color: white;
        padding: 2rem;
        box-sizing: border-box;
        text-align: left;
        p {
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            text-align: justify;
        }  
    }

    .columnLeftTitle {
        border-left: 5px solid #ffbb40;
        padding-left: 1rem;
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    .columnRight {
        flex: 1 1 40%;
        background-color: #ffbb40;
        min-height: 47vh;
        color: black;
        padding: 2rem;
        padding-top: 4rem;
        box-sizing: border-box;

        p {
            font-family: 'Inter', sans-serif;
            text-align: justify;
            font-size: 14px;
        }
    }

    h1 {
        font-size: 46px;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .columnLeft, .columnRight {
            flex: 1 1 100%;
        }
    }
`;
