import React from 'react';

import { TextField } from '@mui/material';

export const OverlayUrlInput: React.FC = () => {
    const [inputUrl, setInputUrl] = React.useState('');

    const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    };

    return <TextField label="Url" type="string" value={inputUrl ?? ''} onChange={handleUrlInputChange} />;
};
