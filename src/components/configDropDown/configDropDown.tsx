import React from 'react';
import { Select, InputLabel, MenuItem, FormControl, Tooltip } from '@mui/material';
import ConfigDropDownElement from './element/configDropDownElement';
import logger from '../../handlers/logger';
import './configDropDown.scss';

const ConfigDropDown: React.FC = () => {
    return <div>TODO</div>;
};

// interface OwnState {}

// interface OwnProps {}

// @observer
// class ConfigDropDown0 extends React.Component<OwnProps, OwnState> {
//     constructor(props: OwnProps) {
//         super(props);
//         this.state = {
//             isActive: false,
//         };
//     }

//     render(): React.ReactNode {
//         // tslint:disable-next-line:typedef
//         return (
//             <div>
//                 <FormControl>
//                     <InputLabel id="saved-config-dropdown-label">Load saved config</InputLabel>
//                     <Select
//                         className="PictureOverlay_ConfigDropDownSelector"
//                         labelId="saved-config-dropdown-label"
//                         value=""
//                         onChange={(value): void => {
//                             if (typeof value.target.value === 'string') this.onLoadConfigByUrl(value.target.value);
//                         }}
//                     >
//                         {overlayStore.savedConfigs.map((config) => (
//                             <MenuItem key={config.imageUrl} value={config.imageUrl}>
//                                 <ConfigDropDownElement
//                                     config={config}
//                                     key={config.imageUrl}
//                                     onDeleteCallback={this.onRemoveConfig.bind(this)}
//                                 />
//                             </MenuItem>
//                         ))}
//                     </Select>
//                 </FormControl>
//                 {overlayStore.overlayImage.inputImage.url ? (
//                     <Tooltip title={'Save current config'}>
//                         <img
//                             className="PictureOverlay_ConfigDropDownSaveIcon"
//                             src="https://fonts.gstatic.com/s/i/materialicons/save/v1/24px.svg"
//                             onClick={this.onSaveActiveConfiguration.bind(this)}
//                         />
//                     </Tooltip>
//                 ) : null}
//             </div>
//         );
//     }

//     onLoadConfigByUrl(url: string): void {
//         const config = overlayStore.savedConfigs.find((c) => c.imageUrl === url);
//         if (config) this.onApplyConfig(config);
//         else logger.logError('Tried to load config from url, but not found in saved');
//     }

//     onSaveActiveConfiguration(): void {
//         saveCurrentConfiguration();
//     }

//     onApplyConfig(config: SavedConfiguration): void {
//         applySavedConfiguration(config);
//     }

//     onRemoveConfig(config: SavedConfiguration): void {
//         removeSavedConfiguration(config.imageUrl);
//     }
// }

export default ConfigDropDown;
