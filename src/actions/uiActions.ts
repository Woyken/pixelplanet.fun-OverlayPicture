export function selectColor(selectR: number, selectG: number, selectB: number): void {
    let paletteBox = document.getElementById('palettebox');
    if (!paletteBox) document.getElementById('palselbutton')?.click();
    paletteBox = document.getElementById('palettebox');
    if (!paletteBox) return;
    const children = paletteBox.children;
    for (let i = 0; i < children.length; i++) {
        const element = children[i]!;
        const colorRgbStr = element.getAttribute('color');
        if (!colorRgbStr) return;
        const regex = /rgb\((\d+), ?(\d+), ?(\d+)\)/;
        const matched = regex.exec(colorRgbStr);
        if (!matched) return;
        const r = parseInt(matched[1]!);
        const g = parseInt(matched[2]!);
        const b = parseInt(matched[3]!);
        if (selectR === r && selectG === g && selectB === b) {
            (element as HTMLSpanElement)?.click();
            return;
        }
    }
}
