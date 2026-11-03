
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {
  addCucumberPreprocessorPlugin,
} from "@badeball/cypress-cucumber-preprocessor";
import {
  createEsbuildPlugin,
} from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  waitTimeout : 10000,
  pageLoadTimeout: 10000,
  
  // requestTimeout: 10000,
  // responseTimeout: 10000,

  e2e: {
    baseUrl: "https://admin.proxima.ng",

    specPattern: "cypress/e2e/features/**/*.feature",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
