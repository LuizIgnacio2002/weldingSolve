import styled from 'styled-components';
import leftBlackContainer from '../../assets/leftBlackContainer.png';

export const StyledHeroSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .columnLeft {
        flex: 0 0 60%;
        background-image: url(${leftBlackContainer});
        background-size: cover;
        background-position: center;
        min-height: 55vh;
        color: white;
        padding: 2rem;
    }
    

    .columnLeftTitle {
        border-left: 5px solid #ffbb40;
        padding-left: 1rem;
        margin-bottom: 1rem;
        margin-top: 2rem;
    }

    .columnRight {
        flex: 0 0 40%;
        background-color: #ffbb40;
        min-height: 55vh;
        color: black;
        padding: 2rem;
        padding-top: 4rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .column60, .column40 {
            flex: 0 0 100%;
        }
    }
`;