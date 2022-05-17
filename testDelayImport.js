console.log('testDelayImport - before')

import('./testDelayImport.js')
    .then((module) => {
        module.test();
    })
    .catch(console.error);

console.log('testDelayImport')