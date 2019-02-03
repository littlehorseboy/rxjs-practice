/* global Rx */

const source = Rx.Observable.interval(500).take(3);
const source2 = Rx.Observable.interval(300).take(6);

const newest = source.merge(source2);

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
