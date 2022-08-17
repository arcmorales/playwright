# Playwright Test Automation

## Getting Started

1. Make sure your system has NodeJS installed.
2. Install all the dependencies. Run `npm install`. You should find a `node_modules` folder in your project directory aftwerwards.

## Running the tests
There are several ways to run the test.

1. To run only on chromium browser (headed) - `npx playwright test forecast.spec.ts --project=chromium --headed`
2. To run only on firefox browser (headed) - `npx playwright test forecast.spec.ts --project=firefox --headed`
3. To run only on webkit browser (headed) - `npx playwright test forecast.spec.ts --project=webkit --headed`

To run the test on all the browsers, use `npx playwright test --headed`

**NOTE: Omit `--headed` to run on headless mode.**

### Goodies
1. Uses page object model
2. Comes with a linter on pre-commit
3. Triggers github action on `push` and `pull request`
