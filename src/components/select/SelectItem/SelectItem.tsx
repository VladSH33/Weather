import { Li } from './SelectItem.style'

type SelectOptionItem = {
    cityName: string;
    coordinates: {
        lat: number;
        lon: number;
        };
    onOptionSelect: (option: { lon: number; lat: number }, city: string) => void;
    isActive?: boolean;
}

const SelectItem: React.FC<SelectOptionItem> = ({ cityName, coordinates, onOptionSelect, isActive = false }) => {
    return (
        <Li onClick={() => { onOptionSelect(coordinates, cityName)}} $isActive={isActive}>
            {cityName}
        </Li>
    );
};

export default SelectItem;