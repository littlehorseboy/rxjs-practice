/* global Rx */

const observable = Rx.Observable.create((observer) => {
  setTimeout(() => {
    observer.next('RxJS');
  }, 30);

  try {
    observer.next('Jerry');
    observer.next('Anna');
    throw new Error('some exception');
    // observer.complete();
  } catch (e) {
    observer.error(e);
  }
  observer.next('Unreachable code');
});

observable.subscribe(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
  () => {
    console.log('complete');
  },
);
