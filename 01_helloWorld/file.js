// ways to use fs module

// 1.  the synchronous API

//    use commonjs method, freezes the execution untill file operations finishes

const fs = require('node:fs')

fs.writeFileSync('test.txt' , 'Hey There')

const result = fs.readFileSync('test.txt', 'utf-8')
console.log(result);


// 2. the callback API (asynchoronous)

   // use common js method and traditional callback function and is asynchronous

const fs = require('node:fs')

fs.writeFile('test.txt', 'hello', (err) => {
    if(err) throw err;
    console.log("file created successfully");
    
})

fs.readFile('test.txt', 'utf-8', (err, result) => {
    if(err) throw err;
    console.log(result);
    
})


// 3. promise based API
 
   // modern , use ES Module , use async await , Asynchronous 

import fs from "node:fs/promises";

async function handlefile() {
    try {
        // write file
        await fs.writeFile('test.txt', 'hello world')
        console.log("file written successfully");

        //read file
        const result = await fs.readFile('test.txt', 'utf-8')
        console.log(result);
        
    } catch (error) {
        console.log("error", error);
        
    }
}
handlefile();