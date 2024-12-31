import styled from 'styled-components';
    
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    width: 10%;
`;

export const Title = styled.div`
    color: rgba(255, 255, 255, 0.85);
    font-size: 1.5rem;
`;

export const Label = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    input {
        display: none;
    }
    
    .slider {
        width: 4rem;
        height: 2rem;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 25px;
        position: relative;
        transition: background-color 0.3s ease;

        &::before {
            content: "";
            width: 1.5rem;
            height: 1.5rem;
            background-color: white;
            border-radius: 50%;
            position: absolute;
            top: 2px;
            left: 2px;
            transition: transform 0.3s ease;
        }
    }

    input:checked + .slider {
        background-color: #fffb2cb8;

        &::before {
            transform: translateX(2rem);
        }
    }
`;