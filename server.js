require('dotenv').config();
const webdriver = require('selenium-webdriver'),
    { By, until, } = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');

options = new chrome.Options();
options.addArguments('headless');
options.addArguments('disable-gpu');


const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

await driver.get('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1582134081&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3d98f375dd-d7f1-dd06-faa3-444ff941d81c&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015');


const SetEmailInput = async () => {
    await driver.findElement(By.id('i0116')).sendKeys(process.env.EMAIL);
    await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();

    await SetPasswordInput();
};

const SetPasswordInput = async () => {
    await driver.findElement(By.xpath('//*[@id="i0118"]')).sendKeys(process.env.PASSWORD);
    await (await driver.findElement(By.xpath('//*[@id="idSIButton9"]'))).click();
};

SetEmailInput();



