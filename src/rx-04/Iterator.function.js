/* eslint no-underscore-dangle: [2, { "allow": ["_array", "_cursor"] }] */

function IteratorFromArray(arr) {
  if (!(this instanceof IteratorFromArray)) {
    throw new Error('用 new IteratorFromArray()!');
  }

  this._array = arr;
  this._cursor = 0;
}

/* eslint max-len: ["error", { "code": 150 }] */

IteratorFromArray.prototype.next = function next() {
  const result = this._cursor < this._array.length ? { value: this._array[this._cursor], done: false } : { done: true };
  this._cursor += 1;
  return result;
};

const arr = [1, 2, 3];

const iterator = new IteratorFromArray(arr);

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());
