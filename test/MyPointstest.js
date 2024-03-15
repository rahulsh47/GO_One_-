const MyPoints = require("../nightwatch/page-objects/MyPoints");

const mypoints = browser.page.MyPoints();
const global = browser.globals;

describe("MyPoints Test Case", function () {
  before(function (browser) {
    mypoints.navigate();
    mypoints.maximizeWindow();
    mypoints.Login(global.username, global.password);
    browser.execute('document.querySelector("#kc-login").click();'); // Successful Login
  });

  it("Navigate to My Points Section", async function (browser) {
    await browser.waitForElementVisible(".material-symbols-outlined.hex", 5000);
    await browser.execute(
      'document.querySelector(".material-symbols-outlined.hex").click();' // click profile
    );

    await browser.waitForElementVisible(
      ".nav-item.my-1.cursor-pointer.text-bold.p-2:nth-child(2)",
      5000
    );
    await browser.execute(function () {
      document
        .querySelector(
          ".nav-item.my-1.cursor-pointer.text-bold.p-2:nth-child(2)"
        )
        .click();
    });
  });

  it("1. Verify that user can view the current month's score and the division of contributions", function (browser) {
    mypoints.expect.element("@MonthScore").to.be.visible;
  });

  it("2.  Verify that user can open all the contribution's drop down and read the title", async function (browser) {
    await browser.waitForElementVisible(".mt-3.date-bar.button-class", 5000);
    await browser.execute(function () {
      document.querySelector(".mt-3.date-bar.button-class").click();
    });
  });

  it("3. Verify that user can click on the chart, which opens the drop down and highlight the type of contribution", async function (browser) {
    await browser.waitForElementVisible(
      ".material-icons.opacity-10.fs-4.point-cursor.d-flex.justify-content-end.mt-n4",
      5000
    );
    await browser.execute(function () {
      document
        .querySelector(
          ".material-icons.opacity-10.fs-4.point-cursor.d-flex.justify-content-end.mt-n4"
        )
        .click();
    });
  });

  it("4. Verify that user is able to change the month which changes the chart and the contribution", async function (browser) {
    await browser.waitForElementVisible(
      'input[placeholder="Select Month"]',
      5000
    );
    await browser.execute(function () {
      document.querySelector('input[placeholder="Select Month"]').click();
    });
    await browser.waitForElementVisible(
      "body > bs-datepicker-container > div > div > div > div > bs-month-calendar-view > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(1) > td:nth-child(2) > span",
      5000
    );
    await browser.execute(function () {
      document
        .querySelector(
          "body > bs-datepicker-container > div > div > div > div > bs-month-calendar-view > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(1) > td:nth-child(2) > span"
        )
        .click();
    });
  });

  it("5. Verify when the user hovers on the chart the contribution name should be displayed", function (browser) {
    browser.waitForElementVisible(
      "body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-points > div > div > div > div > div.col-xl-6.col-lg-6.divider > div > div.col-12.block.border-0.col-xl-10.mx-auto.pl-2 > div > app-profile-pie-chart > div > div:nth-child(1) > canvas",
      5000
    );
    browser.moveToElement(
      "body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-points > div > div > div > div > div.col-xl-6.col-lg-6.divider > div > div.col-12.block.border-0.col-xl-10.mx-auto.pl-2 > div > app-profile-pie-chart > div > div:nth-child(1) > canvas",
      10,
      10
    );
  });

  it("6. Verify user can see all time score", async function (browser) {
    await browser.execute(function () {
      document.querySelector(".mt-3.date-bar.button-class").click();
    });
    mypoints.expect.element(".mt-3.date-bar.button-class").to.be.visible;
  });

  //   it('7. Verify all time scores equals the scores on each contribution type',async function(browser){
  // Having confusion in the Test Case , UI is having All Score = 0 and contributions are having multiple marks available
  //   })
});
