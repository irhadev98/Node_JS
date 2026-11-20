import http from "node:http";
import fs from "node:fs/promises"

// const myServer = http.createServer((req , res) => {
//     console.log("New Req Rec.");
//     res.end("Hello From Server")
// })

// myServer.listen(8000,() => console.log("Server Started"));

// creating a log file of incoming requests


const myServer = http.createServer((req , res) => {
    const log = `${Date.now()} : ${req.url} New Req Received\n`
    console.log("New Req Rec.");

    fs.appendFile('log.txt', log, (err , data) => {
        switch (req.url) {
            case "/":
                res.end("Homepage")
                break;
            case "/about":
                res.end("My name is Irha Akram")
                break;
        
            default:
                res.end("404 Not Found");
        }
    })
})

myServer.listen(8000,() => console.log("Server Started"));