console.log('testDelayImport - before')

import('./testDelayImport.js').then(console.warn).catch(console.error);

console.log('testDelayImport')