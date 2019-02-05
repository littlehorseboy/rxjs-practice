/* global Rx, jss, jssPresetDefault */

jss.default.setup(jssPresetDefault.default());

const styles = {
  img: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '3px #fff solid',
    transform: 'translated3d(0, 0, 0)',
  },
};

const { classes } = jss.default.createStyleSheet(styles).attach();

const imgUrls = [
  'https://images.unsplash.com/photo-1547566791-7962d6687f0d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1548220349-e5ec4dc4d6de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1548221604-75e0d487ae14?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1547253291-1337138b39e0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1547110287-71448271b1de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
];

const imgList = [];
const app = document.querySelector('#app');
imgUrls.forEach((url) => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = '';
  img.classList.add(classes.img);
  app.appendChild(img);
  imgList.push(img);
});

const movePos = Rx.Observable.fromEvent(document, 'mousemove')
  .map(e => ({ x: e.clientX, y: e.clientY }));

const followMouse = (DOMArr) => {
  const delayTime = 600;
  DOMArr.forEach((item, index) => {
    movePos
      .delay(delayTime * ((0.65 ** index) + Math.cos(index / 4)) / 2)
      .subscribe((pos) => {
        Object.assign(
          item.style,
          { transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` },
        );
      });
  });
};

followMouse(imgList);
