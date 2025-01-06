import styled from 'styled-components';
    
export const Svg = styled.img<{ $width?: string; $height?: string }>`
    width: ${(props) => props.$width || "clamp(12px, 3vw, 4rem)"};
    height: ${(props) => props.$height || "clamp(12px, 3vw, 4rem)"};
`;