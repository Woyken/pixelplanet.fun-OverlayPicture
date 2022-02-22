import { setInputImageAction } from 'actions/imageProcessing';
import { useDebounce } from 'hooks/debounce';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectInputUrl } from 'store/slices/overlaySlice';
import { makeStyles } from 'theme/makeStyles';

import { TextField } from '@mui/material';

const useStyles = makeStyles()({
    inputWithMargin: {
        '& .MuiOutlinedInput-root': {
            margin: '0.4em',
        },
    },
});

export const OverlayUrlInput: React.FC = () => {
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
        if (!isFirstRun.current) dispatch(setInputImageAction(inputImageDebouced));
        isFirstRun.current = false;
    }, [dispatch, inputImageDebouced]);

    useEffect(() => {
        setInputUrl(inputUrlState ?? '');
    }, [inputUrlState]);

    return <TextField className={classes.inputWithMargin} label="Url" type="string" value={inputUrl ?? ''} onChange={handleUrlInputChange} />;
};
