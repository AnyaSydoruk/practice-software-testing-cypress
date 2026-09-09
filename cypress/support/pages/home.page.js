import Header from "../components/header.component.js";
import { ROUTES } from "../data/constants.js";

class HomePage {
  get header() {
    return Header;
  }

  visit() {
    cy.visit(ROUTES.home);
  }

  get productTitles() {
    return cy.get('[data-test="product-name"]');
  }

  openProduct(name) {
    cy.contains('[data-test="product-name"]', name).click();
  }
}

export default new HomePage();
