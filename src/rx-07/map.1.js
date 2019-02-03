/* global Rx */

const people = Rx.Observable.of('Jerry', 'Anna');

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

const helloPeople = map(people, item => `${item} Hello~`);

helloPeople.subscribe(console.log);
