import { expose } from 'comlink';

const obj = {
    counter: 0,
    inc(): void {
        this.counter++;
    },
};

expose(obj);
