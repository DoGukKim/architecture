class SingleTon {
  constructor() {
    if (!SingleTon.instance) {
      SingleTon.instance = this;
    }
    return SingleTon.instance;
  }

  getInstance() {
    return this.instance;
  }
}

const a = new SingleTon();
const b = new SingleTon();
console.log(a === b); // -> true

// 싱글톤 패턴은 데이터 베이스 연결 모듈에 많이 사용되는 패턴이다.
const URL = "...";
const createConnection = (url) => ({ url });
class DB {
  constructor(url) {
    if (!DB.instance) {
      DB.instance = createConnection(url);
    }
  }
}

const A = new DB(URL);
const B = new DB(URL);
console.log(A === B); // -> true
