import { createNanoEvents } from 'nanoevents';

import logger from '../handlers/logger';

interface Events {
    touchStartPassive: (event: TouchEvent, canvas: HTMLCanvasElement) => void;
    mouseMovePassive: (e: MouseEvent, canvas: HTMLCanvasElement) => void;
    mouseUpPassive: (e: MouseEvent, canvas: HTMLCanvasElement) => void;
    mouseDownPassive: (e: MouseEvent, canvas: HTMLCanvasElement) => void;
    wheelPassive: (e: WheelEvent, canvas: HTMLCanvasElement) => void;
    mouseDownCaptured: (e: MouseEvent, canvas: HTMLCanvasElement) => void;
}

export const viewPortEvents = createNanoEvents<Events>();

class Viewport {
    public currentActiveViewport: HTMLCanvasElement | undefined;

    public constructor() {
        logger.log('Trying to find viewport...');
        // Initial find of the viewport
        const canvases = document.getElementsByTagName('canvas');
        const viewport = Array.from(canvases).find((c) => Viewport.isViewportElement(c) && this.currentActiveViewport !== c);
        if (viewport) {
            logger.log('Viewport found.');
            this.resetViewport(viewport);
        }

        if (!this.currentActiveViewport) {
            logger.log('Viewport not found...');
        }

        // Subscribe to DOM changes on body to react if viewport gets recreated.
        const mutationObserver = new MutationObserver(this.onMutationEvent);
        mutationObserver.observe(document.body, { childList: true });
        // Not bothering with disconnecting observer, since we need to watch this all the time.

        document.addEventListener('mousedown', this.onMouseDownDocumentCaptureHook, true);
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
                if (Viewport.isViewportElement(canvasNode)) {
                    logger.log('Active viewport was added');
                    this.resetViewport(canvasNode);
                }
            });
        });
    };

    private static isViewportElement(element: HTMLElement): boolean {
        if (element.tagName.toUpperCase() !== 'CANVAS') return false;
        if (!element.className.includes('viewport')) return false;
        return true;
    }

    private resetViewport(canvas: HTMLCanvasElement | undefined): void {
        this.removeHooks();
        this.currentActiveViewport = canvas;
        this.initHooks();
    }

    private initHooks(): void {
        if (!this.currentActiveViewport) return;

        this.currentActiveViewport.addEventListener('touchstart', this.onTouchStartHookPassive, { passive: true });
        this.currentActiveViewport.addEventListener('mousemove', this.onMouseMoveHookPassive, { passive: true });
        this.currentActiveViewport.addEventListener('mousedown', this.onMouseDownHookPassive, { passive: true });
        this.currentActiveViewport.addEventListener('mouseup', this.onMouseUpHookPassive, { passive: true });
        this.currentActiveViewport.addEventListener('wheel', this.onWheelHookPassive, { passive: true });

        if (this.currentActiveViewport.onmousedown) {
            const originalMouseDown = this.currentActiveViewport.onmousedown;
            this.currentActiveViewport.onmousedown = null;
            this.currentActiveViewport.addEventListener('mousedown', originalMouseDown);
        }
    }

    private removeHooks(): void {
        this.currentActiveViewport?.removeEventListener('touchstart', this.onTouchStartHookPassive);
        this.currentActiveViewport?.removeEventListener('mousemove', this.onMouseMoveHookPassive);
        this.currentActiveViewport?.removeEventListener('mousedown', this.onMouseDownHookPassive);
        this.currentActiveViewport?.removeEventListener('mouseup', this.onMouseUpHookPassive);
        this.currentActiveViewport?.removeEventListener('wheel', this.onWheelHookPassive);
    }

    private onTouchStartHookPassive = (e: TouchEvent) => {
        if (!this.currentActiveViewport) return;
        viewPortEvents.emit('touchStartPassive', e, this.currentActiveViewport);
    };

    private onMouseMoveHookPassive = (e: MouseEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        viewPortEvents.emit('mouseMovePassive', e, this.currentActiveViewport);
    };

    private onMouseDownHookPassive = (e: MouseEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        viewPortEvents.emit('mouseDownPassive', e, this.currentActiveViewport);
    };

    private onMouseUpHookPassive = (e: MouseEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        viewPortEvents.emit('mouseUpPassive', e, this.currentActiveViewport);
    };

    private onWheelHookPassive = (e: WheelEvent): void => {
        if (!this.currentActiveViewport) {
            return;
        }
        viewPortEvents.emit('wheelPassive', e, this.currentActiveViewport);
    };

    private onMouseDownDocumentCaptureHook = (e: MouseEvent): void => {
        if (e.target !== this.currentActiveViewport) return;
        viewPortEvents.emit('mouseDownCaptured', e, this.currentActiveViewport);
    };
}

const viewport = new Viewport();
export default viewport;
