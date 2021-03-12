import { wrap } from 'comlink';
import WebWorker from 'web-worker:./workers/testWorker.ts';

(async (): Promise<void> => {
    const worker = new WebWorker();

    const obj = wrap(worker) as any;
    alert(`Counter: ${await obj.counter}`);
    await obj.inc();
    alert(`Counter: ${await obj.counter}`);
})().catch(console.log);

// TODO.
// Only added this as a concept how to use workers in userScript.
// Should rewrite image processing on workers for smoother experience
