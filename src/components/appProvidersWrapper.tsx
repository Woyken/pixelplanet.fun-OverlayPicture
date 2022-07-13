import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureAppStore, persistor, store } from 'store/store';
import { useAppTheme } from 'theme/makeStyles';
import { GlobalStyles } from 'tss-react';

import { ScopedCssBaseline, ThemeProvider } from '@mui/material';

import App from './app';
import { ErrorBoundaryFallbackModal } from './errorBoundaryFallbackModal';

const AppProvidersWrapper: React.FC = () => {
    const [appStore, setAppStore] = React.useState(store);
    const theme = useAppTheme();
    return (
        <React.StrictMode>
            <Provider store={appStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyles
                        styles={{
                            body: {
                                margin: 0,
                                padding: 0,
                            },
                        }}
                    />
                    <ThemeProvider theme={theme}>
                        <ScopedCssBaseline>
                            <ErrorBoundary FallbackComponent={ErrorBoundaryFallbackModal} onReset={() => setAppStore(configureAppStore())}>
                                <App />
                            </ErrorBoundary>
                        </ScopedCssBaseline>
                    </ThemeProvider>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    );
};

export default AppProvidersWrapper;
