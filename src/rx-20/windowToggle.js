/* global Rx */

const source = Rx.Observable.interval(1000);

const mouseDown = Rx.Observable.fromEvent(document.body, 'mousedown');

const mouseUp = Rx.Observable.fromEvent(document.body, 'mouseup');

const newest = source
  .windowToggle(mouseDown, () => mouseUp)
  .switch();

newest.subscribe(console.log);
