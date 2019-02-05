/* global Rx */

const source = Rx.Observable.interval(300).take(5);

const newest = source.debounceTime(1000);

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
