import urlHelper from './urlHelper';
import { Configuration } from './configuration';
import { configurationStore } from './configurationStore';
import { pictureConverter } from './pictureConverter';

class UserInput {
    private inputBase: HTMLDivElement;
    private urlInput: HTMLInputElement;
    private trasparencyInput: HTMLInputElement;
    private brightenInput: HTMLInputElement;
    private shouldConvertColorsInput: HTMLInputElement;
    private displayInput: HTMLInputElement;
    private xOffsetInput: HTMLInputElement;
    private yOffsetInput: HTMLInputElement;
    private overlayPicture: HTMLImageElement;
    private overlayCanvas: HTMLCanvasElement;
    private activeOverlayElement: HTMLImageElement | HTMLCanvasElement;

    private configuration: Configuration;

    constructor(initializeFromUrlHash: string) {
        this.onClickShare = this.onClickShare.bind(this);

        this.configuration = Configuration.createFromUrlHash(initializeFromUrlHash);

        this.createInputElements();
        this.createOverlayImage();
        this.initializeUIElements().catch(() => {});
        this.initializeEventListeners();
    }

    private createInputElements() {
        const overlayHtml = `
<div
    style="
        position: absolute;
        right: 0.9em;
        top: 0.1em;
        border: 1px solid rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        background-color: hsla(0,0%,89%,.8);
        padding: 5px;
        font-size: 0.9em;
    "
>
    <div>
        <div><input id="PictureOverlay_Display" type="checkbox"/> Image Overlay</div>
    </div>
    <div id="PictureOverlay_BaseForExpand">
        <div id="PictureOverlay_InputBase">
            Url:<br/>
            <input id="PictureOverlay_ImageUrl" type="text"/>
            <br/>
            X:<br/>
            <input id="PictureOverlay_XOffset" type="number"/>
            <br/>
            Y:<br/>
            <input id="PictureOverlay_YOffset" type="number"/>
            <br/>
            Transparency:<br/>
            <input id="PictureOverlay_Transparency" type="range" min="0" max="100"/>

            <div id="PictureOverlay_ModificationsBase">
                <input id="PictureOverlay_ConvertColors" type="checkbox"/>
                Convert colors:<br/>
                Brighten Image:<br/>
                <input id="PictureOverlay_Brighten" type="range" min="-20" max="20"/>
            </div>
            <br/>
            <button id="PictureOverlay_Share">Share overlay</button>
        </div>
    </div>
    <img
        id="PictureOverlay_ExpandBtn"
        src="https://fonts.gstatic.com/s/i/materialicons/expand_less/v1/24px.svg"
    />
    <img
        id="PictureOverlay_SaveConfigBtn"
        src="https://fonts.gstatic.com/s/i/materialicons/save/v1/24px.svg"
    />
    <img
        id="PictureOverlay_ConfigDropDownBtn"
        src="https://fonts.gstatic.com/s/i/materialicons/folder_open/v1/24px.svg"
    />
    <div
        id="PictureOverlay_ConfigDropDownContent"
        style="
            width: 100%;
            position: absolute;
            background-color: #f1f1f1;
            min-width: 160px;
            overflow: auto;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        "
    />
</div>
        `;

        (document.getElementsByClassName(
            'onlinebox',
        )[0] as HTMLDivElement).style.zIndex = '2';
        (document.getElementsByClassName(
            'coorbox',
        )[0] as HTMLDivElement).style.zIndex = '2';

        const overlayBaseDiv = document.createElement('div');
        overlayBaseDiv.id = 'PictureOverlay_Base';
        overlayBaseDiv.innerHTML = overlayHtml;
        document.body.appendChild(overlayBaseDiv);

        this.inputBase = document.getElementById(
            'PictureOverlay_InputBase',
        ) as HTMLDivElement;

        const displayInput = document.getElementById(
            'PictureOverlay_Display',
        ) as HTMLInputElement;
        displayInput.checked = true;
        displayInput.onchange = (ev) => {
            this.updateDisplay();
        };
        this.displayInput = displayInput;

        const urlInput = document.getElementById(
            'PictureOverlay_ImageUrl',
        ) as HTMLInputElement;
        urlInput.onchange = async (ev) => {
            this.configuration.imgUrl = this.urlInput.value;
            await this.updateOverlayImage();
            this.updateOverlayPicturePositionFromUrl();
            this.updateDisplay();
        };
        this.urlInput = urlInput;

        const xOffsetInput = document.getElementById(
            'PictureOverlay_XOffset',
        ) as HTMLInputElement;
        xOffsetInput.value = '0';
        xOffsetInput.oninput = (ev) => {
            this.configuration.xOffset = parseInt(xOffsetInput.value, 10);
            this.updateOverlayPicturePositionFromUrl();
        };
        this.xOffsetInput = xOffsetInput;

        const yOffsetInput = document.getElementById(
            'PictureOverlay_YOffset',
        ) as HTMLInputElement;
        yOffsetInput.value = '0';
        yOffsetInput.oninput = (ev) => {
            this.configuration.yOffset = parseInt(yOffsetInput.value, 10);
            this.updateOverlayPicturePositionFromUrl();
        };
        this.yOffsetInput = yOffsetInput;

        const trasparencyInput = document.getElementById(
            'PictureOverlay_Transparency',
        ) as HTMLInputElement;
        trasparencyInput.value = '75';
        trasparencyInput.oninput = (ev) => {
            this.configuration.transparency = parseInt(
                this.trasparencyInput.value,
                10,
            );
            this.activeOverlayElement.style.opacity = (
                this.configuration.transparency / 100
            ).toString(10);
        };
        this.trasparencyInput = trasparencyInput;

        const brightenInput = document.getElementById(
            'PictureOverlay_Brighten',
        ) as HTMLInputElement;
        brightenInput.value = '15';
        brightenInput.onchange = async (ev) => {
            this.configuration.brighten = parseInt(
                brightenInput.value,
                10,
            );
            await this.updateOverlayImage();
        };
        this.brightenInput = brightenInput;

        const shouldConvertColorsInput = document.getElementById(
            'PictureOverlay_ConvertColors',
        ) as HTMLInputElement;
        shouldConvertColorsInput.checked = true;
        shouldConvertColorsInput.onchange = async (ev) => {
            this.configuration.convertColors = shouldConvertColorsInput.checked;
            await this.updateOverlayImage();
        };
        this.shouldConvertColorsInput = shouldConvertColorsInput;

        const shareBtn = document.getElementById(
            'PictureOverlay_Share',
        ) as HTMLButtonElement;
        shareBtn.onclick = this.onClickShare;

        const baseForExpanding = document.getElementById(
            'PictureOverlay_BaseForExpand',
        ) as HTMLDivElement;

        let isExpanded = true;
        const expandBtn = document.getElementById(
            'PictureOverlay_ExpandBtn',
        ) as HTMLImageElement;
        expandBtn.onclick = (ev) => {
            if (isExpanded) {
                isExpanded = false;
                expandBtn.src =
                    'https://fonts.gstatic.com/s/i/materialicons/expand_more/v1/24px.svg';
                baseForExpanding.style.display = 'none';
            } else {
                isExpanded = true;
                expandBtn.src =
                    'https://fonts.gstatic.com/s/i/materialicons/expand_less/v1/24px.svg';
                baseForExpanding.style.display = 'block';
            }
        };

        const saveConfigBtn = document.getElementById(
            'PictureOverlay_SaveConfigBtn',
        ) as HTMLImageElement;
        saveConfigBtn.onclick = () => {
            configurationStore.add(this.configuration);
            this.updateConfigDropDown();
        };

        const openConfigDropDownBtn = document.getElementById(
            'PictureOverlay_ConfigDropDownBtn',
        ) as HTMLImageElement;
        openConfigDropDownBtn.onclick = () => {
            this.toggleConfigDropDown();
        };
    }

    private toggleConfigDropDown() {
        const dropDownContent = document.getElementById(
            'PictureOverlay_ConfigDropDownContent',
        ) as HTMLDivElement;

        if (dropDownContent.childElementCount > 0) {
            this.closeConfigDropDown();
        } else {
            this.openConfigDropDown();
        }
    }

    private updateConfigDropDown() {
        const dropDownContent = document.getElementById(
            'PictureOverlay_ConfigDropDownContent',
        ) as HTMLDivElement;

        if (dropDownContent.childElementCount > 0) {
            this.closeConfigDropDown();
            this.openConfigDropDown();
        }
    }

    private openConfigDropDown() {
        const dropDownContent = document.getElementById(
            'PictureOverlay_ConfigDropDownContent',
        ) as HTMLDivElement;

        if (dropDownContent.childElementCount > 0) {
            this.closeConfigDropDown();
        }

        const configs = configurationStore.getSavedConfigurations();

        configs.forEach((config) => {
            dropDownContent.appendChild(this.createConfigDropDonwElement(
                config,
                async (conf: Configuration) => {
                    this.trasparencyInput.value = conf.transparency.toString(10);
                    this.trasparencyInput.dispatchEvent(new Event('input'));
                    this.yOffsetInput.value = conf.yOffset.toString(10);
                    this.yOffsetInput.dispatchEvent(new Event('input'));
                    this.xOffsetInput.value = conf.xOffset.toString(10);
                    this.xOffsetInput.dispatchEvent(new Event('input'));
                    this.urlInput.value = conf.imgUrl;
                    this.urlInput.dispatchEvent(new Event('change'));
                },
                (imgUrl: string) => {
                    configurationStore.remove(imgUrl);
                    this.updateConfigDropDown();
                },
            ));
        });
    }

    private closeConfigDropDown() {
        const dropDownContent = document.getElementById(
            'PictureOverlay_ConfigDropDownContent',
        ) as HTMLDivElement;

        while (dropDownContent.childElementCount > 0) {
            dropDownContent.removeChild(dropDownContent.firstChild);
        }
    }

    private createConfigDropDonwElement(
        config: Configuration,
        clickCallback: (config: Configuration) => void,
        deleteCallback: (imgUrl: string) => void,
    ): HTMLDivElement {
        const innerHtml = `
        <div
            style="
                color: black;
                text-decoration: none;
                display: block;
            "
        >
            <img
                class="PictureOverlay_ConfigDropDownElImg"
                src="https://fonts.gstatic.com/s/i/materialicons/delete_forever/v1/24px.svg"
                style="width: 15%;"
            />
            <a
                class="PictureOverlay_ConfigDropDownElText"
                style="
                    width: 60%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: inline-block;
                "
            >
                Placeholder
            </a>
            <img
                class="PictureOverlay_ConfigDropDownElDelete"
                src="https://fonts.gstatic.com/s/i/materialicons/delete_forever/v1/24px.svg"
                style="
                    width: 12%;
                    position: absolute;
                    right: 0;
                "
            />
        </div>
        `;

        const parentDiv = document.createElement('div');
        parentDiv.innerHTML = innerHtml;
        parentDiv.onclick = () => {
            clickCallback(config);
        };

        const imgEl = parentDiv.getElementsByClassName(
            'PictureOverlay_ConfigDropDownElImg',
        )[0] as HTMLImageElement;
        imgEl.src = config.imgUrl;

        const textEl = parentDiv.getElementsByClassName(
            'PictureOverlay_ConfigDropDownElText',
        )[0] as HTMLLinkElement;
        textEl.innerText = config.imgUrl;

        const deleteBtn = parentDiv.getElementsByClassName(
            'PictureOverlay_ConfigDropDownElDelete',
        )[0] as HTMLImageElement;
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteCallback(config.imgUrl);
        };

        return parentDiv;
    }

    private onClickShare() {
        const hashstr = window.location.hash.substr(1).split(',');
        const temp = this.urlInput.value;
        // default link format is: pixelplanet.fun/#0,0,0
        const shareLink = `${
            window.location.href.split('#')[0]
        }#${this.configuration.xOffset.toString(
            10,
        )},${this.configuration.yOffset.toString(10)},${hashstr[2] ||
            0},${this.configuration.serializeForUrl()}`;

        this.urlInput.value = shareLink;
        this.urlInput.select();
        document.execCommand('copy');
        this.urlInput.value = temp;

        alert(`Copied link to your clipboard:
${shareLink}

Share this link with others to quickly share your overlay configuration.
`);
    }

    private createOverlayImage() {
        const overlayPicture = new Image();
        const overlayCanvas = document.createElement('canvas');
        overlayPicture.style.position = 'absolute';
        overlayCanvas.style.position = 'absolute';
        overlayPicture.style.left = '0';
        overlayCanvas.style.left = '0';
        overlayPicture.style.top = '0';
        overlayCanvas.style.top = '0';
        overlayPicture.style.pointerEvents = 'none';
        overlayCanvas.style.pointerEvents = 'none';
        overlayPicture.style.transformOrigin = 'top left';
        overlayCanvas.style.transformOrigin = 'top left';
        (overlayPicture.style as any).imageRendering = 'pixelated';
        (overlayCanvas.style as any).imageRendering = 'pixelated';
        if (!(overlayPicture.style as any).imageRendering) {
            (overlayPicture.style as any).imageRendering = 'crisp-edges';
        }
        if (!(overlayCanvas.style as any).imageRendering) {
            (overlayCanvas.style as any).imageRendering = 'crisp-edges';
        }
        this.overlayPicture = overlayPicture;
        this.overlayCanvas = overlayCanvas;
        this.activeOverlayElement = this.overlayPicture;

        document.body.insertBefore(overlayPicture, document.body.firstChild);
        document.body.insertBefore(overlayCanvas, document.body.firstChild);
    }

    private async updateOverlayImage() {
        const ctx = this.overlayCanvas.getContext('2d');

        // TODO
        // Cannnot fetch image from another server, cors is disabled.
        // Fallback to showing via only image element if that happens.

        // Disable modification inputs and show message
        // "Server, where this file is hosted, doesn't allow these files to be modified. (CORS disabled)
        // Use imgur, or something similar. Just drop picture in there, and copy it's link"

        const data = await pictureConverter.convertPictureFromUrl(
            this.configuration.imgUrl,
            ctx,
            this.configuration.convertColors,
            this.configuration.brighten)
            .catch((reason) => {
                // first transfer current styles and stuff to newly shown one.
                this.overlayPicture.style.transform = this.activeOverlayElement.style.transform;
                this.overlayPicture.style.opacity = this.activeOverlayElement.style.opacity;
                this.overlayPicture.style.left = this.activeOverlayElement.style.left;
                this.overlayPicture.style.right = this.activeOverlayElement.style.right;
                this.overlayPicture.style.display = this.activeOverlayElement.style.display;
                this.overlayPicture.src = this.configuration.imgUrl;
                // change reference to element itself
                this.activeOverlayElement = this.overlayPicture;

                document.getElementById('PictureOverlay_ModificationsBase')
                    .style.display = 'none';
            });

        if (!data) {
            // just draw the picture.
            return;
        }
        // first transfer current styles and stuff to newly shown one.
        this.overlayCanvas.style.transform = this.activeOverlayElement.style.transform;
        this.overlayCanvas.style.opacity = this.activeOverlayElement.style.opacity;
        this.overlayCanvas.style.left = this.activeOverlayElement.style.left;
        this.overlayCanvas.style.right = this.activeOverlayElement.style.right;
        this.overlayCanvas.style.display = this.activeOverlayElement.style.display;
        this.overlayPicture.src = '';
        // change reference to element itself
        this.activeOverlayElement = this.overlayCanvas;

        document.getElementById('PictureOverlay_ModificationsBase')
                    .style.display = 'block';

        this.overlayCanvas.width = data.width;
        this.overlayCanvas.height = data.height;

        ctx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);

        ctx.putImageData(data, 0, 0);
    }

    public async initializeUIElements() {
        const hashstr = window.location.hash.substr(1).split(',');
        if (hashstr.length >= 3) {
            // Configuration was passed by url, copy values to inputs
            this.urlInput.value = this.configuration.imgUrl;
            this.xOffsetInput.value = this.configuration.xOffset.toString(10);
            this.yOffsetInput.value = this.configuration.yOffset.toString(10);
            this.trasparencyInput.value = this.configuration.transparency.toString(
                10,
            );
        }

        await this.updateOverlayImage();
        this.activeOverlayElement.style.opacity = (
            parseInt(this.trasparencyInput.value, 10) / 100
        ).toString(10);

        this.updateOverlayPictureScale();
        this.updateDisplay();
        this.updateOverlayPicturePositionAfterDrag();
    }

    private initializeEventListeners() {
        window.addEventListener('hashchange', () => {
            // If url is not set, update current coordinates to follow middle of screen
            if (!this.urlInput.value) {
                this.updateCoordInputFromUrl();
            }

            const hashstr = window.location.hash.substr(1).split(',');
            if (hashstr.length <= 2) return;
            // "shared" url, initialize fields from provided info
            this.updateOverlayPicturePositionFromUrl();
            this.updateOverlayPictureScale();
            this.updateDisplay();
        });

        const gameWindow = document.getElementById('gameWindow');

        let isMoving = false;

        gameWindow.addEventListener('mousemove', (e) => {
            if (e.buttons !== 1) {
                return;
            }
            if (gameWindow.style.cursor !== 'move') {
                return;
            }
            isMoving = true;
            this.activeOverlayElement.style.display = 'none';
        });

        gameWindow.addEventListener('mouseup', (e) => {
            if (!isMoving) {
                return;
            }
            isMoving = false;
            // if no picture provided, set coordinates to center of the screen
            if (!this.urlInput.value) {
                this.updateCoordInputFromUrl();
            } else {
                this.updateOverlayPicturePositionAfterDrag();
                this.updateDisplay();
            }
        });

        let timeoutAfterScroll: number = -1;
        gameWindow.addEventListener('wheel', () => {
            if (!this.urlInput.value) {
                this.updateCoordInputFromUrl();
            }

            this.activeOverlayElement.style.display = 'none';

            if (timeoutAfterScroll > 0) {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
            }

            timeoutAfterScroll = setTimeout(() => {
                clearTimeout(timeoutAfterScroll);
                timeoutAfterScroll = -1;
                this.resetToGrid();
            },                              1000) as any;
        });
    }

    private resetToGrid() {
        if (!this.displayInput.checked) {
            return;
        }

        if (!this.urlInput.value) {
            return;
        }

        urlHelper.stickToGrid();
    }

    private updateOverlayPicturePositionAfterDrag() {
        this.updateOverlayPicturePosition(
            (window as any).lastPosX || urlHelper.xCoord,
            (window as any).lastPosY || urlHelper.yCoord,
        );
    }

    private updateOverlayPicturePositionFromUrl() {
        this.updateOverlayPicturePosition(urlHelper.xCoord, urlHelper.yCoord);
    }

    private updateOverlayPicturePosition(xOffset: number, yOffset: number) {
        console.log(`updating overlay with offset: ${xOffset}:${yOffset}`);
        console.log(
            `current config values: ${this.configuration.xOffset}:${
                this.configuration.yOffset
            }`,
        );
        const zoom = Math.pow(2, urlHelper.zoomLevel / 10);

        this.activeOverlayElement.style.left = `${window.innerWidth / 2 -
            (xOffset - this.configuration.xOffset) * zoom}px`;

        this.activeOverlayElement.style.top = `${window.innerHeight / 2 -
            (yOffset - this.configuration.yOffset) * zoom}px`;
    }

    private updateOverlayPictureScale() {
        const zoom = Math.pow(2, urlHelper.zoomLevel / 10);
        this.activeOverlayElement.style.transform = `scale(${zoom})`;
    }

    private updateDisplay() {
        this.inputBase.style.display = this.displayInput.checked
            ? 'block'
            : 'none';

        this.activeOverlayElement.style.display = this.displayInput.checked
            ? 'block'
            : 'none';
    }

    private updateCoordInputFromUrl() {
        this.configuration.xOffset = urlHelper.xCoord;
        this.configuration.yOffset = urlHelper.yCoord;
        this.xOffsetInput.value = this.configuration.xOffset.toString(10);
        this.yOffsetInput.value = this.configuration.yOffset.toString(10);
    }
}

// Retrieve url hash as soon as possible, so it doesn't get replaces after first drag or scroll.
// Pass it after page loads.
const locationHash = location.hash;

window.addEventListener('load', () => {
    const unused = new UserInput(locationHash);
});
