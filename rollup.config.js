import { terser } from "rollup-plugin-terser";
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import scss from 'rollup-plugin-scss'
import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import replace from 'rollup-plugin-replace';

import pkg from "./package.json";

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
`

export default {
  input: "src/index.tsx",
  output:
    {
      file: 'dist/rollup.react.user.js',
      format: 'iife',
      banner: banner
    },
  plugins: [
    postcss({
      preprocessor: (content, id) => new Promise((resolve, reject) => {
        const result = scss.renderSync({ file: id })
        resolve({ code: result.css.toString() })
      }),
      plugins: [
        autoprefixer
      ],
      sourceMap: false,
      extract: false,
      extensions: ['.scss','.css']
    }),
    replace({
      // Need to replace this, since 'process' is undefined when running as userscript.
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    external(),
    resolve(),
    typescript(),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/utf8/utf8.js": [
          "decode",
          "encode",
        ],
        "node_modules/pako/index.js": [
          "Inflate",
          "deflate",
        ],
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement",
        ],
        "node_modules/react/index.js": [
          "isValidElement",
          "Children",
          "cloneElement",
        ],
        "node_modules/react-dom/index.js": [
          "render",
        ],
        "node_modules/react-is/index.js": [
          "ForwardRef",
        ],
        "node_modules/prop-types/index.js": [
          "elementType",
        ],
      }
    }),
    terser({
      output: {
        comments: false,
        preamble: banner,
      }
    }),
  ]
};
