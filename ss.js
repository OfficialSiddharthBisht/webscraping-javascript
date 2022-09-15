const puppeteer = require("puppeteer");

async function webScrap(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await page.screenshot({path:"./screenshot/amazing.png"});
    await browser.close();
}


webScrap();