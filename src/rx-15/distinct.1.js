/* global Rx */

const source = Rx.Observable.from(['a', 'b', 'c', 'a', 'b'])
  .zip(Rx.Observable.interval(2000), x => x);

const newest = source.distinct();

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
