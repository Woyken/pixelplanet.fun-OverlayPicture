import React from 'react';
import ConfigurationModal from '../configurationModal/configurationModal';
import autoBind from 'react-autobind';
import OverlayImage from '../overlayImage/overlayImage';
import urlHelper from '../../urlHelper';
import { loadSavedConfigurations, updateGameStateFAF } from '../../actions/guiActions';
import BotModal from '../botModal/botModal';
import { observer } from 'mobx-react';
import { overlayStore } from '../../store/overlayStore';
import { initWindowEventHooks } from '../../handlers/eventHooks';

@observer
class App extends React.Component {
    constructor(props: {}) {
        super(props);

        this.state = {};

        // App was just loaded. Set initial values.
        updateGameStateFAF(urlHelper.canvasStr, urlHelper.xCoord, urlHelper.yCoord, urlHelper.zoomLevel);
        loadSavedConfigurations();

        initWindowEventHooks();

        autoBind(this);
    }

    render(): React.ReactNode {
        return (
            <div>
                {overlayStore.overlayEnabled ? <OverlayImage /> : undefined}
                <ConfigurationModal />
                {overlayStore.isBotModalVisible ? <BotModal /> : undefined}
            </div>
        );
    }
}

export default App;
