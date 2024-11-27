import LoginPage from "../pagini/loginPage";
import MainPage from "../pagini/mainPage";

describe('Test pentru schimbare Profil', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Se face schimbarea datelor din profil!', () => {

    // Folosesc metodele din LoginPage
    LoginPage.loginValidUser();

    // Verific dacă login-ul a fost cu succes
    cy.url().should('include', '/learn');

    MainPage.logoutUser();

    // Verific dacă logout-ul a fost cu succes
    LoginPage.errorMessage.should('have.text', 'Signed out successfully.');

  });

});