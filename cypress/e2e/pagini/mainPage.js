class MainPage {

    // Selectorii elementelor paginii
    get avatarDropdown() {return cy.get('button[data-testid="avatar-dropdown-button"]');}
    get logoutButton() {return cy.get('a[href="/sign_out"]');}

    // Metode pentru interactiunea cu pagina

    openAvatarDropdown() {this.avatarDropdown.click();}
    clickLogout() {this.logoutButton.click();}

    logoutUser() {
        this.openAvatarDropdown();
        this.clickLogout();
      }

}

export default new MainPage();