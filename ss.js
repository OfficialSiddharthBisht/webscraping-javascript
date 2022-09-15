const puppeteer = require("puppeteer");

async function webScrap(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    await page.screenshot({path:"./screenshot/amazing.png"});

    // for full page screeshot
    const page1 = await browser.newPage();
    await page1.goto("https://en.wikipedia.org/wiki/JavaScript");
    await page1.screenshot({path:"./screenshot/fullpage.png",fullPage:true});
    await browser.close();
}


webScrap();