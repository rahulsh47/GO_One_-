const { commands } = require("./MyActivity");

module.exports = {
    url : "https://nashtechglobal.qa.go1percent.com/",

    elements: {
        Username: {
            selector: "#username",
            locatorStrategy: "css selector",
          },
          Password: {
            selector: "#password",
            locatorStrategy: "css selector",
          },
          SignInButton: {
            selector: "#kc-login",
            locatorStrategy: "css selector",
          },
    },

    commands: [
        {
            Login: function (username, password) {
                return this.setValue("#username", username).setValue(
                  "#password",password);
                // .click('@SignInButton')
              }
        }
    ]
}