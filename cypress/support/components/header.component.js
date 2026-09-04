class HeaderComponent {
  get searchInput() {
    return cy.get('[data-test="search-query"]');
  }

  get searchButton() {
    return cy.get('[data-test="search-submit"]');
  }

  get homeLink() {
    return cy.get('[data-test="nav-home"]');
  }

  get languageSelect() {
    return cy.get('[data-test="language-select"]');
  }

  languageOption(code) {
    return cy.get(`[data-test="lang-${code}"]`);
  }

  searchFor(term) {
    this.searchInput.type(term);
    this.searchButton.click();
  }

  switchLanguage(code) {
    this.languageSelect.click();
    this.languageOption(code).click();
  }
}

export default new HeaderComponent();
