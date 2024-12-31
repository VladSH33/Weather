import React from 'react';
import { Wrapper } from '../HourlyList/HourlyList.style';
import { Box } from './Skeleton.style';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  quantity?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius, quantity }) => {

  const componentsArray = Array.from({ length: quantity ?? 1 });
  return (
    <>
          {componentsArray.map((_, index) => (
        <Box $width={width} $height={height} $borderRadius={borderRadius} key={index}/>
      ))}
    </>

  );
};

export default Skeleton;