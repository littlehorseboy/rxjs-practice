/* global Rx */

const addButton = document.createElement('button');
addButton.textContent = '+';
const minusButton = document.createElement('button');
minusButton.textContent = '-';
const state = document.createElement('span');
state.style.marginLeft = '1rem';

document.body.appendChild(addButton);
document.body.appendChild(minusButton);
document.body.appendChild(state);

const addClick = Rx.Observable.fromEvent(addButton, 'click').mapTo(1);
const minusClick = Rx.Observable.fromEvent(minusButton, 'click').mapTo(-1);

const numberState = Rx.Observable
  .empty()
  .startWith(0)
  .merge(addClick, minusClick)
  .scan((origin, next) => origin + next, 0);

numberState.subscribe({
  next(value) {
    state.textContent = value;
  },
  error(err) {
    console.error(`Error: ${err}`);
  },
  complete() {
    console.log('complete');
  },
});
