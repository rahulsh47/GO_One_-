// const { elements, commands } = require("./Loginpage");
const global = browser.globals;

module.exports = {
  url: global.url,

  elements: {
    Username: "#username",
    Password: "#password",
    SignInButton: "#kc-login",
    Settings: ".text-white.user-rank",
    Profile: ".d-flex.py-1.mt-1",
    ActivityCard: ".card.tab-card.py-5.px-4",
    ContributionButton:
      ".nav-item.my-1.cursor-pointer.text-bold.p-2:nth-child(3)",
    ScoringIcon: ".nav-link.pe-0.text-white.font-weight-bolder",
    Point:
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(62) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > span:nth-child(1)",
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
      ClickSettings: function () {
        return this.waitForElementVisible("@Settings", 10000).click(
          "@Settings"
        );
      },
      ClickProfile: function () {
        return this.waitForElementVisible("@Profile", 5000).click("@Profile");
      },
      ClickContributionButton: function () {
        return this.waitForElementVisible("@ContributionButton", 10000).click(
          "@ContributionButton"
        );
      },
      ClickScoringIcon: function () {
        return this.waitForElementVisible("@ScoringIcon", 10000).click(
          "@ScoringIcon"
        );
      },
    },
  ],
};
