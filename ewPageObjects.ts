import {
    By,
    until,
    WebDriver
  } from "selenium-webdriver";

  const chromedriver = require("chromedriver");

  export class enterWanted{
    url: string ='https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html'
    driver: WebDriver
    Header: By = By.css('input[name="hdrInput"]');
    MKE: By = By.css('input[name=Input}');
    OriginatingAgencyIdentifier: By = By.css('input["name=oriInput"]');
    Name: By=By.css('input["name=namInput"]');
    Sex: By=By.css('[name="sexInput"]');
    Race: By=By.css('[name="racInput"]');
    Height: By=By.css('[name="hgtInput"]');
    Weight: By=By.css('[name="wgtInput"]');
    Hair: By=By.css('[name="haiInput"]')
    Offense: By=By.css('[name="offInput"]')
    dateOfWarrent: By=By.css('[name=dowInput"]')
    Submit: By=By.id("saveBtn")

    constructor (driver: WebDriver) {
        this.driver= driver
    }

    async navigate() {
        await this.driver.get(this.url)
        expect(await this.driver.getTitle()).toBe("Enter Wanted")
        console.log(await this.driver.getTitle())
    }
    async headerKeys (headerKeys: string) {
      await this.driver.findElement(this.Header).sendKeys(`${headerKeys}`)  
  }
    async save(){
      await this.driver.wait(until.elementLocated(this.Submit))
      await (await this.driver.findElement(this.Submit)).click()
    }
    

}
