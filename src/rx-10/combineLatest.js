/* global Rx */

// ----0----1----2|
// --0--1--2--3--4--5|
// ----01--23-4--(56)--7|

const source = Rx.Observable.interval(500).take(3);
const source2 = Rx.Observable.interval(300).take(6);

const newest = source.combineLatest(source2, (x, y) => x + y);

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
