import http from "node:http";
import fs from "node:fs/promises"

// const myServer = http.createServer((req , res) => {
//     console.log("New Req Rec.");
//     res.end("Hello From Server")
// })

// myServer.listen(8000,() => console.log("Server Started"));

// creating a log file of incoming requests


// const myServer = http.createServer((req , res) => {
//     const log = `${Date.now()} : ${req.url} New Req Received\n`
//     console.log("New Req Rec.");

//     fs.appendFile('log.txt', log, (err , data) => {
//         switch (req.url) {
//             case "/":
//                 res.end("Homepage")
//                 break;
//             case "/about":
//                 res.end("My name is Irha Akram")
//                 break;
        
//             default:
//                 res.end("404 Not Found");
//         }
//     })
// })

// myServer.listen(8000,() => console.log("Server Started"));

// *******URL ********

import url from "node:url";

const myServer = http.createServer((req , res) => {
    const log = `${Date.now()} : ${req.method} ${req.url} New Req Received\n`

    const myUrl = url.parse(req.url, true)
    console.log(myUrl);
    
    console.log("New Req Rec.");

    fs.appendFile('log.txt', log, (err , data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("Homepage")
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`hi ${username}`)
                break;
            case "/search":
                const search = myUrl.query.search_query
                res.end(`here are your reasults for`+search)
                break;
            case "/signup":
                if (req.method === GET) {
                    req.end("this is a signup form")
                }else if (req.method === POST) {
                    // DB query
                    req.end("success")
                }
                break;
        
            default:
                res.end("404 Not Found");
        }
    })
})

myServer.listen(8000,() => console.log("Server Started"));