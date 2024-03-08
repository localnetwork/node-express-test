const express = require('express'); 
const userModel = require('./models/userModel')

const port = 3000; 
const app = express();


app.use(express.json());
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})


app.post('/users', (req, res) => {
    userModel.createUser(req,res); 
})
app.get('/users', (req, res) => {
    userModel.getUsers(res); 
})


app.patch('/users/:id', (req, res) => {
    userModel.updateUser(req,res); 
})
