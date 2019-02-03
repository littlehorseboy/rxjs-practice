/* global Rx */

const observable = Rx.Observable.create((observer) => {
  // 非同步會在 error 後調用 next() 不會有用處
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

  observer.next('not work');
});

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
