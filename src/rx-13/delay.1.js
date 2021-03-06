/* global Rx */

const source = Rx.Observable.interval(300).take(5);

const newest = source.delay(500);

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
