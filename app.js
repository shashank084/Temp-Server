
const dotenv = require("dotenv")

const express = require('express');
const app = express();

const connection = require('./db/conn');
connection();

dotenv.config({path:'./config.env'});

require('./db/conn');

const User = require('./model/userSchema');

//app.use(require('./router/auth'));

//const PORT = process.env.PORT;

const PORT = process.env.PORT || DEFAULT_PORT;

//middleware

const middlware = (req,res,next) => {
    console.log('hello');
    next();
}

app.get('/', (req, res) => {
    res.send("Hello earth");
});

app.get('/pricing', (req, res) => {
    res.send("pricing");
});

app.get('/about', middlware, (req, res) => {
    res.send("about");
});

app.get('/services', (req, res) => {
    res.send("services");
});

app.get('/contact', (req, res) => {
    res.send("contact");
});

app.get('/login', (req, res) => {
    res.send("login");
});

app.get('/signup', (req, res) => {
    res.send("signup");
});

app.listen(PORT, () => {
    console.log('server is running');
})
