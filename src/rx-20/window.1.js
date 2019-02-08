/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');

const source = Rx.Observable.interval(1000);

const newest = source.window(click);

newest
  .switch()
  .subscribe(console.log);
