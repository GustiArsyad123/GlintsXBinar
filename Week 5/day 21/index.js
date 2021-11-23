const { MongoClient } =require("mongodb"); //import MongoClient

const uri =process.env.MONGO_URI; //address of cluster or server

const connection = new MongoClient(uri, { 
    useNewUrlParser: true, //
    userUnifiedTopology:true,
 }); //Make new connection

 //run the connection
 try{
     connection.connect();

     //if connection succeed
     console.log("MongoDB connected!!");
 } catch (e) {
     //if connection error
     console.error(e);
 }

 //export connection
 module.exports = connection;