import LoginPage from "../support/pages/login.page.js";
import AccountPage from "../support/pages/account.page.js";
import { SEEDED_USER } from "../support/data/users.js";
import { ROUTES, ACCOUNT_PAGE_TITLE } from "../support/data/constants.js";

describe("Feature: Authentication", () => {
  describe("Scenario: User signs in with valid credentials", () => {
    it("should take the user to the account dashboard", () => {
      LoginPage.visit();

      LoginPage.login(SEEDED_USER.email, SEEDED_USER.password);

      cy.location("pathname").should("include", ROUTES.account);
      AccountPage.pageTitle.should("have.text", ACCOUNT_PAGE_TITLE);
    });
  });
});
