// for sync or blocking code 

    // const fs = require('fs') // 2nd

    // console.log("Top level code1"); // 1st

    // const result = fs.readFileSync('contacts.txt', 'utf-8')
    // console.log(result); //3rd


    // console.log("Top level code 2"); //4rth



// for async or non blocking code


const fs = require('fs') //2nd
console.log("Top level code1"); //1st


setTimeout(() => {
    console.log("setTimeout 1");
},0) //3rd
setImmediate(() => {
    console.log("setImmediate 1");
}) //4rth

fs.readFile('contacts.txt', 'utf-8', (err , result) => {
    
    if (err) throw err;
    console.log(result); //5th

    setTimeout(() => {
    console.log("setTimeout 2");
    },0) //8th
    setTimeout(() => {
        console.log("setTimeout 3");
    },5*1000) //9th
    setImmediate(() => {
    console.log("setImmediate 1");
    }) //7th
console.log("Top level code 2"); //6th
})