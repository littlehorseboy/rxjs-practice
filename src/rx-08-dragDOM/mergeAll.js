/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');
const source = click.map(() => Rx.Observable.interval(1000).take(3));
const newest = source.mergeAll();

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
