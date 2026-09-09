@auth
Feature: Account registration

  @smoke
  Scenario: User registers a new account
    Given the user is a new visitor without an account
    And the user is on the registration page
    When the user registers with valid registration details
    Then the account is created successfully