/* global Rx */

const source = Rx.Observable.from(['a', 'b', 'c', 'a', 'b'])
  .zip(Rx.Observable.interval(300), x => x);

const flushes = Rx.Observable.interval(1300);

const newest = source.distinct(null, flushes);

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
