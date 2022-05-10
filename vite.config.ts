/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import { resolve } from 'path';

import { visualizer } from 'rollup-plugin-visualizer';
import { Plugin, ResolvedConfig, UserConfig } from 'vite';
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
const doNotClean = !!process.env.APP_DONT_CLEAN;
const isLoaderBuild = process.env.APP_MODULE === 'loader';
const isGhPagesHtmlBuild = process.env.APP_MODULE === 'html';
const mode = process.env.APP_ENV;
const isDev = mode === 'development';

let buildLib: UserConfig['build']['lib'];
if (isGhPagesHtmlBuild) buildLib = undefined;
else if (isLoaderBuild)
    buildLib = {
        fileName: () => 'pixelPlanetOverlay-loader.user.js',
        entry: 'src/userscript-loader-module/pixelPlanetOverlay-loader.ts',
        formats: ['iife'],
        name: 'userscript-loader-build-with-vite.js',
    };
else {
    buildLib = { fileName: () => 'pixelPlanetOverlay.user.js', entry: 'src/index.tsx', formats: ['iife'], name: 'userscript-build-with-vite.js' };
}

// https://vitejs.dev/config/
const config: () => UserConfig = () => ({
    mode,
    build: {
        emptyOutDir: !doNotClean,
        lib: buildLib,
        sourcemap: isDev ? 'inline' : false,
        minify: isDev ? false : undefined,
        rollupOptions: {
            output: {
                extend: true,
            },
            plugins: [isDev ? visualizer({ filename: 'moduleVisualizerOutput.html' }) : undefined],
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
        vitePluginWrapUserScriptOnWindow(),
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

function vitePluginWrapUserScriptOnWindow(): Plugin {
    let viteConfig: ResolvedConfig;
    const includeRegexp = /\.js$/i;
    const excludeRegexp = /vendor/;

    const header = (() => {
        (function iife() {
            // Hack to get around the sandbox restrictions in Tampermonkey. Redux devtools don't work.
            // Inject code directly to window
            // eslint-disable-next-line no-eval
            if (this !== window) {
                window.eval(`(${iife.toString()})();`);
                return;
            }
        })();
    })
        .toString()
        .slice(7, -9);
    const footer = '\n})();';

    return {
        name: 'vitePluginWrapUserScriptOnWindow',
        configResolved(resolvedConfig: ResolvedConfig) {
            viteConfig = resolvedConfig;
        },
        async writeBundle(options, bundle) {
            Object.entries(bundle).forEach(([file, source]) => {
                // Get the full path of file
                const { root } = viteConfig;
                const outDir: string = viteConfig.build.outDir || 'dist';
                const filePath = resolve(root, outDir, file);

                // Only handle matching files
                if (includeRegexp.test(file) && !excludeRegexp.test(file)) {
                    try {
                        // Read the content from target file
                        let data: string = fs.readFileSync(filePath, {
                            encoding: 'utf8',
                        });
                        data = `${header}\n${data}\n${footer}`;

                        // Save
                        fs.writeFileSync(filePath, data);
                    } catch (e) {
                        console.error(e);
                    }
                }
            });
        },
    };
}

export default config;
