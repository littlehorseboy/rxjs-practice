/* global Rx */

const source = Rx.Observable.from(['a', 'b', 'c', 'd', 2, 'e'])
  .zip(Rx.Observable.interval(500), x => x);

const newest = source
  .map(x => x.toUpperCase())
  .catch(() => Rx.Observable.empty());

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
