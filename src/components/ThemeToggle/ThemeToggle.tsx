import React from 'react';
import styled from 'styled-components';
import { Wrapper, Label, Title } from './ThemeToggle.style';

type ThemeToggleProps = {
  toggleTheme: () => void;
  theme: string;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {

  return (
    <Wrapper>
      <Title>Theme</Title>
      <Label>
          <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} ></input>
          <span className="slider"></span>
      </Label>
    </Wrapper>
  );
};

export default ThemeToggle;