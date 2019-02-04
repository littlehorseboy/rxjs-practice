/* global Rx */

const dragDOM = document.createElement('div');
dragDOM.style.width = '100px';
dragDOM.style.height = '100px';
dragDOM.style.backgroundColor = 'red';
dragDOM.style.position = 'absolute';
dragDOM.style.cursor = 'all-scroll';

document.body.appendChild(dragDOM);

const validValue = (value, max, min) => Math.min(Math.max(value, min), max);

const mouseDown = Rx.Observable.fromEvent(dragDOM, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(document.body, 'mouseup');
const mouseMove = Rx.Observable.fromEvent(document.body, 'mousemove');

mouseDown
  .map(() => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .withLatestFrom(mouseDown, (move, down) => ({
    x: validValue(move.clientX - down.offsetX, window.innerWidth - dragDOM.clientWidth, 0),
    y: validValue(move.clientY - down.offsetY, window.innerHeight - dragDOM.clientHeight, 0),
  }))
  .subscribe((pos) => {
    dragDOM.style.left = `${pos.x}px`;
    dragDOM.style.top = `${pos.y}px`;
  });
