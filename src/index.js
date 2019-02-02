const handler = (e) => {
  console.log(e);
  document.body.removeEventListener('click', handler);
};

document.body.addEventListener('click', handler);
