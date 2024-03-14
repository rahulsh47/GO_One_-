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

  it("2. Verify user should be able to see the all the activities on the My activity", function (browser) {
    browser.waitForElementVisible(".card.tab-card.py-5.px-4", 5000);
    myActivity.expect.element(".card.tab-card.py-5.px-4").to.be.visible;
  });

  it("3. Verify appropriate points should be added according to the contribution . - Version1 ", async function (browser) {
    browser.expect.element(
      "body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(62) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > span:nth-child(1)"
    ).to.be.visible;
  });

  it("4. Verify that the user can be able to see the time for all Activity.", function (browser) {
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
