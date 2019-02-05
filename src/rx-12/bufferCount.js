/* global Rx */

const source = Rx.Observable.interval(300);
const newest = source.bufferCount(3);

newest.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(`Error: ${err}`);
  },
  complete() {
    console.log('complete');
  },
});
