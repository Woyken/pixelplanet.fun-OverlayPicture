import { setInputImageAction } from 'actions/imageProcessing';
import { useDebounce } from 'hooks/debounce';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectInputUrl } from 'store/slices/overlaySlice';

import { TextField } from '@mui/material';

export const OverlayUrlInput: React.FC = () => {
    const [inputUrl, setInputUrl] = React.useState('');
    const inputImageDebouced = useDebounce(inputUrl, 500);
    const dispatch = useAppDispatch();
    const inputUrlState = useAppSelector(selectInputUrl);

    const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    };

    useEffect(() => {
        dispatch(setInputImageAction(inputImageDebouced));
    }, [dispatch, inputImageDebouced]);

    useEffect(() => {
        setInputUrl(inputUrlState ?? '');
    }, [inputUrlState]);

    return <TextField label="Url" type="string" value={inputUrl ?? ''} onChange={handleUrlInputChange} />;
};
