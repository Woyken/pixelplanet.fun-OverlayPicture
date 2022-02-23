import React from 'react';

import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Tooltip } from '@mui/material';

import ShareOverlayModal from './shareOverlayModal';

export const ShareOverlayButton: React.FC = () => {
    const [isShareOverlayOpen, setIsShareOverlayOpen] = React.useState(false);
    return (
        <>
            <Tooltip title="Share current overlay or import">
                <IconButton onClick={(): void => setIsShareOverlayOpen(!isShareOverlayOpen)}>
                    <ShareIcon />
                </IconButton>
            </Tooltip>

            {isShareOverlayOpen && <ShareOverlayModal isOpen={isShareOverlayOpen} setIsOpen={(isOpen: boolean): void => setIsShareOverlayOpen(isOpen)} />}
        </>
    );
};
