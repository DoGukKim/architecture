class PaymentStrategy {
  // 추상 클래스
  pay() {
    //...
  }
}

class KAKAOStrategy extends PaymentStrategy {
  // ts가 아님으로 implements 대신 extends로 대체
  pay() {
    console.log("카카오페이");
  }
}

class NaverStrategy extends PaymentStrategy {
  pay() {
    console.log("네이버페이");
  }
}

class PayFactory {}

class Main {
  main() {
    const payType = new PaymentStrategy();

    payType.pay();
    // 카카오 or 네이버 페이
  }
}
