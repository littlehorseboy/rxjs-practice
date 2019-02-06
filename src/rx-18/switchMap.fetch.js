/* global Rx */

const click = Rx.Observable.fromEvent(document.body, 'click');

const source = click.switchMap(
  () => Rx.Observable.from(fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())),
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
