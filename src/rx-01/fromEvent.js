/*
  30 天精通 RxJS(02)： Functional Programming 基本觀念
*/

// const handler = (e) => {
//   console.log(e);
//   document.body.removeEventListener('click', handler);
// };

// document.body.addEventListener('click', handler);

/* global Rx */

Rx.Observable
  .fromEvent(document.body, 'click')
  .take(1)
  .subscribe(console.log);
