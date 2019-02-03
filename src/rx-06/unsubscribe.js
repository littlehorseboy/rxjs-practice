/* global Rx */

const source = Rx.Observable.timer(1000, 2000);

const subscription = source.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.error(error);
  },
  complete() {
    console.log('complete');
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 6000);
