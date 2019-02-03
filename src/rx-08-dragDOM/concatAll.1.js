/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');
const source = click.map(() => Rx.Observable.of(1, 2, 3));
const newest = source.concatAll();

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
