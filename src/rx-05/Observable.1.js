/* global Rx */

const observable = Rx.Observable.create((observer) => {
  observer.next('Jerry');
  observer.next('Anna');
});

console.log('start');

observable.subscribe((value) => {
  console.log(value);
});

console.log('end');
