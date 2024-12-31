import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-right: 30px;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0.6);

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: none;
    color: rgba(255, 255, 255, 1);
    border-bottom: 2px solid rgba(255, 255, 255, 1);
  }

  &:hover {
    outline: none;
  }
`;

export const Img = styled.img`
    width: 1.5rem;
    height: 1.5rem; 
`;