/* global Rx */

class Producer {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    } else {
      throw new Error('listener 必須是 function');
    }
  }

  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }

  notify(message) {
    this.listeners.forEach((listener) => {
      listener(message);
    });
  }
}

const egghead = new Producer();

const source = Rx.Observable
  .fromEventPattern(
    handler => egghead.addListener(handler),
    handler => egghead.removeListener(handler),
  );

source.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log('complete');
  },
});

egghead.notify('Hello! Can you hear me?');
