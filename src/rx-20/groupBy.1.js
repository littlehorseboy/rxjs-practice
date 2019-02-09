/* global Rx */

const source = Rx.Observable.interval(300).take(5);

const newest = source.groupBy(x => x % 2);

newest.subscribe(console.log);
