import React from 'react';
import { Box } from './Skeleton.style';

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  quantity?: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ width, height, borderRadius, quantity }) => {
  const skeletonItems = Array.from({ length: quantity ?? 1 });

  return (
    <>
      {skeletonItems.map((_, index) => (
        <Box $width={width} $height={height} $borderRadius={borderRadius} key={index}/>
      ))}
    </>
  );
};

export default Skeleton;