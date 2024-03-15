const myActivity = browser.page.MyActivity();
const global = browser.globals;

describe("GO1% Dashboard", function () {
  before(function (browser) {
    myActivity.navigate();
    myActivity.maximizeWindow();
  });

  it("1. Successful Login", async function (browser) {
    await myActivity.Login(global.username, global.password);
    await browser.execute(function () {
      document.querySelector("#kc-login").click();
    });
  });

  it("2. verify Activity ", async function (browser) {
    await browser.waitForElementVisible(".material-symbols-outlined.hex", 5000);
    await browser.execute(
      'document.querySelector(".material-symbols-outlined.hex").click();'
    );
    browser.assert.urlContains("my-profile");
  });

  it("3. Verify user should be able to see the all the activities on the My activity", function (browser) {
    browser.waitForElementVisible(".card.tab-card.py-5.px-4", 5000);
    myActivity.expect.element(".card.tab-card.py-5.px-4").to.be.visible;
  });

  // it("4. Verify appropriate points should be added according to the contribution . - Version1 ", async function (browser) {
  //   browser.expect.element(
  //     "body > app-root > div > app-main > section > main > div > div > div > app-my-profile > div > div.col-lg-8 > div:nth-child(3) > app-my-activity > div > div > div:nth-child(17) > div > div.content.w-98.d-flex > div.w-15.points-section.d-flex.align-items-start.justify-content-end > span"
  //   ).to.be.visible;
  // });

  it("5. Verify that the user can be able to see the time for all Activity.", function (browser) {
    const activitySelector = ".container.right";
    browser.elements("css selector", activitySelector, function (result) {
      const numberOfActivities = result.value.length;
      //Iterating over all the Activity present to check whether the Time is Visible
      for (let i = 1; i <= numberOfActivities; i++) {
        const activityTimeSelector = ".display-time";
        browser.assert.visible(activityTimeSelector);
      }
    });
  });

  it("6. Verify user should see Add a contribution button when no contribution has been added by the user", async function (browser) {
    await browser.waitForElementVisible(
      ".nav-item.my-1.cursor-pointer.text-bold.p-2:nth-child(3)",
      5000
    );
    await browser.execute(function () {
      document
        .querySelector(
          ".nav-item.my-1.cursor-pointer.text-bold.p-2:nth-child(3)"
        )
        .click();
    });
    browser.assert.visible(".material-icons-outlined.opacity-10.addIcon");
  });
});
