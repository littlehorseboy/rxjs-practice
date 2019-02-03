/* global Rx */

const source = Rx.Observable.interval(1000).take(6);

const newest = source.last();

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
