const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  projectId: "g4z7fy",
  env: {
    urlNew:'https://rahulshettyacademy.com/angularpractice/shop',
    magneto:'https://magento.softwaretestingboard.com/',
    parabank :'https://parabank.parasoft.com/parabank/index.htm'
  },
  e2e: {
    setupNodeEvents ,
    specPattern : 'cypress/integration/examples/*/*.feature',
    watchForFileChanges: false
  },
});
