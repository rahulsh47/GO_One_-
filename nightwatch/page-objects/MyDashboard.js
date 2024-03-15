const { commands } = require("./MyActivity");

const global = browser.globals;


module.exports = {
  url: global.url,
  elements: {
    Username: "#username",
    Password: "#password",
    SignInButton: "#kc-login",
    WelcomeMessage: ".font-weight-light.overall-txt-color",
    ProfilePicture: ".material-symbols-outlined.hex",
    SearchBar: "#Search",
    SearchNameResult: ".search-names",
    SelectLanguage: ".dropdown-select:nth-child(1)",
    FrenchLanguage: 'div[class="dropdown-list"] div:nth-child(2)',
    LastContribution: ".card.col-lg-5.overall-card-height-new:nth-child(2)",
    MotivationTileContributions: ".card.page-wrapper",
    LikeButton: 'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)',
    SeeAll: ".btn.px-3.py-1.all-btn.border-button",
    Comment: 'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(2)',
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
      ClickProfilePicture: function () {
        return this.click("@ProfilePicture");
      },
      SearchNasher: function (name) {
        return this.setValue("@SearchBar", name);
      },
      HoverOverLanguageBar: function (browser) {
        MyDashboard.HoverOverLanguageBar();
        browser.click("@FrenchLanguage");
      },
      ClickLikeButton: function (browser) {
        browser.click("@LikeButton");
      },
      EnterComment: function (browser) {
        return this.click("@Comment");
        // .setValue('@Comment', comment)
      },
    },
  ],
};
