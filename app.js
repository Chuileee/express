const http = require('http');
const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware - express');
    next();
});

app.use((req, res, next) => {
    console.log('In the another middleware - express');
    res.send('<h1>This is my first application.</h1>');
});

app.listen(3000);