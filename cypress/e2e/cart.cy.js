import HomePage from "../support/pages/home.page.js";
import ProductPage from "../support/pages/product.page.js";
import CartPage from "../support/pages/cart.page.js";
import { CART_PRODUCT } from "../support/data/constants.js";

describe("Feature: Shopping cart", () => {
  describe("Scenario: User adds a product to the basket from the product details page", () => {
    it("should show the product in the basket", () => {
      HomePage.visit();
      HomePage.header.searchFor(CART_PRODUCT);
      HomePage.openProduct(CART_PRODUCT);

      ProductPage.addToCart();

      CartPage.visit();
      CartPage.productTitles.should("contain", CART_PRODUCT);
    });
  });
});
