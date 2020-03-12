require('dotenv').config();
const execute = require('./utils/execute');
const webdriver = require('selenium-webdriver'), { By, until, Key } = require('selenium-webdriver'), chrome = require('selenium-webdriver/chrome');
options = new chrome.Options();
options.addArguments('headless');
options.addArguments('disable-gpu');

const URL = 'https://www.maxmilhas.com.br/';

const start = async () => {
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        // .setChromeOptions(new chrome.Options().headless())
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    await driver.get(URL);




    const SetFromLocation = async () => {
        await driver.findElement(By.xpath('//*[@id="panel-0"]/div/div[2]/div/div[2]/div[1]/div[1]')).click();
        await driver.findElement(By.xpath('//*[@id="panel-0"]/div/div[2]/div/div[2]/div[1]/div[2]/div/div[1]/input')).sendKeys('Porto Alegre');
    };

    const SetToLocation = async () => {
        await driver.findElement(By.xpath('//*[@id="panel-0"]/div/div[2]/div/div[2]/div[2]/div[1]')).click();
        await driver.findElement(By.xpath('//*[@id="panel-0"]/div/div[2]/div/div[2]/div[2]/div[2]/div/div[1]/input')).sendKeys('Porto, Portugal');
    };

    execute(SetFromLocation, 5);
    execute(SetToLocation, 5);

};


start();




