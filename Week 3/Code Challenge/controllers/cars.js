const data = require('../models/data.json')

class Cars{
    getAllCars(req, res, next) {
        try{
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({
                errors: ['internal server errror'],
            });   
        }
    }

    getCarsById(req, res, next) {
        try {
            const filteredById = data.filter(item => item.id === parseInt(req.params.id));

            if (filteredById.length === 0) {
                return res.status(404).json({ error: 'Cars is Not Found!' });
            }

            res.status(200).json({ data: filteredById });

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    addCars(req, res, next) {
        try {
            let setId = data[data.length - 1].id;

            data.push({
                id: setId + 1,
                carName: req.body.carName,
                carType: req.body.carType,
                Price: req.body.Price,
            });

            res.status(201).json({ data });

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    updateCars(req, res, next) {
        try {
            const findDataUpdate = data.some(item => item.id === parseInt(req.params.id));

            if (!findDataUpdate) {
                return res.status(404).json({ error: 'Cars is Not Found!' });
            }

            const editCars = data.map(item =>
                item.id === parseInt(req.params.id)
                    ? {
                        id: parseInt(req.params.id),
                        carName: req.body.carName,
                        carType: req.body.carType,
                        price: req.body.price,
                    }
                    : item
            );

            res.status(200).json({ data: editCars });

        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    deleteCars(req, res, next) {
        try {
            const findDataDelete = data.some(item => item.id === parseInt(req.params.id));

            if (!findDataDelete) {
                return res.status(404).json({ error: 'Cars is Not Found!' });
            }

            const deleteCars = data.filter(item => item.id !== parseInt(req.params.id));

            res.status(200).json({ data: deleteCars });


        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = new Cars();