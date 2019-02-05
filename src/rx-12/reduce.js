const array = [4, 3, 2, 1];

const result = array.reverse().reduce((origin, next) => {
  console.log(origin);
  return origin + next;
}, 0);

console.log(result);
