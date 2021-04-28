const chromedriver = require("chromedriver");
import {Builder, Capabilities, By, until, WebDriver } from "selenium-webdriver"
import {enterWanted} from "../../ewPageObjects"

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const gp = new enterWanted(myDriver)

test ('Enter wanted header test', async() => {
    await gp.navigate()
    await gp.headerKeys("Ryan Jackola")
    await gp.save()
    await gp.driver.quit()
})






