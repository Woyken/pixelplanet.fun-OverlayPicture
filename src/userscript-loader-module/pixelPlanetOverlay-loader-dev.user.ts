// ==UserScript==
// @name         ${pkg.displayName}
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://woyken.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay-loader.user.js
// ==/UserScript==

{
    // This module is only wrapper for loading the actual module.
    // This makes it update more in real time rather than allowing it to update itself via usual auto-updates.
    const e2 = document.createElement('script');
    e2.innerHTML = `
        var global = window;
    `;
    document.body.appendChild(e2);
    const e1 = document.createElement('script');
    e1.innerHTML = `
        // import RefreshRuntime from "http://localhost:3000/@react-refresh"
        import.meta.hot = undefined;
        // RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    `;
    e1.type = 'module';
    document.head.appendChild(e1);

    const e = document.createElement('script');
    e.src = 'https://localhost:3000/src/userscript-loader-module/pixelPlanetOverlay.user.ts';
    e.type = 'module';
    document.body.appendChild(e);
}
export {};
