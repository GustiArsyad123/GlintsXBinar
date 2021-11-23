const { MongoClient } = require("mongodb");

//connect URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

//const dbName = 'sales_morning';

async function main() {
  try {
    //use connect method to connect to the server
    await client.connect();
    return 'Connected succcessfully to server';
  } catch (error) {
    throw error;
  }
}

main()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

module.exports = client;
