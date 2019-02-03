/* global Rx */

function map(source, callback) {
  return Rx.Observable.create(observer => source.subscribe(
    (value) => {
      try {
        observer.next(callback(value));
      } catch (e) {
        observer.error(e);
      }
    },
    (err) => {
      observer.error(err);
    },
    () => {
      observer.complete();
    },
  ));
}

Rx.Observable.prototype.map = map;

const people = Rx.Observable.of('Jerry', 'Anna');

const helloPeople = people.map(people, item => `${item} Hello~`);

helloPeople.subscribe(console.log);
