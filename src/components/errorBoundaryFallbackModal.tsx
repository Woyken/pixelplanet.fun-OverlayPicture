import React, { useState } from 'react';
import { FallbackProps } from 'react-error-boundary';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';

export const ErrorBoundaryFallbackModal: React.FC<FallbackProps> = (props) => {
    const { error, resetErrorBoundary } = props;
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(!isOpen)}>
            <DialogTitle>Overlay crashed 😢</DialogTitle>
            <DialogContent>
                <Typography variant="body1">
                    {error.name}: {error.message}
                </Typography>
                <Typography variant="body2">{error.stack ?? ''}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
                <Button onClick={resetErrorBoundary}>Reset</Button>
            </DialogActions>
        </Dialog>
    );
};
