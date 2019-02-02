/*
  30 天精通 RxJS(02)： Functional Programming 基本觀念
*/

const someNumber = 5 + 6 - 1 * 3;
console.log(someNumber);

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const someResult = sub(add(5, 6), mul(1, 3));
console.log(someResult);

const func = a => b => a + b;

const func1 = func(5);
console.log(func1);
console.log(func1(6));
