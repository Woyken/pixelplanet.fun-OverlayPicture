import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { useAppTheme } from 'theme/makeStyles';
import { GlobalStyles } from 'tss-react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import App from './app';

const AppProvidersWrapper: React.FC = () => {
    const theme = useAppTheme();
    return (
        <React.StrictMode>
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
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    );
};

export default AppProvidersWrapper;
