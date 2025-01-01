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

export const FirstSection = styled.div`
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

export const Button = styled.button`
  display: flex;
  max-height: 4rem;
  padding: 2rem 4rem;
  font-size: clamp(10px, 2vw, 2rem);
  border-radius: 30px;
  border: none;
  gap: 0.5rem;
  color: #13264a33;
  align-items: center;
  background-color: rgba(255, 255, 255);

  &:hover {
    opacity: 0.9;
  }
`;

export const Unit = styled.div<{ $isActive: boolean }>`
  font-weight: ${(props) => (props.$isActive ? 'bold' : 'normal')};
  color: ${(props) => (props.$isActive ? '#1aafe0' : '#aaa')};
`;

export const Slash = styled.div`
  color: #aaa;
`;
