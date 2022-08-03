// Subject.js
class Subject {
  constructor(name) {
    this.observers = [];
    this.name = name;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers.splice(this.observers.indexOf(observer), 1);
  }

  notifyAll(changeOfState) {
    this.observers.forEach((observer) => observer.notify(changeOfState));
  }
}

// App.js
const observer1 = {
  notify: (change) => console.log(`Set ${change} Button Clicked`),
};
const observer2 = {
  notify: (change) => console.log(`Increment ${change} Number`),
};
const observer3 = {
  notify: (change) => console.log(`Increment Total ${change} Number`),
};

// 관심있는 상태, 대상
const subject = new Subject("Like-Button");

// 미리 구독해 놓는다.
subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

// 상태변화가 생기면 모든 관찰자에게 알리고, 각 관찰자는 통지를 받은 즉시 후속작업을 처리한다.
subject.observer.notifyAll("Like");
// observer1 : Set Like Button Clicked
// observer2 : Increment Like Number
// observer3 : Increment Total Like Number

subject.observer.unsubscribe(observer3);

subject.observer.notifyAll("Like");
// observer1 : Set Like Button Clicked
// observer2 : Increment Like Number
