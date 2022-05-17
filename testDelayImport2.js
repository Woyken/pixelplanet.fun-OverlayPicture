console.log('testDelayImport2 - before')

await import('./test1.js').catch(console.error);

console.log('testDelayImport2')