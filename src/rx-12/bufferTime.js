/* global Rx */

const source = Rx.Observable.interval(300);
const newest = source.bufferTime(1000);

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
