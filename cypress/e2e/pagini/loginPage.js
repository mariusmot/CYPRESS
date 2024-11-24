class LoginPage {

  // Selectorii elementelor paginii
  get acceptCookiesButton() {return cy.get('#onetrust-accept-btn-handler', { timeout: 10000 });}
  get emailInput() {return cy.get('#user_login');}
  get passwordInput() {return cy.get('#login__user_password');}
  get loginButton() {return cy.get('button[type="submit"]');}
  get errorMessage() {return cy.get('span[data-testid="error-text"]')};
  

  // Metode pentru interactiunea cu pagina
  visitLoginPage() {
    cy.fixture('testData').then((data) => {
      cy.visit(data.baseUrl, { timeout: 15000 });
      this.acceptCookies();
    });
  }

  acceptCookies() {this.acceptCookiesButton.should('be.visible', { timeout: 10000 }).click({ force: true });}
  enterEmail(email) {this.emailInput.type(email);}
  enterPassword(password) {this.passwordInput.type(password);}
  submitLogin() {this.loginButton.first().click();}

  loginValidUser() {
    cy.fixture('testData').then((data) => {
      this.visitLoginPage();
      this.enterEmail(data.validUser.email);
      this.enterPassword(data.validUser.password);
      this.submitLogin();
    });
  }

  loginInvalidUser() {
    cy.fixture('testData').then((data) => {
      this.visitLoginPage();
      this.enterEmail(data.inValidUser.email);
      this.enterPassword(data.inValidUser.password);
      this.submitLogin();
    });
  }
}
  
export default new LoginPage();
  