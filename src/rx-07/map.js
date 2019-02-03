/* global Rx */

const source = Rx.Observable.interval(1000);

const newest = source.map(x => x + 2);

newest.subscribe(console.log);
