/* global Rx */

const source = Rx.Observable.interval(1000);

const newest = source.filter(x => x % 2 === 0);

newest.subscribe(console.log);
