# WebdriverIO + Cucumber Test Automation Framework

![E2E Tests](https://github.com/maseera-siddiqa/wdio-cucumber-framework/actions/workflows/ci.yml/badge.svg)

An end-to-end test automation framework for web applications, written in JavaScript. It runs automated browser tests against [the-internet.herokuapp.com](https://the-internet.herokuapp.com), a public practice site built for test automation. Tests are written in plain English (Gherkin) and run in Chrome, either on a local machine or automatically on GitHub Actions.

## What is tested

- **Login:** valid credentials show a success message, and invalid credentials show an error message.
- **Checkboxes:** toggling checkbox 1 and checkbox 2 changes their checked state.

## Tech stack

- **WebdriverIO** drives the browser
- **Cucumber (Gherkin)** describes test scenarios in plain English
- **Chai** provides assertions
- **Allure** generates HTML test reports
- **GitHub Actions** runs the tests automatically (CI)
- **Node.js 22** and **Google Chrome**

## Project structure

```
├── .github/workflows/ci.yml        # CI pipeline
├── features/
│   ├── login.feature               # Login scenarios
│   ├── checkboxes.feature          # Checkbox scenarios
│   └── step-definitions/
│       ├── loginSteps.js           # Code behind the login scenarios
│       └── checkboxSteps.js        # Code behind the checkbox scenarios
├── pages/
│   ├── loginPage.js                # Page Object for the login page
│   └── checkboxesPage.js           # Page Object for the checkboxes page
├── wdio.conf.js                    # WebdriverIO configuration
└── package.json                    # Dependencies and npm scripts
```

## How it works

The framework has three layers:

1. **Feature files** describe *what* to test, in plain English.
2. **Step definitions** connect each sentence in a feature file to code, and check the results (assertions).
3. **Page Objects** find elements on a page and perform actions on them. They never contain assertions.

## Getting started

**Prerequisites:** Node.js 22 and Google Chrome.

```bash
git clone https://github.com/maseera-siddiqa/wdio-cucumber-framework.git
cd wdio-cucumber-framework
npm install
```

## Running the tests

Run all features:

```bash
npm test
```

Run a single feature:

```bash
npx wdio run wdio.conf.js --spec features/checkboxes.feature
```

Run in headless mode (no browser window), as CI does:

```bash
CI=true npm test
```

## Reports

After a test run, generate and open the Allure report:

```bash
npm run report:generate
npm run report:open
```

When a step fails, a screenshot of the page is saved to the `screenshots/` folder.

## Continuous integration

The workflow in `.github/workflows/ci.yml` runs on every push and pull request to `main`, and can also be started manually from the Actions tab. It installs the dependencies and runs the tests in headless Chrome.

After each run it uploads the Allure results, and when a run fails it also uploads the failure screenshots. Both can be downloaded from the run's summary page.

## Design decisions

- **Page Objects report facts and never judge them.** For example, `isCheckboxSelected()` returns `true` or `false`. The `expect(...)` check lives in the step definition, where the expected result is known, so the same Page Object method can serve many scenarios.
- **The checkboxes page waits for its elements to load.** Without this, a server error page caused a confusing crash (`Cannot read properties of undefined`). Now the test fails with a clear message: "Checkboxes did not appear on the page."
- **Headless mode is only used in CI.** `wdio.conf.js` checks the `CI` environment variable, so local runs show a visible browser for debugging, and CI runs without a screen.
- **Failures keep their evidence.** Screenshots and Allure data are saved as downloadable artifacts, because the CI machine is deleted after each run.

## Known limitations

- The tests depend on a free third-party practice site, which can be slow or occasionally down. A failed run is sometimes the site and not the code.
- The checkbox scenarios rely on the page's default state (checkbox 1 unchecked, checkbox 2 checked), because toggling flips whatever state it finds. State-aware `check` and `uncheck` methods would remove that dependency.