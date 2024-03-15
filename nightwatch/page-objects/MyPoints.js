const global = browser.globals;
module.exports = {
  url: global.url,

  elements: {
    Username: "#username",
    Password: "#password",
    SignInButton: "#kc-login",
    MonthScore: ".col-6.current-month:nth-child(2)",
    AllTimeButton: ".mt-3.date-bar.button-class",
    ContributionChart: 'canvas[data-zr-dom-id="zr_0"]',
  },

  commands: [
    {
      Login: function (username, password) {
        return this.setValue("@Username", username).setValue(
          "@Password",
          password
        );
        // .click('@SignInButton')
      },
    },
  ],
};
