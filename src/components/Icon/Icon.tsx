import React from 'react';
import { Svg } from './Icon.style';

type IconProps = {
    nameIcon: string;
    width?: string;
    height?: string;
}

const Icon: React.FC<IconProps> = ({nameIcon, width, height}) => {
    return (
        <Svg $width={width} $height={height} src={`${process.env.PUBLIC_URL}/icons/${nameIcon}.svg`} alt={nameIcon} />
    );
};

export default Icon;