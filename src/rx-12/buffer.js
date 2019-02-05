/* global Rx */

const source = Rx.Observable.interval(300);
const source2 = Rx.Observable.interval(1000);
const newest = source.buffer(source2);

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
