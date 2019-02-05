/* global Rx */

const button = document.createElement('button');
button.textContent = '連點';
document.querySelector('#app').appendChild(button);
const click = Rx.Observable.fromEvent(button, 'click');

const newest = click.bufferTime(500).filter(arr => arr.length >= 2);

newest.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(`Error: ${err}`);
  },
  complete() {
    console.log('complete');
  },
});
