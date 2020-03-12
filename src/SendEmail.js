require('dotenv').config();
const execute = require('./utils/execute');
const webdriver = require('selenium-webdriver'), { By, until, Key } = require('selenium-webdriver'), chrome = require('selenium-webdriver/chrome');
options = new chrome.Options();
options.addArguments('headless');
options.addArguments('disable-gpu');

const URL = 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1584038731&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3dc84d4079-6f7b-676a-2d5e-ea6eee5300d3&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015';
 
const start = async () => {
    let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().headless())
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    await driver.get(URL);




    const typeEmail = async () => {
        await driver.findElement(By.id('i0116')).sendKeys(process.env.EMAIL);
        await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
    };

    const typePassword = async () => {
        await driver.findElement(By.xpath('//*[@id="i0118"]')).sendKeys(process.env.PASSWORD);
        await driver.findElement(By.xpath('//*[@id="idSIButton9"]')).click();
    };

    const clickToNewMessage = async () => {
        await driver.findElement(By.xpath('//*[@id="id__3"]')).click();
    };

    const emailTo = async () => {
        await driver.findElement(By.className('ms-BasePicker-input pickerInput_ecad0f63')).click();
        await driver.findElement(By.className('ms-BasePicker-input pickerInput_ecad0f63')).sendKeys('willianleman@hotmail.com');

    };

    const subjectTo = async () => {
        await driver.findElement(By.className('_4utP_vaqQ3UQZH0GEBVQe B1QSRkzQCtvCtutReyNZ _3BPbKk5i3nczB3IlZG0FaR _17ghdPL1NLKYjRvmoJgpoK')).click();
        await driver.findElement(By.className('_4utP_vaqQ3UQZH0GEBVQe B1QSRkzQCtvCtutReyNZ _3BPbKk5i3nczB3IlZG0FaR _17ghdPL1NLKYjRvmoJgpoK')).sendKeys('ola tudo bem');

    };

    const sendEmail = async () => {
        await driver.findElement(By.id('id__1110')).click();
    };

    execute(typeEmail, 1);

    execute(typePassword, 5);

    execute(clickToNewMessage, 17);

    execute(emailTo, 20);

    execute(subjectTo, 20);

    execute(sendEmail, 20);
};


start();




