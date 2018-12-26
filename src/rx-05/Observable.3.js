/* global rxjs */

const observable = rxjs.Observable.create((observer) => {
  observer.next('Jerry');
  observer.next('Anna');
  observer.complete();

  setTimeout(() => {
    observer.next('RxJS');
  }, 30);
});

console.log('start');

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

console.log('end');
