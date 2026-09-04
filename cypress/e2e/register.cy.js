import RegisterPage from "../support/pages/register.page.js";
import { newUser } from "../support/data/users.js";
import { ROUTES } from "../support/data/constants.js";

describe("Feature: Account registration", () => {
  describe("Scenario: User registers a new account", () => {
    it("should create the account successfully", () => {
      const user = newUser();

      RegisterPage.visit();

      RegisterPage.register(user);

      cy.location("pathname").should("include", ROUTES.login);
    });
  });
});
