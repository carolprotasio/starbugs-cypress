const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
     baseUrl: 'https://starbugs-qa.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
 
});
