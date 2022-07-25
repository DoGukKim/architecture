// LSP 원칙에 어긋나는 코드
class Bird {
  fly() {
    console.log("날고 있는 중..");
  }
}

class Eagle extends Bird {}

class Penguin extends Bird {
  fly() {
    // 팽귄은 날 수 없다..
    throw new Error("팽귄은 날 수 없다..");
  }
}

const eagle = new Eagle();
const penguin = new Penguin();
eagle.fly();
penguin.fly();

// LSP 원칙을 따르고 있는 코드
class Bird {
  layEgg() {
    console.log("알");
  }
}

class FlyingBird extends Bird {
  fly() {
    console.log("날고 있는 중..");
  }
}

class SwimmingBird extends Bird {
  swim() {
    console.log("수영 중..");
  }
}

class Eagle extends FlyingBird {}
class Penguin extends SwimmingBird {}
eagle.fly();
penguin.swim();
