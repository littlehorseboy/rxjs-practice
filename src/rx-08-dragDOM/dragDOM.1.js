/* global Rx */

const dragDOM = document.createElement('div');
dragDOM.style.width = '100px';
dragDOM.style.height = '100px';
dragDOM.style.backgroundColor = 'red';
dragDOM.style.position = 'absolute';
dragDOM.style.cursor = 'all-scroll';

document.body.appendChild(dragDOM);

const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(document.body, 'mouseup');
const mouseMove = Rx.Observable.fromEvent(document.body, 'mousemove');

mouseDown
  .map(() => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .map(event => ({ x: event.clientX, y: event.clientY }))
  .subscribe((pos) => {
    dragDOM.style.left = `${pos.x}px`;
    dragDOM.style.top = `${pos.y}px`;
  });
