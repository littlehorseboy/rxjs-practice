/* global Rx */

const source = Rx.Observable.interval(1000).take(3);
const source2 = Rx.Observable.of(3);
const source3 = Rx.Observable.of(4, 5, 6);

const newest = Rx.Observable.concat(source, source2, source3);

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
