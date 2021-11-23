const express = require('express'); //import express
const {
    getAllCars,
    getCarsById,
    addCars,
    updateCars,
    deleteCars,
} = require('../controllers/cars');
const router = express.Router()//import router

router.get('/', getAllCars);
router.get('/:id', getCarsById);
router.post('/', addCars);
router.put('/:id', updateCars);
router.delete('/:id', deleteCars);

module.exports = router;