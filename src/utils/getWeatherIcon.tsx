import Icon from '../components/Icon/Icon';

export const getIcon = (weatherCode: number): JSX.Element => {
    if ([0, 1].includes(weatherCode)) {
        return <Icon nameIcon="sun"/>;
    }
    if ([71, 73, 75, 77, 66, 67, 85, 86].includes(weatherCode)) {
        return <Icon nameIcon="snow" />;
    }
    if ([2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
        return <Icon nameIcon="cloud" />;
    }
    return <Icon nameIcon="e" />;
};