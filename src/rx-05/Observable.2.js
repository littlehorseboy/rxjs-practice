/* global rxjs */

const observable = rxjs.Observable.create((observer) => {
  observer.next('Jerry');
  observer.next('Anna');

  setTimeout(() => {
    observer.next('RxJS');
  }, 30);
});

console.log('start');

observable.subscribe((value) => {
  console.log(value);
});

console.log('end');
