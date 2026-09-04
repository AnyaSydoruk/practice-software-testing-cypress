import { ROUTES } from "../data/constants.js";

class LoginPage {
  visit() {
    cy.visit(ROUTES.login);
  }

  get emailInput() {
    return cy.get('[data-test="email"]');
  }

  get passwordInput() {
    return cy.get('[data-test="password"]');
  }

  get submitButton() {
    return cy.get('[data-test="login-submit"]');
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.submitButton.click();
  }
}

export default new LoginPage();
