import { createMakeAndWithStyles } from 'tss-react';

import { createTheme, ThemeOptions, useMediaQuery } from '@mui/material';

export const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#885200',
            contrastText: '#ffffff',
            light: '#ffddb8',
            dark: '#2c1700',
        },
        secondary: {
            main: '#715a41',
            contrastText: '#ffffff',
            light: '#fdddbd',
            dark: '#281805',
        },
        error: {
            main: '#ba1b1b',
            contrastText: '#ffffff',
            light: '#ffdad4',
            dark: '#410001',
        },
        divider: '#837568',
    },
};

export const darkThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffb85f',
            contrastText: '#482900',
            light: '#673d00',
            dark: '#ffddb8',
        },
        secondary: {
            main: '#dfc1a2',
            contrastText: '#3f2d17',
            light: '#58432b',
            dark: '#fdddbd',
        },
        error: {
            main: '#ffb4a9',
            contrastText: '#680003',
            light: '#930006',
            dark: '#ffdad4',
        },
        divider: '#9d8e81',
    },
};

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

export const useAppTheme = () => {
    const isDarkTheme = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = isDarkTheme ? darkTheme : lightTheme;
    return theme;
};

export const { makeStyles, withStyles } = createMakeAndWithStyles({ useTheme: useAppTheme });
