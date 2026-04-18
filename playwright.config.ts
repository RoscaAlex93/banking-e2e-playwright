import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  fullyParallel: true,

  retries: 0,

  reporter: 'html',

  use: {
    baseURL: 'http://localhost:8080',

    headless: false, // vezi browser-ul

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'], // Safari-like
      },
    },
  ],
});