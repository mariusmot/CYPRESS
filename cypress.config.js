const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/results-[hash].xml',
    toConsole: true,
    attachments: true,
    testCaseKey: 'TC-[hash]',
    outputs: true,
    screenshots: true,
    classPrefix: 'Test Suite: ',
    packagePrefix: 'Module: ',
    recordScreenshots: true,
    screenshotsFolder: 'cypress/screenshots',
    useFullTestName: true,
    testSuiteName: "My Test Suite"
  },
  e2e: {
    specPattern: 'cypress/e2e_tests/**/*.cy.{js,jsx,ts,tsx}',
    video: false,      // Dezactiveaza inregistrarea video
    screenshotOnRunFailure: true, // Activeaza capturile de ecran in caz de eroare
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,       // wait time pentru incarcarea paginii
    viewportWidth: 1920,          // Latimea ecranului
    viewportHeight: 1080,          // Inaltimea ecranului
    chromeWebSecurity: false,
    setupNodeEvents(on, config){},
    },
  });

// npx cypress run - pentru headless mode
// npx cypress open - pentru headed mode 