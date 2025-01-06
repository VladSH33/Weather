import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const Box = styled.div<{ $width?: string; $height?: string; $borderRadius?: string }>`
  display: inline-block;
  width: ${(props) => props.$width || "6rem"};
  height: ${(props) => props.$height || "7rem"};
  border-radius: ${(props) => props.$borderRadius || "4rem"};
  background: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;