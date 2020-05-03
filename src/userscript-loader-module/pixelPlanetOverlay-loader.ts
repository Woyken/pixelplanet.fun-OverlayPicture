{
    // This module is only wrapper for loading the actual module.
    // This makes it update more in real time rather than allowing it to update itself via usual auto-updates.
    const e = document.createElement('script');
    e.src = 'https://woyken.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay.user.js';
    document.body.appendChild(e);
}
