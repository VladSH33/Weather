import React, { useState } from 'react';
import { Wrapper, Input } from './SearchCityInput.styles'
import Icon from '../Icon/Icon'

type InputProps = {
  onSubmit: (value: string) => void,
  value: string,
}

const SearchCityInput: React.FC<InputProps> = ({ onSubmit, value }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSubmit(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(inputValue);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="City or district"
      />
      <Icon nameIcon={'search'} width={'2.5rem'} height={'2.5rem'}/>
    </Wrapper>
  );
};

export default SearchCityInput;