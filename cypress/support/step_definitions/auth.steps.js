import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/login.page.js";
import AccountPage from "../pages/account.page.js";
import RegisterPage from "../pages/register.page.js";
import { SEEDED_USER, newUser } from "../data/users.js";
import { ROUTES, ACCOUNT_PAGE_TITLE } from "../data/constants.js";

Given("the user is a registered customer", () => {
  cy.wrap(SEEDED_USER).as("user");
});

Given("the user is a new visitor without an account", () => {
  cy.wrap(newUser()).as("newUser");
});

When("the user signs in with valid credentials", () => {
  cy.get("@user").then((user) => {
    LoginPage.login(user.email, user.password);
  });
});
When("the user registers with valid registration details", () => {
  cy.get("@newUser").then((newUser) => {
    RegisterPage.register(newUser);
  });
});

Then("the user is taken to the account dashboard", () => {
  cy.location("pathname").should("include", ROUTES.account);
  AccountPage.pageTitle.should("have.text", ACCOUNT_PAGE_TITLE);
});
Then("the account is created successfully", () => {
  cy.location("pathname").should("include", ROUTES.login);
});
