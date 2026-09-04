import { ROUTES } from "../data/constants.js";
class RegisterPage {
  visit() {
    cy.visit(ROUTES.register);
  }

  register(user) {
    cy.get('[data-test="first-name"]').type(user.firstName);
    cy.get('[data-test="last-name"]').type(user.lastName);
    cy.get('[data-test="dob"]').type(user.dob);
    cy.get('[data-test="country"]').select(user.country);
    cy.get('[data-test="postal_code"]').type(user.postalCode);
    cy.get('[data-test="house_number"]').type(user.houseNumber);
    cy.get('[data-test="street"]').type(user.street);
    cy.get('[data-test="city"]').type(user.city);
    cy.get('[data-test="state"]').type(user.state);
    cy.get('[data-test="phone"]').type(user.phone);
    cy.get('[data-test="email"]').type(user.email);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="register-submit"]').click();
  }
}

export default new RegisterPage();
