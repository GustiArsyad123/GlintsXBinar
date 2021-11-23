const express = require('express');

//import routes
const transactions = require('./routers/transactionRoute');

const port = process.env.PORT || 3000 //define the port

const app = express(); //make express app

//enable req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//using routes
app.use('/transactionRoute', transactions); 

//Running the app in the server
app.listen(port, () => console.log(`server runnign on ${port}`));