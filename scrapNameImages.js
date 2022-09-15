const puppeteer = require("puppeteer");
const fs = require('fs/promises'); 
// we don't have to write massive callback code by fs/promises

async function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://learnwebcode.github.io/practice-requests/")

    // * Web Scraping Names
    const names = await page.evaluate(()=>{
        let nodelist = document.querySelectorAll(".info strong"); //will retrun node list of elements
        return Array.from(nodelist).map(x =>x.textContent)
    })

    await fs.writeFile("./names/names.txt",names.join("\n"));
    
    // * Web Scraping photos
    // instead pf arr.from and all we can select multiple elements by $$eval("css slector",function(array having css seletor elements))
    const photos = await page.$$eval("img", (imgs)=>{
        return imgs.map(x => x.src);
    })

    for(const photo of photos){
        const imagePage = await page.goto(photo);
        await fs.writeFile("./images/"+photo.split("/").pop(),await imagePage.buffer());
    }
    // web scraping code after this won't work since goto is pointing to different pages for images
    await browser.close();
}

start();