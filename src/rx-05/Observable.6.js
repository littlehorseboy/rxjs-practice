/* global rxjs */

const observable = rxjs.Observable.create((observer) => {
  try {
    observer.next('Jerry');
    observer.next('Anna');
    // throw new Error('some exception');
    observer.complete();
    observer.next('Unreachable code');
  } catch (e) {
    observer.error(e);
  }
  setTimeout(() => {
    observer.next('RxJS');
  }, 30);
});

console.log('start');

observable.subscribe(
  (value) => { console.log(value); },
  (error) => { console.error(error); },
  () => { console.log('complete'); },
);

console.log('end');
