/* global Rx */

const source = Rx.Observable.interval(1000);

const newest = source.take(3);

newest.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log('complete');
  },
});
