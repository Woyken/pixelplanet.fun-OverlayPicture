import logger from '../handlers/logger';

class Viewport {
    private currentActiveViewport: HTMLCanvasElement | undefined;

    public onMouseMove: ((e: MouseEvent, canvas: HTMLCanvasElement) => void) | undefined;
    public onMouseUp: ((e: MouseEvent, canvas: HTMLCanvasElement) => void) | undefined;
    public onWheel: ((e: WheelEvent, canvas: HTMLCanvasElement) => void) | undefined;

    public constructor() {
        logger.log('Trying to find viewport...');
        // Initial find of the viewport
        const canvases = document.getElementsByTagName('canvas');
        for (let i = 0; i < canvases.length; i++) {
            const canvas = canvases[i];
            if (!this.isViewportElement(canvas)) continue;

            if (canvas !== this.currentActiveViewport) {
                logger.log('Viewport found.');
                this.resetViewport(canvas);
            }
        }

        if (!this.currentActiveViewport) {
            logger.log('Viewport not found...');
        }

        // Subscribe to DOM changes on body to react if viewport gets recreated.
        const mutationObserver = new MutationObserver(this.onMutationEvent);
        mutationObserver.observe(document.body, { childList: true });
        // Not bothering with disconnecting observer, since we need to watch this all the time.
    }

    private onMutationEvent = (mutations: MutationRecord[]): void => {
        mutations.forEach((mutation) => {
            if (mutation.type !== 'childList') {
                // We are only looking for canvas changes.
                return;
            }
            mutation.removedNodes.forEach((node) => {
                if (node === this.currentActiveViewport) {
                    logger.log('Active viewport was removed');
                    // our viewport was just removed, clean it up.
                    this.removeHooks();
                    this.currentActiveViewport = undefined;
                }
            });
            mutation.addedNodes.forEach((node) => {
                if (node.nodeName.toUpperCase() !== 'CANVAS') {
                    // Don't care about everything except if it's canvas element.
                    return;
                }
                const canvasNode = node as HTMLCanvasElement;
                if (this.isViewportElement(canvasNode)) {
                    logger.log('Active viewport was added');
                    this.resetViewport(canvasNode);
                }
            });
        });
    };

    private isViewportElement(element: HTMLElement): boolean {
        if (element.tagName.toUpperCase() !== 'CANVAS') return false;
        if (element.className.includes('PictureOverlay')) return false;
        return true;
    }

    private resetViewport(canvas: HTMLCanvasElement | undefined): void {
        this.removeHooks();
        this.currentActiveViewport = canvas;
        this.initHooks();
    }

    private initHooks(): void {
        this.currentActiveViewport?.addEventListener('mousemove', this.onMouseMoveHook, { passive: true });
        this.currentActiveViewport?.addEventListener('mouseup', this.onMouseUpHook, { passive: true });
        this.currentActiveViewport?.addEventListener('wheel', this.onWheelHook, { passive: true });
    }

    private removeHooks(): void {
        this.currentActiveViewport?.removeEventListener('mousemove', this.onMouseMoveHook);
        this.currentActiveViewport?.removeEventListener('mouseup', this.onMouseUpHook);
        this.currentActiveViewport?.removeEventListener('wheel', this.onWheelHook);
    }

    private onMouseMoveHook = (e: MouseEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        this.onMouseMove?.(e, this.currentActiveViewport);
    };

    private onMouseUpHook = (e: MouseEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        this.onMouseUp?.(e, this.currentActiveViewport);
    };

    private onWheelHook = (e: WheelEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        this.onWheel?.(e, this.currentActiveViewport);
    };
}

const viewport = new Viewport();
export default viewport;
