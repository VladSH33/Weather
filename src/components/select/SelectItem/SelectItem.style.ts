import styled from 'styled-components';

export const Li = styled.li<{ $isActive?: boolean }>`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px 10px;
  background-color: ${({ $isActive }) => ($isActive ? '#f0f0f0' : 'transparent')};
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
  color: ${({ $isActive }) => ($isActive ? '#000' : '#555')};

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;