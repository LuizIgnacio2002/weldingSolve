// HeaderStyles.ts
import styled from 'styled-components';


export const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: white;
    color: black;
    

    h1 {
        font-size: 30px;
        font-weight: 300;
        font-family: 'Inter', sans-serif;
    }

    nav ul {
        display: flex;
        gap: 1rem;
        
    
        @media (max-width: 768px) {
            display: none;
            
        }
    }

    ul {
        list-style: none;
    }

    ul : hover {
        color: #ffb400;
    }

    a {
        color: black;
    }

    img {
        width: 80px;
        height: 80px;

    }



`;

