import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import html from '@open-wc/rollup-plugin-html';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';

import pkg from './package.json';

import fs from 'fs';
import nodeEval from 'node-eval';

export function getModuleExports(moduleId) {
    const id = require.resolve(moduleId);
    const moduleOut = nodeEval(fs.readFileSync(id).toString(), id);
    let result = [];
    const excludeExports = /^(default|__)/;
    if (moduleOut && typeof moduleOut === 'object') {
        result = Object.keys(moduleOut).filter((name) => !excludeExports.test(name));
    }

    return result;
}

export function getNamedExports(moduleIds) {
    const result = {};
    moduleIds.forEach((id) => {
        result[id] = getModuleExports(id);
    });
    return result;
}

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
`;

const moduleBanner = `
// Sources can be found at https://github.com/Woyken/pixelplanet.fun-OverlayPicture
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// This script is supposed to be loaded by https://woyken.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay-loader.user.js module.
`;

const { PRODUCTION, VERIFY_BUILD } = process.env;

function rollupPluginsBase(isWorkerBuild) {
    return [
        postcss({
            preprocessor: (content, id) =>
                new Promise((resolve, reject) => {
                    const result = scss.renderSync({ file: id });
                    resolve({ code: result.css.toString() });
                }),
            plugins: [autoprefixer],
            sourceMap: true,
            extract: false,
            extensions: ['.scss', '.css'],
        }),
        external(),
        resolve({ preferBuiltins: false }),
        isWorkerBuild ? typescript({ tsconfig: './src/workers/tsconfig.json' }) : typescript(),
        commonjs({
            include: ['node_modules/**'],
            namedExports: getNamedExports(['react', 'react-dom', 'react-is', 'pako', 'prop-types', 'utf8']),
            sourceMap: true,
        }),
        webWorkerLoader(),
    ];
}

function rollupPlugins(banner) {
    return [
        ...rollupPluginsBase(false),
        replace({
            // Need to replace this, since 'process' is undefined when running as userscript.
            'process.env.NODE_ENV': JSON.stringify(PRODUCTION ? 'production' : 'development'),
        }),
        PRODUCTION
            ? terser({
                  output: {
                      comments: false,
                      preamble: banner,
                  },
                  sourcemap: true,
              })
            : null,
    ];
}

const regularBuild = [
    {
        input: 'src/userscript-loader-module/index.ts',
        output: { dir: 'dist', sourcemap: PRODUCTION ? null : 'inline' },
        plugins: [
            typescript(),
            html({
                inputPath: 'src/userscript-loader-module/index.html',
                inject: false,
            }),
        ],
    },
    {
        input: 'src/index.tsx',
        output: {
            file: 'dist/pixelPlanetOverlay.user.js',
            // Self executing function, since this is userscript, not a module.
            format: 'iife',
            // Add banner so it works with userscript engines
            banner: PRODUCTION ? moduleBanner : loaderModuleBanner,
            sourcemap: PRODUCTION ? null : 'inline',
        },
        plugins: rollupPlugins(PRODUCTION ? moduleBanner : loaderModuleBanner),
    },
    {
        input: 'src/userscript-loader-module/pixelPlanetOverlay-loader.ts',
        output: {
            file: 'dist/pixelPlanetOverlay-loader.user.js',
            // Self executing function, since this is userscript, not a module.
            format: 'iife',
            // Add banner so it works with userscript engines
            banner: loaderModuleBanner,
            sourcemap: PRODUCTION ? null : 'inline',
        },
        plugins: rollupPlugins(loaderModuleBanner),
    },
];

const verificationBuild = [
    {
        input: 'src/workers/pictureConverterWorker.ts',
        output: {
            file: 'dist/workerBuild.js',
        },
        plugins: [...rollupPluginsBase(true)],
    },
    {
        input: 'src/index.tsx',
        output: {
            file: 'dist/pixelPlanetOverlay.user.js',
            // Self executing function, since this is userscript, not a module.
            format: 'iife',
        },
        plugins: [...rollupPluginsBase(false)],
    },
];

export default VERIFY_BUILD ? verificationBuild : regularBuild;
