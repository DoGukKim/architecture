// ISP원칙에 어긋나는 코드
// TS가 아니므로 Interface 대신 Class로 설명
class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage}`
    );
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class Character extends Entity {
  // ...
}

class Wall extends Entity {
  move() {
    // 벽은 움직일 수 없다..
  }
  attack() {
    // 벽은 공격할 수 없다..
  }
}

class Turret extends Entity {
  move() {
    // 터렛은 움직일 수 없다..
    return null;
  }
}

// ISP 원칙을 따르는 코드
class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
}

// Interfaces
const mover = {
  move() {
    console.log(`${this.name} moved`);
  },
};

const attacker = {
  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage}`
    );
    targetEntity.takeDamage(this.attackDamage);
  },
};

const hasHealth = {
  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  },
};

// 각 클라이언트 마다 필요한 메서드들을 적용해줌.
Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

Object.assign(Wall.prototype, hasHealth);

Object.assign(Turret.prototype, attacker);
