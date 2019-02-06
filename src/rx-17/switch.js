/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');

const source = click.map(() => Rx.Observable.interval(1000));

const newest = source.switch();

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
