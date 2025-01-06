import styled from 'styled-components';
    
export const Wrapper = styled.div`
    padding: 2em;
    text-align: center;
`;

export const Day = styled.div`
    display: flex;
    color: rgba(255, 255, 255, 0.85);
    align-items: center;
    gap: 2rem;
    justify-content: center;
    
    .day__date {
        min-width: 9rem;
    }

    .toDay {
        font-size: clamp(12px, 2vw, 2.5rem);
    }
    .date {
        font-size: clamp(8px, 1vw, 2rem);
    }

    img {
        width: 4.5em;
        height: 4.5em;
    }
`;

export const Temp = styled.div`
    font-size: 6rem;
    color: rgba(255, 255, 255);
    text-align: center;
    margin: 1rem 0;
`;

export const Locaton = styled.div`
    display: flex;
    text-align: center;
    color: rgba(255, 255, 255);
    font-size: clamp(12px, 2vw, 2.5rem);
    gap: 1rem;
    justify-content: center;
    margin-right: 20px;

    img {
        width: 1em;
        height: 1em;
    }
`;
