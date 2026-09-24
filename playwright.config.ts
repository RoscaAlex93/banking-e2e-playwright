import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

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

    headless: false,

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testDir: './fixtures',
      testMatch: /auth\.setup\.ts/,
    },
    {
      name: 'webkit',
      use: {
        baseURL: 'http://localhost:8080',
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});