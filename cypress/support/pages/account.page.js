class AccountPage {
  get pageTitle() {
    return cy.get('[data-test="page-title"]');
  }
}

export default new AccountPage();
