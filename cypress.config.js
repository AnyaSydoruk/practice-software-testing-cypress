const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
