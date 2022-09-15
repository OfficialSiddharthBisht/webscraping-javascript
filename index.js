const puppeteer = require("puppeteer");
const fs = require('fs/promises'); 
// we don't have to write massive callback code by fs/promises

async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://learnwebcode.github.io/practice-requests/")
    

    await browser.close();
}

start();