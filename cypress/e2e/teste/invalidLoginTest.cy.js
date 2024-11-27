import LoginPage from "../pagini/loginPage";

describe('Invalid Login Test', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
    });

    it('Ar trebui ca logarea cu credentiale invalide sa nu fie posibila!', () => {

    // Folosesc metodele din LoginPage
    LoginPage.loginInvalidUser();

    // Verific dacă login-ul a fost cu respins
    //LoginPage.errorMessage.should('have.text', 'Invalid email or password');

    });
});
