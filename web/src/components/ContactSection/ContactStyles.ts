import styled from 'styled-components';

export const StyledContactSection = styled.section`
    background-color: #f4f4f4;
    padding: 2rem 0;

    .card {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        

        .card__title {
            margin-bottom: 2rem;

            h1 {
                font-size: 2rem;
                font-weight: 700;
            }

            .underline {
                width: 5rem;
                height: 0.25rem;
                background-color: #ffbb40;
                margin: 0 auto;
                margin-top: 1rem;
            }
        }

        .card__icons_section {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;

            a {
                margin: 0 1rem;
            }

            img {
                height: 2rem;
                width: 2rem;
            }
        }

        .card__reference {
            p {
                margin: 0.5rem 0;
                font-family: 'Open Sans', sans-serif;
                
            }
        }
    }
`;