import autoBind from "react-autobind";

const viewPortCheckingInterval = 100;

class Viewport {
    private intervalId: number | undefined;
    private currentActiveViewport: HTMLCanvasElement | undefined;

    public onMouseMove: ((e: MouseEvent, canvas: HTMLCanvasElement) => void) | undefined;
    public onMouseUp: ((e: MouseEvent, canvas: HTMLCanvasElement) => void) | undefined;
    public onWheel: ((e: WheelEvent, canvas: HTMLCanvasElement) => void) | undefined;

    public constructor() {
        this.intervalId = window.setInterval(() => {
            const canvases = document.getElementsByTagName('canvas');
            for (let i = 0; i < canvases.length; i++) {
                const canvas = canvases[i];
                if (canvas.className.indexOf('PictureOverlay') > -1) {
                    continue;
                }
                if (canvas !== this.currentActiveViewport) {
                    this.resetViewport(canvas);
                }
            }
        }, viewPortCheckingInterval);
        autoBind(this);
    }

    private resetViewport(canvas: HTMLCanvasElement | undefined): void {
        this.removeHooks();
        this.currentActiveViewport = canvas;
        this.initHooks();
    }

    private initHooks(): void {
        this.currentActiveViewport?.addEventListener('mousemove', this.onMouseMoveHook);
        this.currentActiveViewport?.addEventListener('mouseup', this.onMouseUpHook);
        this.currentActiveViewport?.addEventListener('wheel', this.onWheelHook);

    }

    private removeHooks(): void {
        this.currentActiveViewport?.removeEventListener('mousemove', this.onMouseMoveHook);
        this.currentActiveViewport?.removeEventListener('mouseup', this.onMouseUpHook);
        this.currentActiveViewport?.removeEventListener('wheel', this.onWheelHook);
    }

    private onMouseMoveHook(e: MouseEvent): void {
        if (!this.currentActiveViewport) {
            return;
        }
        this.onMouseMove?.(e, this.currentActiveViewport);
    }

    private onMouseUpHook(e: MouseEvent): void {
        if (!this.currentActiveViewport) {
            return;
        }
        this.onMouseUp?.(e, this.currentActiveViewport);
    }

    private onWheelHook(e: WheelEvent): void {
        if (!this.currentActiveViewport) {
            return;
        }
        this.onWheel?.(e, this.currentActiveViewport);
    }
}

const viewport = new Viewport();
export default viewport;
