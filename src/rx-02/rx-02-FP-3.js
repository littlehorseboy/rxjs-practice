/*
  30 天精通 RxJS (02)： Functional Programming 基本觀念
*/

const a = [9, 4].concat([7, 8]).filter(x => x > 5);
console.log(a);

const b = [9, 4].concat([7, 8]).sort().filter(x => x > 5);
console.log(b);
