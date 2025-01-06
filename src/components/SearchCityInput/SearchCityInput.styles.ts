import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: clamp(18px, 2.5vw, 2rem);
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
    width: 2.5rem;
    height: 2.5rem; 
`;