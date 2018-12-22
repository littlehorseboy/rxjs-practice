/* eslint no-underscore-dangle: [2, { "allow": ["_array", "_cursor"] }] */
/* eslint max-len: ["error", { "code": 150 }] */

class IteratorFromArray {
  constructor(arr) {
    this._array = arr;
    this._cursor = 0;
  }

  next() {
    const result = this._cursor < this._array.length ? { value: this._array[this._cursor], done: false } : { value: undefined, done: true };
    this._cursor += 1;
    return result;
  }

  map(callback) {
    const iterator = new IteratorFromArray(this._array);
    return {
      next() {
        const { value, done } = iterator.next();
        return {
          value: done ? undefined : callback(value),
          done,
        };
      },
    };
  }
}

const arr = [1, 2, 3];

const iterator = new IteratorFromArray(arr);

const newIterator = iterator.map(value => value + 3);

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(newIterator.next());

console.log(newIterator.next());

console.log(newIterator.next());

console.log(newIterator.next());
