import { useState } from 'react';

const themes = {
  light: {
    body: '#E2E2E2',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
  },
  dark: {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
  },
};

const useTheme = () => {
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  return {
    theme: themes[themeMode],
    toggleTheme,
  };
};

export default useTheme;