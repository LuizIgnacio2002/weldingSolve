import styled from 'styled-components';

export const StyledServicesSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2rem;
    background-color: white;

    .card {
        flex: 0 0 calc(33.33% - 2rem);
        margin: 1rem;
        background-color: #f9f9f9;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 450px; /* Increased height for uniformity */

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
    }

    .card-image {
        width: 100%;
        height: 50%; /* Adjusted height for images */
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;

            &:hover {
                transform: scale(1.05);
            }
        }
    }

    .card-image img {
        transition: transform 0.5s ease-in-out, opacity 1s ease-in-out;
    }
    
    .card-image:hover img {
        transform: scale(1.05);
    }

    

    .card-description {
        padding: 1rem;
        height: 50%; /* Adjusted height for description */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 3rem;

        h4 {
            color: #333333;
            margin-bottom: 0.5rem;
            text-align: left;

            font-size: 23px;
            font-weight: 150;
            font-family: 'Inter', sans-serif;
        }

        p {
            color: #666666;
            font-family: 'Inter', sans-serif;
            text-align: justify;
            font-size: 14px;
        }
    }

    .ServicesSection__title {
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
            margin: 0.5rem auto;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .card {
            flex: 0 0 100%;
            margin: 1rem 0;
        }
    }
`;
