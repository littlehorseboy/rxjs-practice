/* global Rx */

const source = Rx.Observable.from([
  { value: 'a' },
  { value: 'b' },
  { value: 'c' },
  { value: 'a' },
  { value: 'c' },
])
  .zip(Rx.Observable.interval(2000), x => x);

const newest = source.distinct(x => x.value);

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
