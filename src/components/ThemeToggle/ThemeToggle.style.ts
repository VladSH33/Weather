import styled from 'styled-components';
    
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

export const Title = styled.div`
    color: rgba(255, 255, 255, 0.85);
    font-size: clamp(14px, 2.5vw, 2rem);
`;

export const Label = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    input {
        display: none;
    }
    
    .slider {
        width: 50px;
        height: 25px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 25px;
        position: relative;
        transition: background-color 0.3s ease;

        @media (max-width: 1000px) {
            width: 30px;
            height: 15px;
        }

        &::before {
            content: "";
            width: 18px;
            height: 18px;
            background-color: white;
            border-radius: 50%;
            position: absolute;
            top: 3.5px;
            left: 5px;
            transition: transform 0.3s ease;

            @media (max-width: 1000px) {
                width: 12px;
                height: 12px;

                top: 1.6px;
                left: 3px;
            }
        }
    }

    input:checked + .slider {
        background-color: #20D1BC;

        &::before {
            transform: translateX(24px);

            @media (max-width: 1000px) {
                transform: translateX(12px);
            }
        }
    }
`;