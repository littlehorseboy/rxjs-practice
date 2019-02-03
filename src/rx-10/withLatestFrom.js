/* global Rx */

// ----h----e----l----l----o|
// --0--1--0--0--0--1|
// ----h----e----l----L----O

const main = Rx.Observable.from('hello').zip(Rx.Observable.interval(500), x => x);

const some = Rx.Observable.from([0, 1, 0, 0, 0, 1]).zip(Rx.Observable.interval(300), x => x);

const newest = main.withLatestFrom(some, (x, y) => (y === 1 ? x.toUpperCase() : x));

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
