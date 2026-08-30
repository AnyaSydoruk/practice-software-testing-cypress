import HomePage from "../support/pages/home.page.js";
import { LANG_DE, HOME_LINK_TEXT } from "../support/data/constants.js";

describe("Feature: Application settings", () => {
  describe("Scenario: User changes the application language", () => {
    it("should display the interface in German", () => {
      HomePage.visit();
      HomePage.header.homeLink.should("have.text", HOME_LINK_TEXT.en);
      HomePage.header.switchLanguage(LANG_DE);

      HomePage.header.homeLink.should("have.text", HOME_LINK_TEXT.de);
    });
  });
});
