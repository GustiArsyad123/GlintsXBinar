//const connection = require('../models') //Import connection from models
//const { query } = require('express');
const { query  } = require('../models') //Import connection from models

class Transaction {
    //Asyn allTransactions
    async getAllTransactions(req, res, next) {
        try{
            //find all transaction data and order by id transactions
            const data = await query(
                'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
            );

            if(data.length === 0) {
                return res.status(404).json({errors: ['Transactions not found']});
            }

            res.status(200).json({data});
        } catch (error) {
            res.status(500).json({errors: ["There is something error in Internal Server"]})
        }
    }

    //Create transaction
    createTransaction(req, res, next) {
        try {
            // //Find good and its price
            // connection.query(
            // 'SELECT * FROM goods WHERE id=?',
            // [req.body.id_good], 
            // (err, results) => {
            //     //console.log(results);
            //     const price = results[0].price;
            //     const total = parseFloat(price) * parseInt(req.body.quentity);
            //     console.log(total);
            // })

            // //Insert data
            // connection.qery('INSERT INTO transactions(id_costumer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
            // [req.body.id_customer, req.body.id_good, req.body.quantity, total],
            // (err, results) => {
            //     if (err) {
            //         return res
            //             .status(500)
            //             .json({errors: ['Internal Server Error']});
            //     }
            //     res.status(201).json({ data: results});

            // }
            // );       

         //======From Mr reza in below====   
    //   // Find good and its price
    //   connection.query(
    //     'SELECT * FROM goods WHERE id=?',
    //     [req.body.id_good],
    //     (err, results) => {
    //       if (err) {
    //         return res.status(500).json({ errors: ['Internal Server Error'] });
    //       }

    //       const price = results[0].price;
    //       const total = parseFloat(price) * parseInt(req.body.quantity);

    //       // Insert Data
    //       connection.query(
    //         'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
    //         [req.body.id_customer, req.body.id_good, req.body.quantity, total],
    //         (err, results) => {
    //           if (err) {
    //             return res
    //               .status(500)
    //               .json({ errors: ['Internal Server Error'] });
    //           }

    //           // Find new Data
    //           connection.query(
    //             'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
    //             [results.insertId],
    //             (err, results) => {
    //               if (err) {
    //                 return res
    //                   .status(500)
    //                   .json({ errors: ['Internal Server Error'] });
    //               }

    //               res.status(201).json({ data: results });
    //             }
    //           );
    //         }
    //       );
    //     }
    //   );

    //asyn await
    //find price of good
    const goods = await query('SELECT * FROM goods WHERE id=?', [req.body.id_good]);
    const price = goods[0].price;
    const total = parseFloat(price) * parseInt(req.body.quantity);

    //Insert of data
    const insertData = await query('INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
    [req.body.id_customer, req.body.id_good, req.body.quantity, total]
    );
    //find new data
    const data = await query(
        'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
    [insertData.insertId]
    );
        } catch (error) {
            res.status(500).json({errors: ["There is something error in Internal Server"]})
        }
    }
}

module.exports = new Transaction();