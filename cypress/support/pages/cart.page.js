import { ROUTES } from "../data/constants.js";
class CartPage {
  visit() {
    cy.visit(ROUTES.checkout);
  }

  get productTitles() {
    return cy.get('[data-test="product-title"]');
  }
}

export default new CartPage();
