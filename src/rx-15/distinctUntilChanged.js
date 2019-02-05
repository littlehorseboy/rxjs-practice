/* global Rx */

const source = Rx.Observable.from(['a', 'b', 'c', 'c', 'b'])
  .zip(Rx.Observable.interval(300), x => x);

const newest = source.distinctUntilChanged();

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
