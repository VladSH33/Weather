import styled from 'styled-components'; 

export const SwitchUnit = styled.button`
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