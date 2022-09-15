const fs = require('fs/promises');

async function start(){
    let names = ["siddharth","sid","siddhu"];
    await fs.writeFile("fsname.txt",names.join("\n"));
}

start();