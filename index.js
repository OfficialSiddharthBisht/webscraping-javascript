const puppeteer = require("puppeteer");
const fs = require('fs/promises'); 
// we don't have to write massive callback code by fs/promises

async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://learnwebcode.github.io/practice-requests/")

    const names = await page.evaluate(()=>{
        let nodelist = document.querySelectorAll(".info strong"); //will retrun node list of elements
        return Array.from(nodelist).map(x =>x.textContent)
    })

    await fs.writeFile("./names/names.txt",names.join("\n"));
    await browser.close();
}

start();