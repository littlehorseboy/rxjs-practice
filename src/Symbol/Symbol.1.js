const s1 = Symbol('foo');
const s2 = Symbol('bar');

console.log(s1);
console.log(s2);

/* eslint-disable-next-line */
console.log(s1.__proto__);
/* eslint-disable-next-line */
console.log(s2.__proto__);

console.log(s1.toString());
console.log(s2.toString());
