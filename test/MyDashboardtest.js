const MyDashboard = browser.page.MyDashboard();
const global = browser.globals;

describe("MyDashboard Test Cases", function () {
  before(function (browser) {
    MyDashboard.navigate();
    MyDashboard.maximizeWindow();
  });

  it("1. Successful Login", async function () {
    await MyDashboard.Login(global.username, global.password);
    await browser.execute('document.querySelector("#kc-login").click();');
  });

  it("2.  Verify user should be able to see Welcome text ", function (browser) {
    MyDashboard.expect.element("@WelcomeMessage").to.be.visible;
  });

  it("20. Verify user should be able to see all fields in dashboard page", function (browser) {
    // await browser.waitForElementVisible('.material-symbols-outlined.hex',5000);
    MyDashboard.expect.element(".material-symbols-outlined.hex").to.be.visible;
    // await brows
    MyDashboard.expect.element("#sidenav-collapse-main").to.be.visible;
    MyDashboard.expect.element(
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
    ).to.be.visible;
    MyDashboard.expect.element(
      'div[class="card cursor-pointer py-4"] div:nth-child(4)'
    ).to.be.visible;
    MyDashboard.expect.element(
      'div[class="d-flex justify-content-center align-items-center"]'
    ).to.be.visible;
    MyDashboard.expect.element(
      ".pt-5.d-flex.justify-content-center.align-items-center"
    ).to.be.visible;
    MyDashboard.expect.element(
      'div[class="card col-lg-12 col-12 mt-4"] h5:nth-child(1)'
    ).to.be.visible;
    MyDashboard.expect.element(
      'ul[class="navbar-nav justify-content-end"] i[class="material-icons user-icon cursor-pointer"]'
    ).to.be.visible;
    MyDashboard.expect.element(
      'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"]'
    ).to.be.visible;
  });

  it("3. Verify user should be able to navigate profile page through Profile picture ", async function () {
    await browser.waitForElementVisible(".material-symbols-outlined.hex", 5000);
    await browser.execute(
      'document.querySelector(".material-symbols-outlined.hex").click();'
    );
    browser.assert.urlContains("my-profile");
  });

  it("4. Verify user should be able Search a Nasher", function (browser) {
    MyDashboard.SearchNasher("Rahul Kumar");
    browser.waitForElementVisible(".text-color.name-text");
    browser.execute(
      'document.querySelector(".material-symbols-outlined.cursor-pointer.me-3.person-icon").click();'
    );
    browser.back();
  });

  it("5. Verify user should be able to Change to French Language from dropdown", async function (browser) {
    await browser.waitForElementVisible(".dropdown-select:nth-child(1)", 5000);
    await browser.execute(
      'document.querySelector(".dropdown-select:nth-child(1)").click();'
    );
    MyDashboard.expect.element(".badge-text.text-bolder").to.be.visible;
  });

  it("6. Verify user should be able to Change to English Language from dropdown", async function (browser) {
    await browser.waitForElementVisible(".dropdown-select:nth-child(1)", 5000);
    await browser.execute(
      "document.querySelector(\"div[class='dropdown-list'] div:nth-child(1)\").click();"
    );
    MyDashboard.expect.element(".badge-text.text-bolder").to.be.visible;
  });

  it("7. Verify user should be able to Change Application view to Light Mode", async function (browser) {
    await browser.waitForElementVisible(
      'ul[class="navbar-nav justify-content-end"] i[class="material-icons user-icon cursor-pointer"]',
      5000
    );
    await browser.execute(
      "document.querySelector(\"ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']\").click();"
    );
    MyDashboard.expect
      .element(
        "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']"
      )
      .text.to.contain("dark_mode");
  });

  it("8. Verify user should be able to Change Application view to Dark Mode", async function (browser) {
    await browser.waitForElementVisible(
      'ul[class="navbar-nav justify-content-end"] i[class="material-icons user-icon cursor-pointer"]',
      5000
    );
    await browser.execute(
      "document.querySelector(\"ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']\").click();"
    );
    MyDashboard.expect
      .element(
        "ul[class='navbar-nav justify-content-end'] i[class='material-icons user-icon cursor-pointer']"
      )
      .text.to.contain("light_mode");
    browser.back();
  });

  it("9. Verify user should be able to see Last Contribution", function (browser) {
    MyDashboard.waitForElementPresent(
      ".card.col-lg-5.overall-card-height-new:nth-child(2)",
      5000
    );
    MyDashboard.expect.element(
      ".card.col-lg-5.overall-card-height-new:nth-child(2)"
    ).to.be.visible;
  });

  it("10. Verify user should be able to see Contribution on Motivation tile", function (browser) {
    MyDashboard.waitForElementVisible("@MotivationTileContributions", 1000);
    MyDashboard.expect.element("@MotivationTileContributions").to.be.visible;
    // browser.pause();
  });

  it("15. Verify user should be able to click see all button for Daily motivation tile", async function (browser) {
    MyDashboard.waitForElementVisible(
      ".btn.px-3.py-1.all-btn.border-button",
      5000
    ).execute(function () {
      document.querySelector(".btn.px-3.py-1.all-btn.border-button").click();
    });
    MyDashboard.expect.element(".my-dashboard.mt-n4").to.be.visible;
  });

  it("11. Verify user should be able to Like specific Contribution", async function (browser) {
    // await browser.execute('document.querySelector(".btn.px-3.py-1.all-btn.border-button").click();');  //Click on See All
    MyDashboard.execute(function () {
      document.querySelector(".btn.px-3.py-1.all-btn.border-button").click();
    }),
      MyDashboard.waitForElementVisible(
        'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)',
        5000
      ).execute(function () {
        document
          .querySelector(
            'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(1)'
          )
          .click();
      }),
      MyDashboard.expect
        .element(
          "div[class='my-dashboard mt-n4'] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(1) span:nth-child(2)"
        )
        .text.to.contain(1);
  });

  it("12. Verify user should be able to Dislike specific Contribution", async function (browser) {
    MyDashboard.waitForElementVisible(
      'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)',
      5000
    ).execute(function () {
      document
        .querySelector(
          'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(1)'
        )
        .click();
    }),
      MyDashboard.expect
        .element(
          'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(2) span:nth-child(2)'
        )
        .text.to.contain(1);
  });

  it("13. Verify user should be able to send a Comment on specific Contribution", async function (browser) {
    await browser.waitForElementVisible(
      'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(2)',
      5000
    );

    await browser.execute(function () {
      document
        .querySelector(
          'div[class="my-dashboard mt-n4"] div:nth-child(1) div:nth-child(1) div:nth-child(2) a:nth-child(3) span:nth-child(2)'
        )
        .click();
    });

    await browser.waitForElementVisible(
      ".form-control.p-2.ng-untouched.ng-pristine.ng-invalid",
      5000
    );

    await browser.execute(function () {
      document
        .querySelector(".form-control.p-2.ng-untouched.ng-pristine.ng-invalid")
        .click();
    });

    browser.setValue('[formcontrolname="comment"]', [
      "Test Pass",
      browser.Keys.ENTER,
    ]);
    browser.pause(2000);

    MyDashboard.expect.element(".p-4.comment-box").text.to.contain("Test Pass");
  });

  it("14. Verify that the user can able to share the contribution in Social Media", async function (browser) {
    let firstWindowHandle;

    await browser.waitForElementVisible(
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-feeds:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(1)",
      5000
    );

    await browser.execute(function () {
      document
        .querySelector(
          "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-feeds:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > button:nth-child(1)"
        )
        .click();
    });

    await browser.window.getAllHandles(function (result) {
      const handles = result.value;
      firstWindowHandle = handles[0]; // Storing the handle of the first window
    });

    await browser.waitForElementVisible(
      ".sb-wrapper.sb-show-icon.sb-linkedin",
      5000
    );

    await browser.execute(function () {
      document.querySelector(".sb-wrapper.sb-show-icon.sb-linkedin").click();
    });

    await browser.window.getAllHandles(function (result) {
      const handles = result.value;
      const newWindowHandle = handles[handles.length - 1]; // Getting the handle of the new window
      browser.window.switch(newWindowHandle); // Switching to the new window
    });

    MyDashboard.expect.url().to.contain("linkedin.com");

    await browser.window.switch(firstWindowHandle);
  });

  it("15. Verify user should be able to navigate Profile page through Settings button ", async function (browser) {
    await browser.waitForElementVisible(
      'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"] ',
      10000
    );

    await browser.execute(function () {
      document
        .querySelector(
          'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon"]'
        )
        .click();
    });
    // browser.pause();

    await browser.waitForElementVisible(
      'div[class="d-flex py-1 mt-1"] span',
      5000
    );
    await browser.execute(function () {
      document.querySelector('div[class="d-flex py-1 mt-1"] span').click();
    });
    MyDashboard.expect.url().to.contain("my-profile");
  });

  it("17. Verify user should be able to click on points and redirect to profile page", async function (browser) {
    browser.back();
    await browser.waitForElementVisible(
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2)",
      5000
    );

    await browser.execute(function () {
      document
        .querySelector(
          "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(2)"
        )
        .click();
      // browser.pause();
    });
    MyDashboard.expect.url().to.contain("my-profile");
  });

  it("18.  Verify user should be able to click on Overall ranks and redirect to profile page", async function (browser) {
    browser.back();
    await browser.waitForElementVisible(
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3)",
      5000
    );

    await browser.execute(function () {
      document
        .querySelector(
          "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-dashboard:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-overall-my-contributions:nth-child(1) > div:nth-child(1) > div:nth-child(3)"
        )
        .click();
    });
    MyDashboard.expect.url().to.contain("my-profile");
  });

  it("19. Verify user should be able to click on Overall score and redirect to profile page", async function (browser) {
    browser.back();
    await browser.waitForElementVisible(
      'div[class="card cursor-pointer py-4"] div:nth-child(4)',
      5000
    );
    await browser.execute(function () {
      document
        .querySelector('div[class="card cursor-pointer py-4"] div:nth-child(4)')
        .click();
    });
    MyDashboard.expect.url().to.contain("my-profile");
  });

  it("16. Verify user should be able to Logout through Settings button", async function () {
    await browser.waitForElementVisible(
      'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon',
      5000
    );

    await browser.execute(function () {
      document
        .querySelector(
          'ul[class="navbar-nav justify-content-end"] app-dropdown-wrapper div[class="position-relative"] div[class="pt-2"] li[class="icon nav-item dropdown px-2 d-flex align-items-center justify-content-center"] a[class="nav-link text-body p-0 text-white"] div i[class="material-icons user-icon'
        )
        .click();
    });

    await browser.waitForElementVisible('div[class="d-flex py-1"] span', 5000);

    await browser.execute(function () {
      document.querySelector('div[class="d-flex py-1"] span').click();
    });

    MyDashboard.expect.url().to.contain("auth.go1percent.com");
    // browser.pause();
  });
});
