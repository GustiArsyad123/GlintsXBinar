const express = require('express'); //Import express

//Import controllers
const { createTransaction } = require('../controllers/transactionCont');

const router = express.Router(); //Create the router

router.post('/', createTransaction);

module.exports = router;