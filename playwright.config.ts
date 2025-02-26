import { PlaywrightTestConfig } from '@playwright/test';

const RPconfig = {
  apiKey: 'demotest_w3q6VWH9Rj2Bbo6OOqDZ_b_6YIQD3mkXouKVz3NcOd_dI8HdTuLYERA1Gz5iqmUm',
  endpoint: 'https://demo.reportportal.io/api/v1',
  project: 'PRATHAMESH171994_PERSONAL',
  launch: 'PRATHAMESH171994_PERSONAL',
  attributes: [
    {
      key: 'attributeKey',
      value: 'attributeValue',
    },
    {
      value: 'attributeValue2',
    },
  ],
  description: 'Demo tests',
};

const config: PlaywrightTestConfig = {
  reporter: [['@reportportal/agent-js-playwright', RPconfig]],
  testDir: './tests',

  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false
  },
};
export default config;