/* global Rx */

const source = Rx.Observable.fromEvent(document.body, 'click');

source.subscribe({
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
