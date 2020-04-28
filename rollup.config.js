import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import scss from 'rollup-plugin-scss';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

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

const banner = `
// ==UserScript==
// @name         ${pkg.displayName}
// @namespace    https://github.com/Woyken/pixelplanet.fun-OverlayPicture
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://gist.github.com/Woyken/034fd82d71a9deb506283f55fb473a07/raw/pixelplanet-PictureOverlay.user.js
// ==/UserScript==
`;

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/rollup.react.user.js',
        format: 'iife',
        banner: banner,
    },
    plugins: [
        postcss({
            preprocessor: (content, id) =>
                new Promise((resolve, reject) => {
                    const result = scss.renderSync({ file: id });
                    resolve({ code: result.css.toString() });
                }),
            plugins: [autoprefixer],
            sourceMap: false,
            extract: false,
            extensions: ['.scss', '.css'],
        }),
        replace({
            // Need to replace this, since 'process' is undefined when running as userscript.
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        external(),
        resolve(),
        typescript(),
        commonjs({
            include: ['node_modules/**'],
            namedExports: getNamedExports(['react', 'react-dom', 'react-is', 'utf8', 'pako', 'prop-types']),
        }),
        terser({
            output: {
                comments: false,
                preamble: banner,
            },
        }),
    ],
};
