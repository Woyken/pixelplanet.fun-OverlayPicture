import React from 'react';
import { OverlaySavedConfigurationState } from 'store/slices/overlaySlice';
import { makeStyles } from 'theme/makeStyles';

import DeleteForever from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';

const useStyles = makeStyles()({
    configDropDownElement: {
        height: '2em',
        'max-width': '24em',
        color: 'black',
        'text-decoration': 'none',
        display: 'flex',
    },
    configDropDownElImg: {
        display: 'inline-block',
        height: '100%',
        width: '15%',
    },
    configDropDownElImgImg: {
        'max-height': '100%',
        'max-width': '100%',
    },
    configDropDownElText: {
        height: '100%',
        width: '60%',
        'white-space': 'nowrap',
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        display: 'inline-block',
    },
    configDropDownElDelete: {
        height: '100%',
        width: '12%',
        position: 'absolute',
        right: '0',
    },
});

interface IProps {
    config: OverlaySavedConfigurationState;
    onDeleteCallback: (config: OverlaySavedConfigurationState) => void;
}

export const ConfigDropDownElement: React.FC<IProps> = (props) => {
    const { classes } = useStyles();
    const { config, onDeleteCallback } = props;
    const onDeleteElementClicked = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
        onDeleteCallback(config);
    };
    return (
        <div className={classes.configDropDownElement}>
            <div className={classes.configDropDownElImg}>
                <img alt="saved config preview" className={classes.configDropDownElImgImg} src={config.imageUrl} />
            </div>
            <p className={classes.configDropDownElText}>{config.imageUrl}</p>
            <IconButton className={classes.configDropDownElDelete} onClick={onDeleteElementClicked}>
                <DeleteForever />
            </IconButton>
        </div>
    );
};
