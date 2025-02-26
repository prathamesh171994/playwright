# Playwright Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-green)](https://playwright.dev/)
[![License](https://img.shields.io/github/license/prathamesh171994/playwright)](LICENSE)

## Overview
This repository contains an automation framework built using [Playwright](https://playwright.dev/) for end-to-end (E2E) testing of web applications. Playwright is a powerful browser automation library that supports Chromium, Firefox, and WebKit.

## Features
- Cross-browser testing (Chromium, Firefox, WebKit)
- Headless and headed execution modes
- Automatic retries and smart waiting
- Screenshots and video recording
- Parallel execution support
- CI/CD integration

## Installation
Ensure you have [Node.js](https://nodejs.org/) installed (recommended version: LTS).

1. Clone the repository:
   ```sh
   git clone https://github.com/prathamesh171994/playwright.git
   cd playwright
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running Tests
### Run all tests:
```sh
npx playwright test
```

### Run tests in headed mode:
```sh
npx playwright test --headed
```

### Run tests in a specific browser:
```sh
npx playwright test --browser=chromium
```

### Run a specific test file:
```sh
npx playwright test tests/example.spec.ts
```

### Generate and view test report:
```sh
npx playwright test --reporter=html
npx playwright show-report
```

## Folder Structure
```
playwright/
│-- tests/          # Test cases
│-- pages/          # Page Object Models
│-- utils/          # Utility functions
│-- playwright.config.ts  # Playwright configuration
│-- package.json    # Project dependencies
```

## CI/CD Integration
You can integrate this framework with CI/CD pipelines using GitHub Actions, Jenkins, or any CI tool of your choice. Example GitHub Actions workflow:

```yaml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run tests
        run: npx playwright test
      - name: Upload test results
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/