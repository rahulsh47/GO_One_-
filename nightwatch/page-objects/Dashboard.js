// const { elements, commands } = require("./Loginpage");

module.exports = {
    url : 'https://nashtechglobal.qa.go1percent.com/',

    elements: {
        Username: {
            selector: '#username',
            locatorStrategy: 'css selector',
        },
        Password: {
            selector: '#password',
            locatorStrategy: 'css selector',
        },
        SignInButton: {
            selector: '#kc-login',
            locatorStrategy: 'css selector',
        },
        Settings: {
            selector: '.text-white.user-rank'
         
        },
        Profile: {
            selector: '.d-flex.py-1.mt-1',
            locatorStrategy: 'css selector',
        },
        ActivityCard: {
            selector: '.card.tab-card.py-5.px-4',
            locatorStrategy: 'css selector',
        },
        ContributionButton: {
            selector: '.nav-item.my-1.cursor-pointer.text-bold.p-2:nth-child(3)',
            locatorStrategy: 'css selector'
        },
        ScoringIcon:{
            selector: ".nav-link.pe-0.text-white.font-weight-bolder"
        },
    },
    commands: [
        {
            Login: function(username , password){
                return this
                    .setValue('@Username',username)
                    .setValue('@Password',password)
                    .click('@SignInButton') 
            },
            ClickSettings: function(){
                return this
                    .waitForElementVisible('@Settings', 10000)
                    .click('@Settings')
            },
            ClickProfile: function(){
                return this 
                    .waitForElementVisible('@Profile' , 5000)
                    .click('@Profile')
            },
            ClickContributionButton: function(){
                return this
                    .waitForElementVisible('@ContributionButton',10000)
                    .click('@ContributionButton')
            },
            ClickScoringIcon: function(){
                return this
                    .waitForElementVisible('@ScoringIcon',10000)
                    .click('@ScoringIcon')
            }
        }
    ]
}