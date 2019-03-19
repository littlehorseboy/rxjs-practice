/* global Rx */

const dragDOM = document.createElement('div');
dragDOM.style.width = '200px';
dragDOM.style.height = '200px';
dragDOM.style.backgroundColor = 'red';
dragDOM.style.position = 'absolute';
dragDOM.style.top = '5%';
dragDOM.style.left = '5%';

const dragDOMTitle = document.createElement('div');
dragDOMTitle.style.backgroundColor = 'blue';
dragDOMTitle.style.fontSize = '20px';
dragDOMTitle.style.cursor = 'all-scroll';

dragDOMTitle.innerHTML = `
  <span>Title</span>
  <span style="float: right;">X</span>
`;

dragDOM.appendChild(dragDOMTitle);

document.body.appendChild(dragDOM);

const validValue = (value, max, min) => Math.min(Math.max(value, min), max);

const mouseDown = Rx.Observable.fromEvent(dragDOMTitle, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(document.body, 'mouseup');
const mouseLeave = Rx.Observable.fromEvent(dragDOMTitle, 'mouseleave');
const mouseMove = Rx.Observable.fromEvent(document.body, 'mousemove');

mouseDown
  .map(() => mouseMove.takeUntil(mouseUp.merge(mouseLeave)))
  .concatAll()
  .withLatestFrom(mouseDown, (move, down) => ({
    x: validValue(move.clientX - down.offsetX, window.innerWidth - dragDOM.clientWidth, 0),
    y: validValue(move.clientY - down.offsetY, window.innerHeight - dragDOM.clientHeight, 0),
  }))
  .subscribe((pos) => {
    dragDOM.style.left = `${pos.x}px`;
    dragDOM.style.top = `${pos.y}px`;
  });
