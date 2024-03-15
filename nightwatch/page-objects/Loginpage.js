const global = browser.globals;
module.exports = {
  url: global.url,
  elements: {
    Logo: ".go1up-logo",
    CarouselImage: "#myCarousel > div > div:nth-child(1) >img",
    CarouselCaption: "#myCarousel > div > div:nth-child(1) > div > p",
    FooterMesssage: ".tagsss",
    TagLine: 'div[class="item active"] h3',
    CarouselSlider: "#myCarousel > ol > li:nth-child(4)",
    ViaEmail: 'div[id="kc-social-providers"] h4',
    SignInGO1percent: "#kc-page-title",
    MicrosoftLogo: ".kc-social-provider-logo.kc-social-gray.fa-brands.fa-windows",
    Username: "#username",
    Password: "#password",
    SignInButton: "#kc-login",
    InputErrorMessage: "#input-error",
    RememberMeBtn: ".checkmark",
    ForgotPassword: 'a[tabindex="5"]',
    Email: "#username",
    SubmitButton: 'input[value="Submit"]',
    ResetPasswordInfo: ".pf-c-alert__title.kc-feedback-text",
    TermsOfUse: "a:nth-child(1) b:nth-child(1)",
    PrivacyPolicy: "a:nth-child(2) b:nth-child(1)",
  },

  commands: [
    {
      clickSlider() {
        return this.waitForElementVisible(
          "#myCarousel > ol > li:nth-child(4)",
          2000
        );
      },
      clickMicrosoftLogo() {
        return this.waitForElementVisible("@MicrosoftLogo", 5000).click(
          "@MicrosoftLogo"
        );
      },
      UnsuccesfulLogin: function (username, password) {
        return this.setValue("@Username", username)
          .setValue("@Password", password)
          .click("@SignInButton");
      },
      SuccesfulLogin: function (username, password) {
        return this.setValue("@Username", username).setValue(
          "@Password",
          password
        );
        // .click("@SignInButton");
      },
      RememberMeClick: function () {
        return this.waitForElementVisible("@RememberMeBtn", 5000).click(
          "@RememberMeBtn"
        );
      },
      ClickForgotPassword: function () {
        return this.waitForElementVisible("@ForgotPassword", 5000)
          .click("@ForgotPassword")
          .click("@SubmitButton");
        browser.back();
      },
      EnterEmail: function () {
        return this.setValue("@Email", "abc@gmail.com");
      },
      ClickTermsofUse: function () {
        return this.waitForElementVisible("@TermsOfUse", 5000).click(
          "@TermsOfUse"
        );
      },
      ClickPrivacyPolicy: function () {
        return this.waitForElementVisible("@PrivacyPolicy", 5000).click(
          "@PrivacyPolicy"
        );
      },
    },
  ],
};
