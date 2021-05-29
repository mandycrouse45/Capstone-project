import { By, until, WebDriver } from "selenium-webdriver";

export class basePage {
    driver: WebDriver;
    url: string = "https:www.westrek-hunting.com";
    hatsHeader: By = By.className("featured-card featured-card--contain");
    sortByHeader: By = By.id("SortBy");
    priceLowToHigh: By = By.css('option[value="price-ascending"]');
    cheapestHat: By = By.xpath('(//div[@class="product-card__info"])[1]')
    addToCart: By = By.id("AddToCart-product-template");
    goToCart: By = By.xpath('//button[text()="Buy it now"]')
    checkOut: By = By.name("checkout");

  constructor(driver: WebDriver) {
        this.driver = driver;
  }
  async navigate() {
      await this.driver.get(this.url);
      await this.driver.manage().window().maximize()
  }
  async getHeader() {
      await this.driver.wait(until.elementLocated(this.hatsHeader));
      await (await this.driver.findElement(this.hatsHeader)).click();
  }
  async sortBy() {
    await this.driver.wait(until.elementLocated(this.sortByHeader));
    await (await this.driver.findElement(this.sortByHeader)).click();
  }
  async lowPrice() {
    await this.driver.wait(until.elementLocated(this.priceLowToHigh));
    await (await this.driver.findElement(this.priceLowToHigh)).click();
  }
  async lowestPrice() {
    await this.driver.wait(until.elementLocated(this.cheapestHat));
    await (await this.driver.findElement(this.cheapestHat)).click();
  }
  async addCart() {
    await this.driver.wait(until.elementLocated(this.addToCart));
    await (await this.driver.findElement(this.addToCart)).click();
  }
  async cartLogo() {
    await this.driver.wait(until.elementLocated(this.goToCart));
    await (await this.driver.findElement(this.goToCart)).click();
  }
}