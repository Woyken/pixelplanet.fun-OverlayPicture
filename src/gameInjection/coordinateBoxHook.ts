import logger from '../handlers/logger';

class CoordBoxHook {
    private mutationObserver?: MutationObserver;
    private watchingElement?: Element;

    public onCoordUpdated: ((x: number, y: number, z: number | null) => void) | undefined;

    constructor() {
        const coordBox = document.getElementsByClassName('coorbox')[0];
        if (!coordBox) {
            logger.logError('TODO. handle missing coordbox?');
            return;
        }
        this.initObserver(coordBox);
    }

    private initObserver(element: Element): void {
        if (!this.mutationObserver) {
            this.mutationObserver = new MutationObserver(this.onMutationEvent);
        }

        this.watchingElement = element;
        this.mutationObserver.observe(element, { characterData: true, subtree: true });
    }

    private onMutationEvent = (mutations: MutationRecord[]): void => {
        mutations.forEach((mutation) => {
            if (mutation.type !== 'characterData') {
                // Looking only for text changes.
                return;
            }
            const node = mutation.target;
            if (node.parentNode === this.watchingElement && node.nodeName.toUpperCase() === '#TEXT') {
                const textNode = node as Text;
                // Likely the coordinates we are looking for!
                const regex = /\((-?\d+), ?(-?\d+)(, ?(-?\d+))?\)/;
                const matched = regex.exec(textNode.data);
                if (!matched) {
                    logger.logError(`Did coordinate pattern change? ${textNode.data} . DISABLING OBSERVER`);
                    this.mutationObserver?.disconnect();
                    return;
                }
                // Result looks like this ['(1, 2, 3)', '1', '2', ', 3', '3']; or 3 and 4 undefined
                const x = parseInt(matched[1], 10);
                const y = parseInt(matched[2], 10);
                const zStr = matched[4] as string | undefined;
                let z: number | null = null;
                if (zStr !== undefined) {
                    z = parseInt(zStr, 10);
                }
                this.onCoordUpdated?.(x, y, z);
            }
        });
    };
}

export const coordBoxHook = new CoordBoxHook();
