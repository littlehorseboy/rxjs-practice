/* global Rx */

const source = Rx.Observable.from('hello');
const source2 = Rx.Observable.interval(200);

const newest = source.zip(source2, x => x);

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
