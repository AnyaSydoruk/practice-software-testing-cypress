import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/home.page.js";
import ProductPage from "../pages/product.page.js";
import CartPage from "../pages/cart.page.js";

Given("the user is on the details page of the {string} product", (product) => {
  HomePage.visit();
  HomePage.header.searchFor(product);
  HomePage.openProduct(product);
});
When("the user adds the product to the basket", () => {
  ProductPage.addToCart();
});

Then("the {string} product appears in the basket", (product) => {
  CartPage.visit();
  CartPage.productTitles.should("contain", product);
});
