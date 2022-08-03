// 요리사가 버거 레시피를 의존하고 있는 상태
class BurgerChef {
  constructor(BurgerRecipe) {
    this.burgerRecipe = new BurgerRecipe();
  }

  get recipe() {
    return this.burgerRecipe;
  }
}

// 의존성 주입 상태
class BurgerChef {
  constructor(recipe) {
    this.burgerRecipe = recipe;
  }

  get recipe() {
    return this.burgerRecipe;
  }
  // ...
}

class RestaurantOwner {
  burgerChef = new BurgerChef(new BurgerRecipe());
  // ...
}
