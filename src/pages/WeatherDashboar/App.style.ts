import styled from 'styled-components'; 

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  margin: 4rem 0;
  justify-content: space-between; 
  align-items: center;
  gap: 2rem;

  .searchCity {
    width: 100%;
  } 
`;

export const WeatherDashboard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
  }
`;
