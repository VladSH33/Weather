import styled from 'styled-components';
    
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 7rem;
`;

export const Hour = styled.div`
    color: rgba(255, 255, 255, 0.85);
    text-align: center;
    font-size: clamp(10px, 2vw, 3rem);
`;

export const WeatherTemp = styled.div`
    background: #1A20214D;
    border: 0.5px solid #FFFFFF;
    border-radius: 40px;
    padding: 1.5rem 1rem;

        &:hover {
            background: #FFFFFF99;
            border: 0.5px solid #fdfcfc00;
        }

        .weather-icon {
            display: flex;
            justify-content: center;
            margin-bottom: 12px;

            img {
                width: 3em;
                height: 3em;
            }
        }

        .temp {
            color: #FFFFFF99;
            text-align: center;
            font-size: clamp(8px, 1.8vw, 3rem);
        }
`;