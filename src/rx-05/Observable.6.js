/* global Rx */

const observable = Rx.Observable
  .create((observer) => {
    observer.next('Jerry');
    observer.next('Anna');
  });

observable.subscribe({
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

// 類似的感覺

function subscribe(observer) {
  observer.next('Jerry');
  observer.next('Anna');
}

subscribe({
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
