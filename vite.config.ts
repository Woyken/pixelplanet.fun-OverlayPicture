/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';

import { visualizer } from 'rollup-plugin-visualizer';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';
import { UserConfig } from 'vite';
import Checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';


function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir);
}

const mode = process.env.APP_ENV;
const isDev = mode === 'development';

// https://vitejs.dev/config/
const config: () => UserConfig = () => ({
    mode,
    build: {
        lib: { entry: 'src/index.tsx', formats: ['iife'], name: 'userscript-bbuild-with-vite.js' },
        sourcemap: isDev ? 'inline' : false,
        minify: isDev ? false : undefined,
        rollupOptions: {
            plugins: [webWorkerLoader(), isDev ? visualizer({ filename: 'moduleVisualizerOutput.html' }) : undefined],
            // output: {
            //     manualChunks: (id, api): string | undefined => {
            //         if (id.includes('node_modules')) {
            //             if (id.includes('@mui')) return 'vendor_mui';
            //             if (id.includes('pako')) return 'vendor_pako';
            //             if (id.includes('i18next')) return 'vendor_i18next';
            //             return 'vendor'; // all other package goes here
            //         }
            //         return undefined;
            //     },
            // },
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
            overlay: true,
            // eslint: {
            //     files: 'src',
            //     extensions: ['.ts', '.tsx'],
            // },
        }),
    ],
});

export default config;
