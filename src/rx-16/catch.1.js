/* global Rx */

const source = Rx.Observable.from(['a', 'b', 'c', 'd', 2, 'e'])
  .zip(Rx.Observable.interval(500), x => x);

const newest = source
  .map(x => x.toUpperCase())
  .catch(error => Rx.Observable.of(`轉換失敗, ${error}`));

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
