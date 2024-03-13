const { commands } = require("./MyActivity");

module.exports = {
  url: "https://nashtechglobal.qa.go1percent.com/",
  elements: {
    Username: {
      selector: "#username",
      locatorStrategy: "css selector",
    },
    Password: {
      selector: "#password",
      locatorStrategy: "css selector",
    },
    SignInButton: {
      selector: "#kc-login",
      locatorStrategy: "css selector",
    },
    WelcomeMessage: {
      selector: ".font-weight-light.overall-txt-color",
    },
    ProfilePicture: {
      selector: ".material-symbols-outlined.hex",
    },
    SearchBar: {
      selector: "#Search",
    },
    SearchNameResult: {
      selector: ".search-names",
    },
    SelectLanguage: {
      selector: ".dropdown-select:nth-child(1)",
    },
    FrenchLanguage: {
      selector: 'div[class="dropdown-list"] div:nth-child(2)',
    },
    LastContribution: {
      selector: ".card.col-lg-5.overall-card-height-new:nth-child(2)",
    },
    MotivationTileContributions: {
      selector: ".card.page-wrapper",
    },
    LikeButton: {
      selector:
        'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)',
    },
    SeeAll: {
      selector: ".btn.px-3.py-1.all-btn.border-button",
    },
    Comment: {
      selector:
        'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(2)',
    },
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
