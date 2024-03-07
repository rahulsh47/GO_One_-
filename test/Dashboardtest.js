const dashboard = browser.page.Dashboard();

describe('GO1% Dashboard',function(){
    before(function(browser){
        dashboard.navigate();
        dashboard.maximizeWindow()
    });

    it('1. Successful Login',function(browser){
        dashboard.Login('testemployee' , 'testemployee');
    });

    // it("2. verify Activity ",function(browser){
    //     // browser.pause(2000);
    //     dashboard.ClickSettings();
    //     dashboard.ClickProfile();
    //     dashboard.expect.element('@ActivityCard').visible
    // })

    it('2. Verify user should be able to see the all the activities on the My activity',async function(browser){
        dashboard.waitForElementVisible('body',5000)
        await browser.execute('document.querySelectorAll(".material-icons.user-icon")[1].click();');
        // await browser.pause(1000);
        await browser.execute('document.querySelector(".dropdown-menu-item:nth-child(1) .dropdown-item.border-radius-md").click();');
        // browser.pause();
        browser.assert.visible('.card.tab-card.py-5.px-4');
    });

    // it('3. Verify appropriate points should be added according to the contribution . - Version1 ',async function(browser){
    //     browser.waitForElementVisible('.timeline.w-100.mx-1', 5000);

    //     await browser.execute(function(){
    //         var activitycard = document.querySelector('.timeline.w-100.mx-1');
    //         var contributionsContainer = activitycard.querySelector('.timeline.w-100.mx-1');
    //         contributionsContainer.scrollTop = contributionsContainer.scrollHeight;
    //     });
    //     await browser.pause(1000);
    //     browser.assert.visible('body > app-root:nth-child(1) > div:nth-child(1) > app-main:nth-child(2) > section:nth-child(1) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-my-profile:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-my-activity:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(299) > div:nth-child(1) > div:nth-child(3)');
    // })

    it('4. Verify that the user can be able to see the time for all Activity. - Version1',function(browser){
        const activitySelector = '.container.right';
        browser.elements('css selector' , activitySelector , function(result){
            const numberOfActivities = result.value.length;
            //Iterating over all the Activity present to check whether the Time is Visible 
            for(let i=1 ; i<=numberOfActivities ; i++){
                const activityTimeSelector = '.display-time';
                browser.assert.visible(activityTimeSelector);
            }
        })
    });

    
    // it('6. Verify user should see Add a contribution button when no contribution has been added by the user',async function(browser){
    //     dashboard.waitForElementVisible('body',10000)
    //     await browser.execute(dashboard.ClickContributionButton);
    //     browser.pause();
    //     // browser.assert.visible('.btn.btn-primary.addRewardBtn.px-2.mt-n1');
    // });
})