import React, { useState, useEffect, useCallback } from 'react';
import SelectItem from './SelectItem/SelectItem';
import { Ul } from './SelectCity.style'

type SelectCityOption = {
    id: string;
    coordinates: {
      lat: number;
      lon: number;
    };
    name: string;
    [key: string]: any;
}

type SelectCityProps = {
    options: SelectCityOption[];
    onOptionSelect: (option: { lon: number; lat: number }, city: string) => void;
}

const SelectCity: React.FC<SelectCityProps> = ({ options, onOptionSelect }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (options.length === 0) return;
  
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            setActiveIndex((prevIndex) => (prevIndex + 1) % options.length);
            break;

          case 'ArrowUp':
            e.preventDefault();
            setActiveIndex((prevIndex) =>
              prevIndex - 1 < 0 ? options.length - 1 : prevIndex - 1
            );
            break;

          case 'Enter':
            e.preventDefault();
            if (options[activeIndex]) {
              const { coordinates, name } = options[activeIndex];
              onOptionSelect(coordinates, name);
            }
            break;
  
          default:
            break;
        }
      },
      [options, activeIndex, onOptionSelect]
    );
  
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleKeyDown]);

    return (
        <Ul>
          {options.length > 0 ? (
              options.map((city, index) => (
                  <SelectItem
                      key={city.id}
                      cityName={city.name}
                      coordinates={city.coordinates}
                      onOptionSelect={onOptionSelect}
                      isActive={index === activeIndex}
                  />
              ))
            ) : (
              <SelectItem
                  key="not-found"
                  cityName="City not found"
                  coordinates={{ lat: 0, lon: 0 }}
                  onOptionSelect={() => {}}
                  isActive={false}
              />
          )}
        </Ul>
    );
};

export default SelectCity;