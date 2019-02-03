/* global Rx */

// ----0----1----2|
// --0--1--2--3--4--5|
// ----0----2----4|

const source = Rx.Observable.interval(500).take(3);
const source2 = Rx.Observable.interval(300).take(6);

const newest = source.zip(source2, (x, y) => x + y);

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
