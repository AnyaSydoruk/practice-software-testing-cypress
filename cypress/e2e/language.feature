@settings
Feature: Language selection

  @regression
  Scenario: User changes the application language
    Given the user is on the home page
    And the interface is displayed in "English"
    When the user changes the language to "German"
    Then the interface is displayed in "German"