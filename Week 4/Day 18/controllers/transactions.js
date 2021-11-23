const { query } = require("../models"); // Import connection from models

class Transaction {
  // All Transactions
  async getAllTransactions(req, res, next) {
    try {
      // Find all transaction data and order by id transactions
      const data = await query(
        "SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id ORDER BY t.id"
      );

      // If data is empty array
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Transactions not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Get Detail
  async getOneTransaction(req, res, next) {
    try {
      // Find spesific transaction by req.params.id
      //const data =
      await query(
        "SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?",
        [req.params.id]
      );

      // If data is empty array
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Transaction not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  // Create transaction
  async createTransaction(req, res, next) {
    try {
      /* Callback */
      // Find good and its price
      // connection.query(
      //   'SELECT * FROM goods WHERE id=?',
      //   [req.body.id_good],
      //   (err, results) => {
      //     if (err) {
      //       return res.status(500).json({ errors: ['Internal Server Error'] });
      //     }
      //     const price = results[0].price;
      //     const total = parseFloat(price) * parseInt(req.body.quantity);
      //     // Insert Data
      //     connection.query(
      //       'INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)',
      //       [req.body.id_customer, req.body.id_good, req.body.quantity, total],
      //       (err, results) => {
      //         if (err) {
      //           return res
      //             .status(500)
      //             .json({ errors: ['Internal Server Error'] });
      //         }
      //         // Find new Data
      //         connection.query(
      //           'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
      //           [results.insertId],
      //           (err, results) => {
      //             if (err) {
      //               return res
      //                 .status(500)
      //                 .json({ errors: ['Internal Server Error'] });
      //             }
      //             res.status(201).json({ data: results });
      //           }
      //         );
      //       }
      //     );
      //   }
      // );

      /* Async Await */
      // Find price of good
      //const goods =
      await query("SELECT * FROM goods WHERE id=?", [req.body.id_good]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      // Insert Data
      const insertedData = await query(
        "INSERT INTO transactions(id_customer, id_good, quantity, total) VALUES (?, ?, ?, ?)",
        [
          req.body.id_customer,
          req.body.id_good,
          req.body.quantity,
          total,
          req.params.id,
        ]
      );

      // Find new Data
      //const data =
      await query(
        "SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?",
        [insertedData.insertId]
      );

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  //   //update data way 1
  //   async updateTransaction(req, res, next) {
  //     try {
  // // ambil data dari tabel transactions
  // const transaction = await query('SELECT * FROM transactions WHERE id=?', [req.params.id])

  // // ambil data dari tabel good base-on tabel transactions
  // const goods = await query('SELECT * FROM goods WHERE id=?', [
  //   transaction[0].id_good,
  // ]);

  // const qty = parseFloat(req.body.quantity)
  // const total = qty * parseFloat(goods[0].price)

  // // update data for field in table transactions
  // await query(`UPDATE transactions SET quantity=${qty}, total=${total} WHERE id=${req.params.id}`)

  // // Find the updated data
  // const data = await query(
  //   'SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t JOIN customers c ON t.id_customer=c.id JOIN goods g ON g.id=t.id_good JOIN suppliers s ON g.id_supplier=s.id WHERE t.id=?',
  //   [req.params.id]
  // );

  //         res.status(201).json({ data });
  //           } catch (error) {
  //         res.status(500).json({ errors: ['Internal Server Error'] });
  //           }
  //   }

  //update way 2
  async updateTransaction(req, res, next) {
    try {
      //find price of goods
      //const goods =
      await query("SELECT * FROM goods WHERE id=?", [req.body.id_good]);
      const price = goods[0].price;
      const total = parseFloat(price) * parseFloat(req.body.quantity);

      //update transaction data
      //const updateData =
      await query(
        "UPDATE transactions SET id_good=?, id_customer=?, quantity=?, total=? WHERE id=?",
        [
          req.body.id_good,
          req.body.id_customer,
          req.body.quantity,
          total,
          req.params.id,
        ]
      );

      res.status(200).json({ data: updateData });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }

  async deleteTransaction(req, res, next) {
    try {
      //const deleteData =
      await query("DELETE FROm transactions WHERE id=?", [req.params.id]);

      if (deleteData.affectedRows === 0) {
        return res.status(404).json({
          errors: ["Transacation has been deleted or it's not exists"],
        });
      }
      res.status(200).json({ data: deleteData });
    } catch (error) {
      res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Transaction();
