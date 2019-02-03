/* global Rx */

// const source = Rx.Observable.create((observer) => {
//   observer.next('Jerry');
//   observer.next('Anna');
//   observer.complete();
// });

const source = Rx.Observable.of('Jerry', 'Anna');

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
