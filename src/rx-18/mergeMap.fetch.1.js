/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');

const source = click.mergeMap(
  () => Rx.Observable.from(fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())),
  (e, res) => res.map(obj => obj.title),
  3,
);

source.subscribe({
  next(value) {
    const div = document.createElement('div');
    div.textContent = JSON.stringify(value);
    document.querySelector('#app').appendChild(div);
  },
  error(err) {
    console.error(`Error: ${err}`);
  },
  complete() {
    console.log('complete');
  },
});
