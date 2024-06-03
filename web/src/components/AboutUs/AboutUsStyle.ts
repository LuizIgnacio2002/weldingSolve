import styled from 'styled-components';

export const StyledAboutUsSection = styled.section`
    background-color: #ffbb40;
    background-size: cover;
    padding: 5rem 0;
    color: white;
    text-align: center;
    .card {
        background: rgba(0, 0, 0, 0.1);
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 10px;
        padding: 2rem;
        h1 {
            margin-bottom: 1rem;
            font-size: 30px;
            font-weight: 300;
            font-family: 'Inter', sans-serif;
        }
        p {
            font-family: 'Inter', sans-serif;
            text-align: left;
            font-size: 14px;
        }
    }
`;