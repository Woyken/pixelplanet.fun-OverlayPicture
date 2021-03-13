import { wrap } from 'comlink';
import PictureConverterWorker from 'web-worker:./workers/pictureConverterWorker.ts';
import { PictureConverter } from './workers/pictureConverter';

const worker = new PictureConverterWorker();

export default wrap<PictureConverter>(worker);
