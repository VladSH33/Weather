import styled from 'styled-components';
    
export const Wrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    min-width: 700px;
    max-width: 70%;
    justify-content: right;

    .slick-slider {
        width: 100%; 

        @media (max-width: 440px) {
            width: 90%;
        }
    }

    @media (max-width: 1000px) {
        max-width: 85%;
        justify-content: center;
        margin-left: 15px;
    }

    @media (max-width: 780px) {
        min-width: 500px;
    }
    @media (max-width: 565px) {
        min-width: 350px;
    }

    @media (max-width: 440px) {
        min-width: 250px;
    }
`;