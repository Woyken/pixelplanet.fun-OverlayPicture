import { setInputImageAction } from 'actions/imageProcessing';
import { useDebounce } from 'hooks/debounce';
import { useIsFocused } from 'hooks/isFocused';
import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectInputUrl } from 'store/slices/overlaySlice';
import { makeStyles } from 'theme/makeStyles';

import { TextField } from '@mui/material';

const useStyles = makeStyles()({
    inputWithMargin: {
        margin: '0.4em',
    },
    invisibleFileInput: {
        display: 'none',
    },
    inputWrapper: {
        display: 'flex',
    },
});

export const OverlayUrlInput: React.FC = () => {
    const { isFocused, elementProps } = useIsFocused();
    const [inputUrl, setInputUrl] = React.useState('');
    const { classes } = useStyles();
    const inputImageDebouced = useDebounce(inputUrl, 500);
    const dispatch = useAppDispatch();
    const inputUrlState = useAppSelector(selectInputUrl);

    const handleUrlInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUrl(e.target.value);
    };
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (!isFocused) return;
        if (!isFirstRun.current) dispatch(setInputImageAction(inputImageDebouced));
        isFirstRun.current = false;
    }, [dispatch, inputImageDebouced, isFocused]);

    useEffect(() => {
        setInputUrl(inputUrlState ?? '');
    }, [inputUrlState]);

    return (
        <div className={classes.inputWrapper}>
            <TextField {...elementProps} className={classes.inputWithMargin} label="Url" type="string" value={inputUrl ?? ''} onChange={handleUrlInputChange} helperText="Http url to an image" />
        </div>
    );
};
