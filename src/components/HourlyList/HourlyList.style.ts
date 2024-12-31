import styled from 'styled-components';
    
export const Wrapper = styled.div`
    display: flex;
    gap: 1.5rem;
    min-width: 700px; /* Минимальная ширина для слайдера */
    max-width: 70%; /* Максимальная ширина */
    justify-content: right;

    .slick-slider {
        width: 100%; 

        @media (max-width: 440px) {
            width: 90%;
        }
    }

    @media (max-width: 1000px) {
        max-width: 85%;/* На маленьких экранах слайдер занимает всю ширину */
        justify-content: center; /* Центрируем слайдер */
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
