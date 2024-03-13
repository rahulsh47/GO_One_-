# GO1% Automation with Nightwatch Js

## Overview
This project aims to automate the testing of various components of the GO1% website using Nightwatch.js. The automated tests cover functionalities such as user login, activity tracking, dashboard interactions.

## Features
- Login Testing: Automated tests verify the login functionality to ensure users can authenticate successfully.

- Activity Testing: The project includes automated tests to verify the tracking and display of user activities.

- Dashboard Testing: Tests are written to validate the behavior and interactions on the user dashboard, including navigation and content display.

## Acknowledgements

 - [NightwatchJs](https://nightwatchjs.org/)
 - [ReallyMello](https://youtube.com/playlist?list=PLLS_Ef55N6hmkt3-JlW40GAGpXSlp8t_D&feature=shared)
 - [BrowserStack](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/nightwatch)
 
## Installation

Install and Setup the Nightwatch in Project

```bash
  npm install nightwatch
```
Command to install chromedriver
```bash
  npm install chromedriver
```

## How to Use

- Clone the repository to your local machine.
- Install dependencies using npm install or npm i.
- Run the tests using the command npm test.


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

To run single test, run the following command

```bash
  npx nightwatch test_folder/path_to_test_file
```
For example

```bash
  npx nightwatch test/MyDashboardtest.js
```

## Tech Stack

**Automation Framework:** NightwatchJs

**Language:** Javascript


![Logo](https://opensenselabs.com/sites/default/files/inline-images/Screen%20Shot%202019-02-10%20at%2010.17.57%20PM.png)







