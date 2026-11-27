import express from "express";
import users from "./MOCK_DATA.json" with {type: 'json'};

const app = express();
const PORT = 8000;

//Routes
app.get('/users', (req , res) => {
    const hmtl = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}`).join("")}
    </ul>
    `
    res.send(hmtl)
})

// REST API
app.get('/api/users', (req , res) => {
    return res.json(users);
})

app.get('/api/users/:id', (req , res)=> {
    const id =Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
app.post('/api/users', (req , res) => {
    //create the user
    return res.json({status : "Pending"});
})
app.patch('/api/users/:id', (req , res) => {
    //Edit the user with id
    return res.json({status : "Pending"});
})
app.delete('/api/users/:id', (req , res) => {
    //delete the user with id
    return res.json({status : "Pending"});
})


// how to combine them if they have same path
// app.route('/api/users/:id')
// .get((req , res)=> {
//     const id =Number(req.params.id);
//     const user = users.find((user) => user.id === id)
//     return res.json(user)
// })
// .patch((req , res) => {
//     //Edit the user with id
//     return res.json({status : "Pending"});
// })
// .delete((req , res) => {
//     //delete the user with id
//     return res.json({status : "Pending"});
// })

app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));