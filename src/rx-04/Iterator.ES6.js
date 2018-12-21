/* eslint no-underscore-dangle: [2, { "allow": ["_array", "_cursor"] }] */
/* eslint max-len: ["error", { "code": 150 }] */

class IteratorFromArray {
  constructor(arr) {
    this._array = arr;
    this._cursor = 0;
  }

  next() {
    const result = this._cursor < this._array.length ? { value: this._array[this._cursor], done: false } : { done: true };
    this._cursor += 1;
    return result;
  }
}

const arr = [1, 2, 3];

const iterator = new IteratorFromArray(arr);

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());
