import { defineConfig } from "cypress";
import mochawesome from "cypress-mochawesome-reporter/plugin";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  allowCypressEnv: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "spec, cypress-mochawesome-reporter",
  },
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      mochawesome(on);
      return config;
    },
  },
});
