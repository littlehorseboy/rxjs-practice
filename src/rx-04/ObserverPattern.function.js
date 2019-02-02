/* eslint-disable */

function Producer() {
  if (!(this instanceof Producer)) {
    throw new Error("Class constructor Producer cannot be invoked without 'new'");
  }

  this.listeners = [];
}

Producer.prototype.addListener = function addListener(listener) {
  if (typeof listener === 'function') {
    this.listeners.push(listener);
  } else {
    throw new Error('listener must be function!');
  }
};

Producer.prototype.removeListener = function removeListener(listener) {
  this.listeners.splice(this.listeners.indexOf(listener), 1);
};

Producer.prototype.notify = function notify(message) {
  this.listeners.forEach(function (listener) {
    listener(message);
  });
};

var egghead = new Producer();

function listener1(message) {
  console.log(message + ' from listener1');
}

function listener2(message) {
  console.log(message + ' from listener2');
}

egghead.addListener(listener1);
egghead.addListener(listener2);

egghead.notify('ABC');
