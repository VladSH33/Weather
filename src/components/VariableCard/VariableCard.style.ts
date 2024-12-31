import styled from 'styled-components';
    
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: rgba(255, 255, 255, 0.85);
    width: calc(25% - 20px);
    min-width: 23rem;
    padding: 2rem 2rem;
    box-sizing: border-box;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(black, 0.2);
    justify-content: left;
    gap: 1rem;
    color: rgba(7, 42, 65, 0.5);
`;

export const Title = styled.div`
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.5rem;
`;

export const Direction = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    font-size: 3rem;
    color: rgba(7, 42, 65, 0.8);
    font-weight: 600;

    img {
        width: 5rem;
        height: 5rem;
    }
`;