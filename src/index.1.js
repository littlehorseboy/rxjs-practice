/* global Rx */

const source = Rx.Observable.interval(1000).take(3);

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

const subject = new Rx.Subject();

subject.subscribe(observerA);

source.subscribe(subject);

setTimeout(() => {
  subject.subscribe(observerB);
}, 1000);
// }, 5000);
