const connection = require("../models"); //Import connection from MongoDB

class Transaction {
  async createTransaction(req, res, next) {
    try {
      const dbConnection = connection.db("sales_morning"); //connect to database salas_morning
      const transaction = dbConnection.collection("transactions");

      const data = await transaction.insertOne(req.body); //create data in mongoDB

      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ errors: "Internal server error" });
    }
  }
}

module.exports = new Transaction();
