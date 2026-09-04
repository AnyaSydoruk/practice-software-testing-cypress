class ProductPage {
  get addToCartButton() {
    return cy.get('[data-test="add-to-cart"]');
  }

  get cartCounter() {
    return cy.get('[data-test="cart-quantity"]');
  }

  addToCart() {
    this.addToCartButton.click();
    this.cartCounter.should("be.visible");
  }
}

export default new ProductPage();
