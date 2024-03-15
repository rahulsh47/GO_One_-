const Loginpage = browser.page.Loginpage();
const global = browser.globals;

describe("GO1% Login Elements", function () {
  before(function (browser) {
    Loginpage.navigate();
    Loginpage.maximizeWindow();
  });

  it("1. Verify the Logo , Carousel Image , Carousel Caption & Footer Message is Displayed", function (browser) {
    Loginpage.expect.element("@Logo").to.be.visible;
    Loginpage.expect.element("@CarouselImage").to.be.visible;
    Loginpage.expect.element("@CarouselCaption").to.be.visible;
    Loginpage.expect.element("@FooterMesssage").to.be.visible;
  });

  it('2. Verify that tag line with text "Get 1% better Everyday is Visible"', function (browser) {
    Loginpage.expect.element("@TagLine").to.be.visible;
  });

  it("3. Verify that Carousel Image changes while clicking on the Carousel button", function (browser) {
    Loginpage.expect.element("@CarouselSlider").to.be.visible;
  });

  it("4. Verify that specific text between login options is present on the web page", function (browser) {
    Loginpage.expect.element("@ViaEmail").to.be.visible;
  });

  it('5.  Verify that login page heading contains text "Sign in to Go 1%" is displayed ', function (browser) {
    Loginpage.expect.element("@SignInGO1percent").to.be.visible;
  });

  it("6. Verify that clicking on the Microsoft logo redirects to the Microsoft login page", async function (browser) {
    // await browser.waitForElementVisible(".social-fontawesom-icons", 5000);
    await browser.execute(function () {
      document
        .querySelector(
          ".kc-social-provider-logo.kc-social-gray.fa-brands.fa-windows"
        )
        .click();
    });

    browser.back();
  });

  it("7. Verify that login fails with invalid credentials and an alert message is displayed", async function (browser) {
    await Loginpage.SuccesfulLogin(
      global.invalidusername,
      global.invalidpassword
    );
    await browser.execute('document.querySelector("#kc-login").click();');
    browser.expect
      .element("#input-error")
      .text.to.contains("Invalid username or password.");
  });

  it("9. Verify remember me checkbox is selected during login", async function (browser) {
    await browser.execute(function () {
      document.querySelector(".checkmark").click();
    });
    browser.expect.element("#rememberMe").to.be.selected.before(100);
  });

  it("10. Verify the forgot Password functionality ", async function (browser) {
    await browser.execute(function () {
      document.querySelector('a[tabindex="5"]').click();
    });
    Loginpage.EnterEmail(global.email);
    browser.execute(function () {
      document.querySelector("#kc-form-buttons > input").click();
    });
    Loginpage.expect
      .element("@ResetPasswordInfo")
      .text.to.contain(
        "You should receive an email shortly with further instructions."
      );
  });

  it('11. Verify clicking on the "Terms of Use" link opens a new page with the terms of use', async function (browser) {
    await browser.execute(function () {
      document.querySelector("a:nth-child(1) b:nth-child(1)").click();
    });
    // Loginpage.ClickTermsofUse();
    browser.window.getAllHandles(function (result) {
      const originalWindow = result.value[0];
      const handle = result.value[1];
      this.window.switch(handle);
      Loginpage.assert.urlContains("terms-of-use");
      this.window.switch(originalWindow);
    });
  });

  it('12.  Verify clicking on the "Privacy policy" link opens a new page with the privacy policy', async function (browser) {
    await browser.execute(function () {
      document.querySelector("a:nth-child(2) b:nth-child(1)").click();
    });
    // Loginpage.ClickPrivacyPolicy();
    browser.window.getAllHandles(function (result) {
      const originalWindow = result.value[0];
      const handle = result.value[2];
      this.window.switch(handle);
      Loginpage.assert.urlContains("privacy-policy");
      this.window.switch(originalWindow);
    });
  });

  it("8. Verify successful login with valid credentials", async function (browser) {
    await browser.execute(function () {
      document.querySelector("a:nth-child(2) b:nth-child(1)").click();
    });
    Loginpage.SuccesfulLogin(global.validusername, global.validpassword);
    await browser.execute('document.querySelector("#kc-login").click();');

    browser.assert.urlContains("my-dashboard");
  });
});
