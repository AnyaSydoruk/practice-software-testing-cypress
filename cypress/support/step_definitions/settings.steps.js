import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/home.page.js";
import { LANGUAGES } from "../data/constants.js";

Given("the interface is displayed in {string}", (language) => {
  HomePage.header.homeLink.should(
    "have.text",
    LANGUAGES[language].homeLinkText,
  );
});
When("the user changes the language to {string}", (language) => {
  HomePage.header.switchLanguage(LANGUAGES[language].code);
});
