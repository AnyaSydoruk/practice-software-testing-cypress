@product
Feature: Product search

  @regression
  Scenario: User searches for an exact product by name
    Given the user is on the home page
    When the user searches for the product "Thor Hammer"
    Then the results display the "Thor Hammer" product
    And every product in the results matches the search term