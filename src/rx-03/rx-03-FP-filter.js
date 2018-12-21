/*
  30 天精通 RxJS (03)： Functional Programming 通用函式
*/

const newCourseList = [
  {
    id: 511021,
    title: 'React for Beginners',
    coverPng:
      'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
    rating: 5,
  },
  {
    id: 511022,
    title: 'Vue2 for Beginners',
    coverPng:
      'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
    rating: 5,
  },
  {
    id: 511023,
    title: 'Angular2 for Beginners',
    coverPng:
      'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
    rating: 5,
  },
  {
    id: 511024,
    title: 'Webpack for Beginners',
    coverPng:
      'https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png',
    rating: 4,
  },
];

const ratingIsFive = [];

newCourseList.forEach((course) => {
  if (course.rating === 5) {
    ratingIsFive.push(course);
  }
});

console.log(ratingIsFive);

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

Array.prototype.filter2 = function filter2(callback) {
  const result = [];
  this.forEach((item, index) => {
    if (callback(item, index)) {
      result.push(item);
    }
  });
  return result;
};

const ratingIsFive2 = newCourseList.filter2(course => course.rating !== 5);

console.log(ratingIsFive2);

/* eslint max-len: ["error", { "code": 150 }] */

const ratingIsFive3 = newCourseList.filter2(course => course.rating === 5).map(course => course.title);

console.log(ratingIsFive3);
