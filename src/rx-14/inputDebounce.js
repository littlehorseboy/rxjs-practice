/* global Rx */

const input = document.createElement('input');
const inputValue = document.createElement('div');
document.querySelector('#app').appendChild(input);
document.querySelector('#app').appendChild(inputValue);

Rx.Observable.fromEvent(input, 'input')
  .debounceTime(300)
  .map(e => e.target.value)
  .subscribe((value) => {
    inputValue.textContent = value;
  });
