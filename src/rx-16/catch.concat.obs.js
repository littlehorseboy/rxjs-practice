/* global Rx */

const title = document.createElement('h3');

document.querySelector('#app').appendChild(title);

const source = Rx.Observable.from(['a', 'b', 'c', 'd', 2, 'e'])
  .zip(Rx.Observable.interval(500), x => x)
  .map(x => x.toUpperCase());

const newest = source
  .catch((error, obs) => Rx.Observable.empty()
    .startWith('連線發生錯誤: 3秒後重連')
    .concat(obs.delay(3000)));

newest.subscribe({
  next(value) {
    title.textContent = value;
  },
  error(err) {
    console.error(`Error: ${err}`);
  },
  complete() {
    console.log('complete');
  },
});
