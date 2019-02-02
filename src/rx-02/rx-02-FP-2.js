/*
  30 天精通 RxJS (02)： Functional Programming 基本觀念
*/

const findIndex = (arr, predicate, start = 0) => {
  if (start >= 0 && start < arr.length) {
    if (predicate(arr[start])) {
      return start;
    }
    return findIndex(arr, predicate, start + 1);
  }
  return -1;
};

const a = findIndex(['a', 'b'], x => x === 'b');
console.log(a);

console.log(['a', 'b'].indexOf('b'));
