
// ==UserScript==
// @name         pixelplanet.fun picture overlay /testPageSplit
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture/testPageSplit
// @version      1.1.2
// @description  Add your picture as overlay to pixelplanet.fun
// @author       Woyken
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://woyken.github.io/pixelplanet.fun-OverlayPicture/testPageSplit/pixelPlanetOverlay-loader.user.js
// ==/UserScript==
/**/

{
  const e = document.createElement("script");
  if (window.location.host.startsWith("localhost"))
    e.src = new URL("src/userscript-loader-module/pixelPlanetOverlay.user.ts", window.location.href).href;
  else
    e.src = "https://woyken.github.io/pixelplanet.fun-OverlayPicture/testPageSplit/pixelPlanetOverlay.user.js";
  e.type = "module";
  document.body.appendChild(e);
}
