class UrlHelper {
    public stickToGrid(): void {
        const hashstr = window.location.hash.substr(1).split(',');
        if (hashstr[3] === '0') {
            // If zoom is zero, don't try replacing href, it will freak out.
            return;
        }
        // Set 1 zoom level more, will update canvas.
        location.href = `${window.location.href.split('#')[0]}#${hashstr[0]},${hashstr[1]},${
            hashstr[2]
        },${parseInt(hashstr[3], 10) + 1}`;

        // Set zoom level back to what it was.
        location.href = `${window.location.href.split('#')[0]}#${hashstr[0]},${hashstr[1]},${
            hashstr[2]
        },${hashstr[3]}`;
    }

    public get xCoord(): number {
        const hashstr = window.location.hash.substr(1).split(',');
        return parseInt(hashstr[1], 10);
    }

    public get yCoord(): number {
        const hashstr = window.location.hash.substr(1).split(',');
        return parseInt(hashstr[2], 10);
    }

    public get zoomLevel(): number {
        const hashstr = window.location.hash.substr(1).split(',');
        return parseInt(hashstr[3], 10);
    }

    public copyToClipboard(text: string): void {
        const dummy = document.createElement('input');
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    }
}

export default new UrlHelper();
