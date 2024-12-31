import React, { useState } from 'react';
import { Wrapper, Input, Img } from './MyInput.styles'

type InputWithButtonProps = {
  onSubmit: (value: string) => void,
  value: string,
}

const InputWithButton: React.FC<InputWithButtonProps> = ({ onSubmit, value }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSubmit(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(inputValue); // Также вызываем функцию, если нажата клавиша Enter
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
      <Img src="../../icons/search.svg" alt="search" />
    </Wrapper>
  );
};

export default InputWithButton;