/* global Rx */

const source = Rx.Observable.from('hello')
  .zip(Rx.Observable.interval(600), x => `${x}`);

const newest = source.scan((origin, next) => `${origin}${next}`, '');

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
