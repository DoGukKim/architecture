// Facade Class
class WhenIWakeUp {
  constructor() {}

  whenIWakeUp() {
    const wash = new Wash();
    const breakfast = new Breakfast();

    wash.brushTeeth();
    wash.shower();

    breakfast.eat();
    breakfast.water();
  }
}

// Subsystem Classes
class Wash {
  brushTeeth() {
    console.log("brushTeeth");
  }

  shower() {
    console.log("shower");
  }
}

class Breakfast {
  eat() {
    console.log("Have breakfast");
  }

  water() {
    console.log("Drink water");
  }
}

// Client
class Client {
  main() {
    const whenIWakeUp = new WhenIWakeUp();
    whenIWakeUp.whenIWakeUp();
  }
}
