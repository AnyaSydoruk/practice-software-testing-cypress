const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
  },
});
