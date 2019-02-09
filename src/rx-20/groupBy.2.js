/* global Rx */

const people = [
  { name: 'A', score: 100, subject: 'English' },
  { name: 'A', score: 95, subject: 'Math' },
  { name: 'A', score: 87, subject: 'Chinese' },
  { name: 'B', score: 78, subject: 'English' },
  { name: 'B', score: 98, subject: 'Math' },
  { name: 'B', score: 100, subject: 'Chinese' },
];

const source = Rx.Observable
  .from(people)
  .zip(
    Rx.Observable.interval(300),
    x => x,
  );

const newest = source
  .groupBy(person => person.name)
  .map(group => group.reduce((acc, curr) => ({
    name: curr.name,
    score: curr.score + acc.score,
  })))
  .mergeAll();

newest.subscribe(console.log);
