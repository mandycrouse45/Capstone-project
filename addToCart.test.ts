import { basePage } from "../practice/basePage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new basePage(driver);

test("it works", async () => {
  await page.navigate();
  await page.getHeader();
  await page.sortBy();
  await page.lowPrice();
  await page.lowestPrice();
  await page.addCart();
  await page.cartLogo();
  await driver.sleep(5000);
});
 afterAll(async () => {
  await driver.quit();
});