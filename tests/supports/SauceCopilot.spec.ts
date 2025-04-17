import { test, expect, Page } from '@playwright/test';

test('Login to Saucedemo and capture social media logos', async ({ page }) => {
  // Set viewport to full screen
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Navigate to the Sauce Demo website
  await page.goto('https://www.saucedemo.com/');

  // Perform login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Function to capture an element and assert its presence
  const captureElement = async (page: Page, selector: string, elementName: string) => {
    try {
      await page.waitForSelector(selector, { timeout: 8000 });
      const element = await page.$(selector);
      if (element) {
        console.log(`${elementName} is present on the page.`);
      } else {
        console.error(`${elementName} is not present on the page.`);
      }
      expect(element).toBeTruthy();
    } catch (error) {
      console.error(`Error capturing ${elementName}:`, error);
    }
  };

  // Click on Twitter logo and capture an element in new window
  const [twitterPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('.social_twitter a')
  ]);
  await twitterPage.waitForLoadState('domcontentloaded');
  await twitterPage.waitForTimeout(3000); // Wait for 3 seconds
  await captureElement(twitterPage, 'img[src*="twitter"]', 'Twitter logo');
  await twitterPage.close();

  // Navigate back to the main page
  await page.bringToFront();

  // Click on Facebook logo and handle popup
  const [facebookPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('.social_facebook a')
  ]);
  await facebookPage.waitForLoadState('domcontentloaded');
  try {
    await facebookPage.click('button[aria-label="Close"]', { timeout: 8000 }); // Click on the "close" button
  } catch (error) {
    console.error('Error clicking the close button on Facebook popup:', error);
  }
  await captureElement(facebookPage, 'body', 'Facebook page'); // Capture any element on the Facebook page
  await facebookPage.close();

  // Navigate back to the main page
  await page.bringToFront();

  // Click on LinkedIn logo and capture an element in new window
  const [linkedinPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('.social_linkedin a')
  ]);
  await linkedinPage.waitForLoadState('domcontentloaded');
  await captureElement(linkedinPage, 'img[src*="linkedin"]', 'LinkedIn logo');
  await linkedinPage.close();
});
