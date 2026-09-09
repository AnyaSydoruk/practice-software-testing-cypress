@cart
Feature: Shopping cart

  @smoke
  Scenario: User adds a product to the basket from the product details page
    Given the user is on the details page of the "Combination Pliers" product
    When the user adds the product to the basket
    Then the "Combination Pliers" product appears in the basket