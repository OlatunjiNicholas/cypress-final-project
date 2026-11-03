
const { defineConfig } = require("cypress");

const createBundler = require(
  "@bahmutov/cypress-esbuild-preprocessor"
);

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({

  // Video and screenshot settings
  video: true,
  screenshotOnRunFailure: true,

  // Browser viewport
  viewportWidth: 1920,
  viewportHeight: 1080,

  // Timeout settings
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 30000,

  // Retry failed tests
  retries: {
    runMode: 1,
    openMode: 0,
  },

  e2e: {
    // Remote application
    baseUrl: "https://admin.proxima.ng",

    // BDD feature files
    specPattern: "cypress/e2e/features/**/*.feature",

    async setupNodeEvents(on, config) {

      // Initialize Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configure esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [
            createEsbuildPlugin(config),
          ],
        })
      );

      return config;
    },
  },
});
