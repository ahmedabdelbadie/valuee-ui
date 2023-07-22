// ThemeProvider.js
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeProvider = ({ children }) => {
    const theme = useSelector((state) => state.theme);

    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
