/* global rxjs */

const observable = rxjs.Observable.create((observer) => {
  try {
    observer.next('Jerry');
    observer.next('Anna');
    throw new Error('some exception');
    // observer.complete();
  } catch (e) {
    observer.error(e);
  }
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
    console.error(error);
  },
  complete() {
    console.log('complete');
  },
});

console.log('end');
