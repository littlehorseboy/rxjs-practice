/* global Rx, jss, jssPresetDefault */

jss.default.setup(jssPresetDefault.default());

const autoCompleteInputWidth = '200px';

const styles = {
  autoCompleteDiv: {
    position: 'relative',
  },
  input: {
    width: autoCompleteInputWidth,
    '&:focus': {
      borderBottom: '1px solid blue',
    },
  },
  ul: {
    width: autoCompleteInputWidth,
    listStyle: 'none',
    marginTop: 0,
    paddingLeft: 0,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    '& li': {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: 'lightblue',
      },
    },
  },
};

const { classes } = jss.default.createStyleSheet(styles).attach();

const autoCompleteDiv = document.createElement('div');
autoCompleteDiv.classList.add(classes.autoCompleteDiv);
const input = document.createElement('input');
input.type = 'search';
input.classList.add(classes.input);
const ul = document.createElement('ul');
ul.classList.add(classes.ul);

autoCompleteDiv.appendChild(input);
autoCompleteDiv.appendChild(ul);

document.querySelector('#app').appendChild(autoCompleteDiv);

const keyword = Rx.Observable.fromEvent(input, 'input');
const selectItem = Rx.Observable.fromEvent(ul, 'click');

const render = (suggestArr = []) => {
  ul.innerHTML = suggestArr
    .map(item => `<li>${item}</li>`)
    .join('');
};

const keyword$ = keyword
  // .filter(e => e.target.value.length > 2)
  .debounceTime(400)
  .switchMap(
    e => Rx.Observable.from(fetch(`https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${e.target.value}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(res => res.json()))
      .retry(3),
    (e, res) => res[1],
  );

keyword$.subscribe({
  next(list) {
    render(list);
  },
  error(err) {
    console.error(`Error: ${err}`);
  },
});

selectItem
  .filter(e => e.target.matches('li'))
  .map(e => e.target.innerText)
  .subscribe((text) => {
    input.value = text;
    render();
  })
