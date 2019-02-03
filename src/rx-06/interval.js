/* global Rx */

// const source = Rx.Observable.create((observer) => {
//   let i = 0;
//   setInterval(() => {
//     observer.next(i);
//     i += 1;
//   }, 1000);
// });

const source = Rx.Observable.interval(1000);

source.subscribe({
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
