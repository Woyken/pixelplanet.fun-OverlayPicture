/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import { visualizer } from 'rollup-plugin-visualizer';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import { UserConfig } from 'vite';
import banner from 'vite-plugin-banner';
import Checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

import pkg from './package.json';

const loaderModuleBanner = `
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
/**/
`;

const moduleBanner = `
// ==UserScript==
// @name         ${pkg.displayName}
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// @include      https://pixelplanet.fun/*
// ==/UserScript==
// This script is supposed to be loaded by https://woyken.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay-loader.user.js module.
/**/
`;

function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir);
}
const isLoaderBuild = process.env.APP_MODULE === 'loader';
const mode = process.env.APP_ENV;
const isDev = mode === 'development';

// https://vitejs.dev/config/
const config: () => UserConfig = () => ({
    mode,
    build: {
        emptyOutDir: false,
        lib: isLoaderBuild
            ? {
                  fileName: () => 'pixelPlanetOverlay-loader.user.js',
                  entry: 'src/userscript-loader-module/pixelPlanetOverlay-loader.ts',
                  formats: ['iife'],
                  name: 'userscript-loader-build-with-vite.js',
              }
            : { fileName: () => 'pixelPlanetOverlay.user.js', entry: 'src/index.tsx', formats: ['iife'], name: 'userscript-build-with-vite.js' },
        sourcemap: isDev ? 'inline' : false,
        minify: isDev ? false : undefined,
        rollupOptions: {
            output: {
                extend: true,
            },
            plugins: [webWorkerLoader(), isDev ? visualizer({ filename: 'moduleVisualizerOutput.html' }) : undefined],
        },
    },
    resolve: {
        alias: [
            {
                find: /@\//,
                replacement: `${pathResolve('src')}/`,
            },
        ],
    },
    plugins: [
        banner(isLoaderBuild ? loaderModuleBanner : moduleBanner),
        tsconfigPaths(),
        react({
            jsxRuntime: isDev ? 'classic' : undefined,
            babel: {
                plugins: [
                    // ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
                    [
                        '@emotion',
                        {
                            importMap: {
                                '@mui/material': {
                                    styled: {
                                        canonicalImport: ['@emotion/styled', 'default'],
                                        styledBaseImport: ['@mui/material', 'styled'],
                                    },
                                },
                                '@mui/material/styles': {
                                    styled: {
                                        canonicalImport: ['@emotion/styled', 'default'],
                                        styledBaseImport: ['@mui/material/styles', 'styled'],
                                    },
                                },
                            },
                        },
                    ],
                ],
            },
        }),
        Checker({
            typescript: true,
            overlay: false,
        }),
    ],
});

export default config;
