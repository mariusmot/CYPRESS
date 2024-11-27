const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/teste/**/*.cy.{js,jsx,ts,tsx}',
    video: false,      // Dezactiveaza inregistrarea video
    screenshotOnRunFailure: true, // Activeaza capturile de ecran in caz de eroare
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,       // wait time pentru incarcarea paginii
    viewportWidth: 1920,          // Latimea ecranului
    viewportHeight: 1080,          // Inaltimea ecranului
    chromeWebSecurity: false
    },
  });

// npx cypress run - pentru headless mode
// npx cypress open - pentru headed mode 