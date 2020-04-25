import React from 'react';
import ConfigDropDownContent from './Content/configDropDownContent';
import autoBind from 'react-autobind';
import { GuiParametersState, SavedConfiguration } from '../../store/guiTypes';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ThunkDispatch } from 'redux-thunk';
import { saveCurrentConfiguration, applySavedConfiguration, removeSavedConfiguration } from '../../actions/guiActions';

interface OwnState {
    isActive: boolean;
}

interface OwnProps {}
interface StateProps {
    guiState: GuiParametersState;
}

interface DispatchProps {
    saveCurrentConfig: () => void;
    applyConfig: (config: SavedConfiguration) => void;
    removeConfig: (imgUrl: string) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

class ConfigDropDown extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isActive: false,
        };

        autoBind(this);
    }

    render(): React.ReactNode {
        // tslint:disable-next-line:typedef
        const { guiState } = this.props;
        const { isActive } = this.state;
        return (
            <div>
                <img
                    src="https://fonts.gstatic.com/s/i/materialicons/save/v1/24px.svg"
                    onClick={this.onSaveActiveConfiguration}
                />
                <img
                    src="https://fonts.gstatic.com/s/i/materialicons/folder_open/v1/24px.svg"
                    onClick={(): void => this.toggle()}
                />
                <ConfigDropDownContent
                    onApplyConfig={this.onApplyConfig}
                    onRemoveConfig={this.onRemoveConfig}
                    configs={guiState.savedConfigurations.configs}
                    isActive={isActive}
                />
            </div>
        );
    }

    onSaveActiveConfiguration(): void {
        // tslint:disable-next-line: typedef
        const { guiState, saveCurrentConfig } = this.props;
        saveCurrentConfig();
    }

    onApplyConfig(config: SavedConfiguration): void {
        this.toggle(false);

        const { applyConfig } = this.props;
        applyConfig(config);
    }

    onRemoveConfig(config: SavedConfiguration): void {
        const { removeConfig } = this.props;
        removeConfig(config.imageUrl);
    }

    toggle(enabled?: boolean): void {
        this.setState(
            (prevState): OwnState => {
                return {
                    ...prevState,
                    isActive: enabled !== undefined ? enabled : !prevState.isActive,
                };
            },
        );
    }
}

function mapStateToProps(state: AppState, ownProps: OwnProps): StateProps {
    return {
        guiState: state.guiData,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps {
    return {
        saveCurrentConfig: () => dispatch(saveCurrentConfiguration()),
        applyConfig: (config: SavedConfiguration) => dispatch(applySavedConfiguration(config)),
        removeConfig: (imgUrl: string) => dispatch(removeSavedConfiguration(imgUrl)),
    };
}

export default connect<StateProps, DispatchProps, OwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps,
)(ConfigDropDown);
