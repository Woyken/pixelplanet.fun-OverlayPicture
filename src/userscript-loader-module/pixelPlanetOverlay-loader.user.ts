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

import './pixelPlanetOverlay.user';

// {
//     // This module is only wrapper for loading the actual module.
//     // This makes it update more in real time rather than allowing it to update itself via usual auto-updates.
//     const e = document.createElement('script');
//     if (window.location.host.startsWith('localhost')) e.src = new URL('src/userscript-loader-module/pixelPlanetOverlay.user.ts', window.location.href).href;
//     else e.src = 'https://woyken.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay.user.js';
//     e.type = 'module';
//     document.body.appendChild(e);
// }
export {};
