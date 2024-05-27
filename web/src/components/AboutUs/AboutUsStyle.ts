import styled from 'styled-components';
import leftBlackContainer from '../../assets/leftBlackContainer.png';
import upStairs from '../../assets/upstairs.png';


export const StyledAboutUsSection = styled.section`
    background: url(${upStairs});
    background-size: cover;
    padding: 4rem 0;
    color: white;
    text-align: center;
    .card {
        background: rgba(0, 0, 0, 0.7);
        padding: 2rem;
        border-radius: 10px;
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        p {
            font-size: 1.2rem;
        }
    }
`;