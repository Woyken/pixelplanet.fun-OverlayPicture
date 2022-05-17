console.log('testDelayImport - before')

await import('./testDelayImport.js').catch(console.error);

console.log('testDelayImport')