import LoginPage from "../pagini/loginPage";
import MainPage from "../pagini/mainPage";

describe('Login/Logout Test', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  
  it('Ar trebui ca logarea cu credentiale valide sa se faca cu succes!', () => {

    // Folosesc metodele din LoginPage
    LoginPage.loginValidUser();

    // Verific dacă login-ul a fost cu succes
    cy.url().should('include', '/learn');

    MainPage.logoutUser();

    // Verific dacă logout-ul a fost cu succes
    LoginPage.errorMessage.should('have.text', 'Signed out successfully.');
  });
});
