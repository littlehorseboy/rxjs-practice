/* eslint no-restricted-syntax:
  ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */

function* getNumbers(words) {
  for (const word of words) {
    if (/^[0-9]+$/.test(word)) {
      yield parseInt(word, 10);
    }
  }
}

const iterator = getNumbers('30 天精通 RxJS (04)');

console.log(iterator.next()); // 3

console.log(iterator.next()); // 0

console.log(iterator.next()); // 0

console.log(iterator.next()); // 4

console.log(iterator.next()); // undefined
