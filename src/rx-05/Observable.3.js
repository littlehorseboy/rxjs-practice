/* global Rx */

const observable = Rx.Observable.create((observer) => {
  // 非同步會在 complete 後調用 next() 不會有用處
  setTimeout(() => {
    observer.next('RxJS');
  }, 30);

  observer.next('Jerry');
  observer.next('Anna');

  observer.complete();

  observer.next('not work');
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
