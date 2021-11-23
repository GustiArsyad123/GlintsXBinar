require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});
const express = require('express'); //import express from express module

//import routes
const transactions = require('./routes/transactions');

const port = process.env.PORT || 3000; //define the port
const app = express(); //make express app

//enable req.body (json data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/transactions', transactions);

app.listen(port, () => console.log(`The server running on ${port}`));

