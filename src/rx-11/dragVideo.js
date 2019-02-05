/* global Rx, jss, jssPresetDefault */

jss.default.setup(jssPresetDefault.default());

const styles = {
  body: {
    height: '300vh',
  },
  anchorDiv: {
    width: '100%',
    height: '360px',
  },
  videoDiv: {
    '&.videoDiv-fixed': {
      position: 'fixed',
      top: '10px',
      left: '10px',
      width: '320px',
      height: '180px',
      cursor: 'all-scroll',
      '&:hover': {
        '& $masker': {
          display: 'block',
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1,
        },
      },
    },
  },
  masker: {
    display: 'none',
  },
  video: {
    width: '100%',
    'max-width': '800px',
  },
};

const { classes } = jss.default.createStyleSheet(styles).attach();

document.body.classList.add(classes.body);
const anchorDiv = document.createElement('div');
anchorDiv.classList.add(classes.anchorDiv);
const videoDiv = document.createElement('div');
videoDiv.classList.add(classes.videoDiv);
const masker = document.createElement('div');
masker.classList.add(classes.masker);
const video = document.createElement('video');
video.controls = true;
video.classList.add(classes.video);
const source = document.createElement('source');
source.type = 'video/ogg';
source.src = 'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg';

video.appendChild(source);
videoDiv.appendChild(masker);
videoDiv.appendChild(video);
anchorDiv.appendChild(videoDiv);
document.querySelector('#app').appendChild(anchorDiv);

const scroll = Rx.Observable.fromEvent(document, 'scroll');
scroll
  .map(() => anchorDiv.getBoundingClientRect().bottom < 0)
  .subscribe((bool) => {
    if (bool) {
      videoDiv.classList.add('videoDiv-fixed');
    } else {
      videoDiv.classList.remove('videoDiv-fixed');
    }
  });

const validValue = (value, max, min) => Math.min(Math.max(value, min), max);

const mouseDown = Rx.Observable.fromEvent(videoDiv, 'mousedown');
const mouseUp = Rx.Observable.fromEvent(document.body, 'mouseup');
const mouseMove = Rx.Observable.fromEvent(document.body, 'mousemove');

mouseDown
  .filter(() => videoDiv.classList.contains('videoDiv-fixed'))
  .map(() => mouseMove.takeUntil(mouseUp))
  .concatAll()
  .withLatestFrom(mouseDown, (move, down) => ({
    x: validValue(move.clientX - down.offsetX, window.innerWidth - videoDiv.clientWidth, 0),
    y: validValue(move.clientY - down.offsetY, window.innerHeight - videoDiv.clientHeight, 0),
  }))
  .subscribe((pos) => {
    videoDiv.style.left = `${pos.x}px`;
    videoDiv.style.top = `${pos.y}px`;
  });
