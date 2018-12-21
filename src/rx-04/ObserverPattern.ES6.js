class Producer {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    } else {
      throw new Error("Class constructor Producer cannot be invoked without 'new'");
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

const p = new Producer();

p.addListener((message) => {
  console.log(`${message} from No.1`);
});

p.addListener((message) => {
  console.log(`${message} from No.2`);
});

p.notify('Hello~! 你好嗎?');
