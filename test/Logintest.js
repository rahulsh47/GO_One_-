const Loginpage = browser.page.Loginpage();

describe('GO1% Login Elements', function(){
    before(function(browser){
        Loginpage.navigate();
        Loginpage.maximizeWindow();
    }); 

    it('1. Verify the Logo , Carousel Image , Carousel Caption & Footer Message is Displayed', function(browser){
     Loginpage.expect.element('@Logo').to.be.visible
     Loginpage.expect.element('@CarouselImage').to.be.visible
     Loginpage.expect.element('@CarouselCaption').to.be.visible
     Loginpage.expect.element('@FooterMesssage').to.be.visible
    });

    it('2. Verify that tag line with text "Get 1% better Everyday is Visible"', function(browser){
        Loginpage.expect.element('@TagLine').to.be.visible
    });

    it('3. Verify that Carousel Image changes while clicking on the Carousel button', function(browser){
        Loginpage.expect.element('@CarouselSlider').to.be.visible
    });

    it('4. Verify that specific text between login options is present on the web page', function(browser){
        Loginpage.expect.element('@ViaEmail').to.be.visible
    });

    it('5.  Verify that login page heading contains text "Sign in to Go 1%" is displayed ', function(browser){
        Loginpage.expect.element('@SignInGO1percent').to.be.visible
    });

    it('6. Verify that clicking on the Microsoft logo redirects to the Microsoft login page', function(browser){
        Loginpage.clickMicrosoftLogo();
        Loginpage.getTitle(function(title){
            this.assert.equal(title , 'Sign in to your account')
        })
        browser.back();
    });

    it('7. Verify that login fails with invalid credentials and an alert message is displayed', function(browser){
       Loginpage.UnsuccesfulLogin('xyz','123');
       browser.expect.element('#input-error').text.to.contains('Invalid username or password.');
    });

    
    it('9. Verify remember me checkbox is selected during login', function(browser){
        Loginpage.RememberMeClick();
            browser.expect.element('#rememberMe').to.be.selected.before(100)
    })

    it('10. Verify the forgot Password functionality ',function(browser){
        Loginpage.ClickForgotPassword()
        Loginpage.assert.textContains('@ResetPasswordInfo', 'You should receive an email shortly with further instructions.');
    });

    it('11. Verify clicking on the "Terms of Use" link opens a new page with the terms of use', function(browser){
        Loginpage.ClickTermsofUse();
        browser.window.getAllHandles(function(result){
            const originalWindow = result.value[0];
            const handle = result.value[1];
            this.window.switch(handle)
            Loginpage.assert.urlContains('terms-of-use');
            this.window.switch(originalWindow)
        })
    });

    it('12.  Verify clicking on the "Privacy policy" link opens a new page with the privacy policy',function(browser){
        Loginpage.ClickPrivacyPolicy();
       browser.window.getAllHandles(function(result){
        const originalWindow = result.value[0];
        const handle = result.value[2];
        this.window.switch(handle)
        Loginpage.assert.urlContains('privacy-policy');
        this.window.switch(originalWindow)
       })
    });

    it('8. Verify successful login with valid credentials', function(browser){
        Loginpage.SuccesfulLogin('testemployee','testemployee');
        browser.assert.urlContains('my-dashboard');
    });

});


