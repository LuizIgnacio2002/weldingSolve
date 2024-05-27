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
            font-size: 2rem;
            margin-bottom: 1rem;
            font-family: 'Rubik', sans-serif;
        }
        p {
            font-size: 1rem;
            font-family: 'Open Sans', sans-serif;
            text-align: left;
        }
    }
`;