import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyles } from 'tss-react';

import { ThemeProvider } from '@mui/material';

import { store } from '../../store/store';
import { useAppTheme } from '../../theme/makeStyles';

import App from './app';

const AppProvidersWrapper: React.FC = () => {
    const theme = useAppTheme();
    return (
        <Provider store={store}>
            <GlobalStyles
                styles={{
                    body: {
                        margin: 0,
                        padding: 0,
                    },
                }}
            />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    );
};

export default AppProvidersWrapper;
