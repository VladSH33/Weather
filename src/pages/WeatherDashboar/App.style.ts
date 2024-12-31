import styled from 'styled-components'; 

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Header = styled.div`
  margin: 4rem 0;
  display: flex;
  justify-content: space-between; 
  gap: 2rem;

  .searchCity {
    width: 100%;
  } 
`;

export const FirstSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap; /* Позволяет элементам переноситься */
  gap: 1rem; /* Добавляет расстояние между элементами */
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column; /* Элементы будут располагаться вертикально при малой ширине */
  }
`;

export const Button = styled.button`
  display: flex;
  max-height: 4rem;
  padding: 0.5rem 4rem;
  font-size: 2rem;
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
