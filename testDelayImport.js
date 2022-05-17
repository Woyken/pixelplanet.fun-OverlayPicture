console.log('testDelayImport - before')

import('./testDelayImport2.js')
    .then((module) => {
        module.test();
    })
    .catch(console.error);

console.log('testDelayImport')