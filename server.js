const express = require('express');
const app = express();
const port = 8888;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const { userProfile } = require('./db');

app.listen(port, ()=>{
    console.log("start server at port " + port);
});

app.get('/getData', (req, res) => {
    res.json({'msg' : req.query.msg });
});

app.post("/request", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.json({ username: username, password: password});
});

app.post('/user-save', (req, res)=>{
    userProfile.create({ 
        userName: req.body.userName, 
        passWord: req.body.passWord,
    }).then((userSave) => {
        res.json({ userSave });
    });
});

app.get('/data-postgresSQL', (req, res) => {
    userProfile.findAll().then((item)=>{
        console.log("item = " + item);
        res.json(item);
    });
});