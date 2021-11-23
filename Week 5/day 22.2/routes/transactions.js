const express = require("express"); //import express from express

//import transactions
const { createTransaction } = require("../controllers/transactions");

//define routes
const router = express.Router();

//create the routes
router.post("/", createTransaction);

//export the routes
module.exports = router;
