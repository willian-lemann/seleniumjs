const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const {Builder, By, Key, until} = require('selenium-webdriver');

const screen = {
  width: 640,
  height: 480
};

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless().windowSize(screen))
    .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
    .build();