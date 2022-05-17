console.log('testDelayImport2 - before')

import('./test1.js')
    .then(console.warn)
    .catch(console.error);

console.log('testDelayImport2')

export function test() {
    console.log('testDelayImport2 - test')
}