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

const idAndTitle = [];

newCourseList.forEach((course) => {
  idAndTitle.push({
    id: course.id,
    title: course.title,
  });
});

console.log(idAndTitle);

const idAndTitle2 = newCourseList.map(course => ({
  id: course.id,
  title: course.title,
}));

console.log(idAndTitle2);

/* eslint no-extend-native: ["error", { "exceptions": ["Array"] }] */

Array.prototype.map2 = function map2(callback) {
  const result = [];

  this.forEach((el, index) => {
    result.push(callback(el, index));
  });

  return result;
};

const idAndTitle3 = newCourseList.map2(course => ({
  id: course.id,
  title: course.title,
}));

console.log(idAndTitle3);
