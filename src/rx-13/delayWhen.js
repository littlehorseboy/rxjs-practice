/* global Rx */

const source = Rx.Observable.interval(300).take(5);

const newest = source
  .delayWhen(
    x => Rx.Observable.empty().delay(100 * x * x),
  );

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
