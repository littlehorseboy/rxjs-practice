/* global Rx */

const source = Rx.Observable.timer(1000, 5000);

source.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.error(error);
  },
  complete() {
    console.log('complete');
  },
});
