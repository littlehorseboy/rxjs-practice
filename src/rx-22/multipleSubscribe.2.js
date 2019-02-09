/* global Rx, _ */

const source = Rx.Observable.interval(_.random(1, 3) * 1000).take(_.random(2, 5));

const observerA = {
  next(value) {
    console.log(`A next: ${value}`);
  },
  error(error) {
    console.log(`A next: ${error}`);
  },
  complete() {
    console.log('A complete!');
  },
};

const observerB = {
  next(value) {
    console.log(`B next: ${value}`);
  },
  error(error) {
    console.log(`B next: ${error}`);
  },
  complete() {
    console.log('B complete!');
  },
};

source.subscribe(observerA);

setTimeout(() => {
  source.subscribe(observerB);
}, 1000);
