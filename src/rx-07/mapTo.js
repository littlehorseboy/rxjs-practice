/* global Rx */

const source = Rx.Observable.interval(1000);

const newest = source.mapTo(2);

newest.subscribe(console.log);
