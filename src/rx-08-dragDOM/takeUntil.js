/* global Rx */

const source = Rx.Observable.interval(1000);
const click = Rx.Observable.fromEvent(document.body, 'click');
const newest = source.takeUntil(click);

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
