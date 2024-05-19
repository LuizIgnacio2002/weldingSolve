// HeaderStyles.ts
import styled from 'styled-components';


export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffb400;
    color: #fff;

    h1 {
        font-size: 2rem;
    }

    nav ul {
        display: flex;
        gap: 1rem;
    }
`;

