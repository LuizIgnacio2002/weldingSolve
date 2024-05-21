import styled from 'styled-components';

export const StyledServicesSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start; // align items to the start of the container
    flex-wrap: wrap; // allow the items to wrap onto multiple lines
    padding: 2rem;
    background-color: #f0f0f0;
    .card {
        flex: 0 0 calc(33.33% - 4rem); // subtract the total left and right margin
        
        
        border-radius: 5px;
        overflow: hidden;
        margin: 1rem 2rem; // add some margin to the cards
    }
    .card-image {
        width: 100%;
        height: 150px;
        overflow: hidden;
        background-color: #f0f0f0;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .card-description {
        padding: 1rem;
        margin-top: 1rem; // add some margin to the top
        border: 1px solid black;
        height: 50vh;

        
        > h4 {
            padding-top: 2rem;
            margin-bottom: 1rem;
            color: #2A2A2A;
            font-family: 'Open Sans', sans-serif;
        }
        p {
            font-size: 1rem;
            color: #666666;
            font-family: 'Open Sans', sans-serif;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .card {
            flex: 0 0 100%;
            margin: 1rem 0; // adjust the margin for mobile view
            background-color: #f0f0f0;
        }
    }
`;