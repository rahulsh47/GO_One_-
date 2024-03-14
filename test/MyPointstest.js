const myPoints = browser.page.MyPoints();

describe("MyPoints Test Cases", function(){
    myPoints.navigate();
    myPoints.maximizeWindow();
});

it("1. Successful Login", async function () {
    // await browser.waitForElementVisible('')
    await myPoints.Login("testemployee", "testemployee");
    await browser.execute('document.querySelector("#kc-login").click();');
    // browser.pause();
  });