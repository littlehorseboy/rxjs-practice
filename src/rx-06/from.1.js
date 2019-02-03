/* global Rx */

const arr = ['Jerry', 'Anna', 'Rx', 'React'];

const source = Rx.Observable.from(arr);

source.subscribe({
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
