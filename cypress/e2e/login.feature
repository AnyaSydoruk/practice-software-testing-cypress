@auth
Feature: Sign In

  @smoke
  Scenario: User signs in with valid credentials
    Given the user is a registered customer
    And the user is on the sign-in page
    When the user signs in with valid credentials
    Then the user is taken to the account dashboard