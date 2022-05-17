
// ==UserScript==
// @name         pixelplanet.fun picture overlay
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture
// @version      1.1.0
// @description  Add your picture as overlay to pixelplanet.fun
// @author       Woyken
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://woyken.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay-loader.user.js
// ==/UserScript==
/**/

{
  const e = document.createElement("script");
  if (window.location.host.startsWith("localhost"))
    e.src = new URL("src/userscript-loader-module/pixelPlanetOverlay.user.ts", window.location.href).href;
  else
    e.src = "https://woyken.github.io/pixelplanet.fun-OverlayPicture/assets/pixelPlanetOverlay.user.js";
  e.type = "module";
  document.body.appendChild(e);
}
