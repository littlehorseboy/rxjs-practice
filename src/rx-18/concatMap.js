/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');

// const source = click
//   .map(() => Rx.Observable.interval(1000).take(3))
//   .concatAll(2);

const source = click
  .concatMap(() => Rx.Observable.interval(1000).take(3));

source.subscribe({
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
