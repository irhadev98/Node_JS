import express from "express";

const app = express();

app.get('/', (req, res) => {
    return res.send("Hello from Homepage")
});
app.get('/about', (req, res) => {
    return res.send("Hello from About page")
});

// this is how to handle query parameters
// app.get('/about', (req, res) => {
//     return res.send(`Hey ${req.query.name}`)
// });

app.listen(3000, () => {
    console.log("Server Started");
}) 
