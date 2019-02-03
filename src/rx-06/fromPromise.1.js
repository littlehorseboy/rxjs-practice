/* global Rx */

const source = Rx.Observable.from(new Promise((resolve) => {
  setTimeout(() => {
    // resolve 會送到 next
    resolve('Hello RxJS!');

    // reject 會送到 error
    // reject('Hello RxJS!');
  }, 2000);
}));

source.subscribe({
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
