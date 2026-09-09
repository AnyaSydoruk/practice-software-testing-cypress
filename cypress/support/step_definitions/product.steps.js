import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/home.page.js";

When("the user searches for the product {string}", (product) => {
  cy.intercept("**/products/search*").as("searchRequest");
  cy.wrap(product).as("searchTerm");
  HomePage.header.searchFor(product);
  cy.wait("@searchRequest");
});

Then("the results display the {string} product", (product) => {
  HomePage.productTitles.should("contain", product);
});
Then("every product in the results matches the search term", () => {
  cy.get("@searchTerm").then((term) => {
    HomePage.productTitles.each(($el) => {
      expect($el.text()).to.contain(term);
    });
  });
});
